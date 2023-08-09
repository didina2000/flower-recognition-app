<template>
    <div id="app-content">
      <NavBar @open-modal="showAuthModal" />
      <h1>Flower Recognition App</h1>
      <PlantRecognition :result="result" @image-deleted="onImageDeleted" />
    </div>
    <AppFooter appName="Flower Recognition App" creatorName="Dinuța Vicliuc" :show="true"/>
</template>


<script>
import PlantRecognition from "./components/PlantRecognition.vue";
import AppFooter from "./components/footer/AppFooter.vue";
import NavBar from './navbar/NavBar.vue';


export default {
  components: {
    PlantRecognition,
    AppFooter,
    NavBar
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
