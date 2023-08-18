<template>
    <div>
      <ul>
        <li v-for="(result, index) in latestResults" :key="index">
          <strong>Search {{ index + 1 }}:</strong> {{ result.name }} (Probability: {{ formatProbability(result.probability) }}%)
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue.';
  
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
  