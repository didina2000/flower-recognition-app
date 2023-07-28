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
        const formData = new FormData();
        formData.append("images", this.imageFile);
        formData.append("latitude", 49.207);
        formData.append("longitude", 16.608);
        formData.append("similar_images", true);

        const response = await axios.post(API_ENDPOINT, formData, {
          headers: {
            "Api-Key": PLANT_ID_API_KEY,
            "Content-Type": "application/json",
          },
        });

        this.result = response.data;
      } catch (error) {
        console.error("Error calling Plant.id API:", error);
      }
    },
  },
};
</script>
