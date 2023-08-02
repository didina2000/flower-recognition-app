<template>
  <div>
    <input
      type="file"
      accept="image/*"
      @change="onFileSelected"
      ref="fileInput"
    />
    <button @click="recognizePlant">Recognize Plant</button>
    <div v-if="result">
      <h2>Plant Recognition Result</h2>
      <p><strong>Name:</strong> {{ result.name }}</p>
      <p>
        <strong>Common Name:</strong>
        {{ result.common_name || "Not available" }}
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const API_ENDPOINT = "https://plant.id/api/v3/identification";
const PLANT_ID_API_KEY = "o05RyjwfXOzLBeUpwbsEIsgrgDntZLRxOqVYd1ryjsWM33jqfk";

export default {
  data() {
    return {
      imageFile: null,
      result: null,
    };
  },
  methods: {
    onFileSelected(event) {
      this.imageFile = event.target.files[0];
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

          this.result = response.data;
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
