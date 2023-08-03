<template>
  <div>
    <h2>Flower Recognition Result</h2>
    <div v-if="suggestions.length > 0">
      <!-- Loop through the suggestions and display their information -->
      <div v-for="suggestion in suggestions" :key="suggestion.id">
        <div class="flower-info">
          <strong>Name:</strong> {{ suggestion.name }}
        </div>
        <div class="flower-info">
          <strong>Probability:</strong> {{ suggestion.probability }}
        </div>
        <!-- You can display other information like similar images here -->
        <!-- ... (add your code for similar images if needed) ... -->
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
};
</script>
