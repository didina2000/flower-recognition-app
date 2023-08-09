<template>
    <div id="app-content">
      <h1>Flower Recognition App</h1>
      <PlantRecognition :result="result" @image-deleted="onImageDeleted" />
      <Authentication />
    </div>
    <AppFooter appName="Flower Recognition App" creatorName="Dinuța Vicliuc" />
</template>


<script>
import PlantRecognition from "./components/PlantRecognition.vue";
import AppFooter from "./components/footer/AppFooter.vue";
import Authentication from './auth/Authentication.vue';


export default {
  components: {
    Authentication,
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
