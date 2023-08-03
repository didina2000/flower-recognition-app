<template>
  <div>
    <h1>Flower Recognition App</h1>
    <PlantRecognition :result="result" @image-deleted="onImageDeleted" />
  </div>
</template>

<script>
import PlantRecognition from "./components/PlantRecognition.vue";

export default {
  components: {
    PlantRecognition,
  },
  data() {
    return {
      result: null,
    };
  },
  methods: {
    onImageDeleted() {
      this.result = null;
    },
  },
};
</script>
