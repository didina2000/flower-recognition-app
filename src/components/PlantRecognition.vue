<template>
  <div>
    <div class="upload-container">
      <label class="choose-file-btn">
        <i class="fas fa-file-upload"></i> Choose File
        <input
          type="file"
          accept="image/*"
          @change="onFileSelected"
          ref="fileInput"
          style="display: none;"
        />
      </label>
      <button
        @click="recognizePlant"
        class="choose-file-btn"
        :disabled="isIdentifyButtonDisabled"
      >
        <i class="fas fa-search"></i> Identify
      </button>
    </div>
    <div v-if="imageFile" class="image-container">
      <h2>Uploaded Plant Photo</h2>
      <img :src="imagePreviewUrl" alt="Uploaded Plant" class="uploaded-image" />
    </div>

    <ResultDisplay
      v-if="result && result.classification"
      :suggestions="result.classification.suggestions"
    />
  </div>
</template>

<style>
.upload-container {
  text-align: center;
  margin-bottom: 20px;
}

.choose-file-btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: lavender;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 0;
  width: 150px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  line-height: 1;
  margin-right: 10px;
}

.choose-file-btn:focus {
  outline: none;
}

.choose-file-btn input[type="file"] {
  display: none;
}

.choose-file-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.icon {
  margin-right: 5px;
}

.image-container {
  text-align: center;
}

.uploaded-image {
  max-width: 300px;
  max-height: 300px;
  display: block;
  margin: 0 auto;
}
</style>

<script>
import axios from "axios";
import ResultDisplay from "./ResultDisplay.vue";

const API_ENDPOINT = "https://plant.id/api/v3/identification";
const PLANT_ID_API_KEY = "o05RyjwfXOzLBeUpwbsEIsgrgDntZLRxOqVYd1ryjsWM33jqfk";

export default {
  components: {
    ResultDisplay,
  },
  data() {
    return {
      imageFile: null,
      imagePreviewUrl: null,
      result: null,
    };
  },

  computed: {
    isIdentifyButtonDisabled() {
      return !this.imageFile;
    },
  },

  methods: {
    onFileSelected(event) {
      this.imageFile = event.target.files[0];
      this.imagePreviewUrl = URL.createObjectURL(event.target.files[0]);
    },

    async recognizePlant() {
      try {
        if (this.imageFile) {
          const base64Image = await this.convertImageToBase64(this.imageFile);

          const payload = {
            images: [base64Image],
            latitude: 49.207,
            longitude: 16.608,
            similar_images: true,
          };

          const response = await axios.post(API_ENDPOINT, payload, {
            headers: {
              "Api-Key": PLANT_ID_API_KEY,
              "Content-Type": "application/json",
            },
          });
          this.result = response.data.result;
        }
      } catch (error) {
        console.error("Error calling Plant.id API:", error);
      }
    },

    convertImageToBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result.split(",")[1]);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    },
  },
};
</script>
