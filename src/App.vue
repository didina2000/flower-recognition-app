<!-- App.vue -->

<template>
  <div>
    <h1>Flower Recognition App</h1>
    <PlantRecognition />
  </div>
</template>

<script>
import PlantRecognition from "./components/PlantRecognition.vue";

export default {
  components: {
    PlantRecognition,
  },
};
</script>
