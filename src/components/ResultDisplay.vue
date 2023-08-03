<template>
  <div>
    <h2>Flower Recognition Result</h2>
    <div v-if="suggestions.length > 0">
      <div v-for="suggestion in suggestions" :key="suggestion.id">
        <div class="flower-info">
          <strong>Name:</strong> {{ suggestion.name }}
        </div>
        <div class="flower-info">
          <strong>Probability:</strong>
          {{ formatProbability(suggestion.probability) }}%
        </div>
        <div
          v-if="
            suggestion.similar_images && suggestion.similar_images.length > 0
          "
        >
          <strong>Similar Images:</strong>
          <div class="similar-images-container">
            <div
              v-for="similarImage in suggestion.similar_images"
              :key="similarImage.id"
              class="image-container"
            >
              <img
                :src="similarImage.url"
                alt="Similar Plant"
                class="similar-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>No flower recognition result available.</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    suggestions: {
      type: Array,
      required: true,
    },
  },
  methods: {
    formatProbability(probability) {
      return (probability * 100).toFixed(2);
    },
  },
};
</script>
