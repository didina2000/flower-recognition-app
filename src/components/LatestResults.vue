<template>
    <div>
      <h2>Latest Search Results</h2>
      <ul>
        <li v-for="(result, index) in latestResults" :key="index">
          <strong>Search {{ index + 1 }}:</strong> {{ result.name }} (Probability: {{ formatProbability(result.probability) }}%)
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  
  export default {
    props: {
      latestResults: Array,
    },
    methods: {
      formatProbability(probability) {
        return (probability * 100).toFixed(2);
      },
    },
  };
  </script>
  