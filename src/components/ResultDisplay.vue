<template>
  <div>
    <h2>Flower Recognition Result</h2>
    <div v-if="result">
      <div class="flower-info"><strong>Name:</strong> {{ result.name }}</div>
      <div class="flower-info">
        <strong>Common Name:</strong>
        {{ result.common_name || "Not available" }}
      </div>
      <div class="flower-info">
        <strong>Family:</strong> {{ result.family || "Not available" }}
      </div>
      <div class="flower-info">
        <strong>Genus:</strong> {{ result.genus || "Not available" }}
      </div>
      <div class="flower-info">
        <strong>Order:</strong> {{ result.order || "Not available" }}
      </div>
      <div class="flower-info">
        <strong>Family Common Name:</strong>
        {{ result.family_common_name || "Not available" }}
      </div>
      <div class="flower-info">
        <strong>Scientific Name:</strong>
        {{ result.scientific_name || "Not available" }}
      </div>
      <div class="flower-description">
        <strong>Description:</strong>
        {{ result.description || "Not available" }}
      </div>
      <!-- Add more details about the flower if available -->
    </div>
    <div v-else>
      <p>No flower recognition result available.</p>
    </div>
  </div>
</template>

<style>
.flower-info {
  margin-bottom: 8px;
}

.flower-description {
  margin-top: 16px;
}
</style>

<script>
export default {
  props: {
    result: {
      type: Object,
      required: true,
    },
  },
};
</script>
