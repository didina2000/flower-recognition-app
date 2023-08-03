<template>
  <div>
    <div id="app-content">
      <h1>Flower Recognition App</h1>
      <PlantRecognition :result="result" @image-deleted="onImageDeleted" />
    </div>
    <AppFooter
      :show="showFooter"
      appName="Flower Recognition App"
      creatorName="Dinuța Vicliuc"
    />
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
      showFooter: false,
    };
  },
  methods: {
    onImageDeleted() {
      this.result = null;
    },
    handleScroll() {
      const scrollPosition = window.scrollY;
      const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      this.showFooter = scrollPosition > pageHeight * 0.7;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
