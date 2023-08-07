<template>
  <div>
    <div id="app-content">
      <h1>Flower Recognition App</h1>
      <PlantRecognition :result="result" @image-deleted="onImageDeleted" />
    </div>
    <AppFooter appName="Flower Recognition App" creatorName="Dinuța Vicliuc" />
  </div>
</template>

<script>
import PlantRecognition from "./components/PlantRecognition.vue";
import AppFooter from "./components/footer/AppFooter.vue";

export default {
  components: {
    PlantRecognition,
    AppFooter,
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
