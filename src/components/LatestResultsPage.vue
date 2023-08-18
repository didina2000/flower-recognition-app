<template>
    <div>
      <LatestResults v-if="showResults" :latestResults="latestResults" />
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue.';
  import { auth, firestore } from '../firebase';
  import LatestResults from '../components/LatestResults.vue';
  
  export default {
    components: {
      LatestResults,
    },
    setup() {
      const user = ref(null);
      const latestResults = ref([]);
      const showResults = ref(false);
  
      onMounted(async () => {
        const currentUser = auth.currentUser;
        if (currentUser) {
          user.value = currentUser;
          const latestResultsRef = firestore.collection('latestResults').doc(currentUser.uid);
          const snapshot = await latestResultsRef.get();
          if (snapshot.exists) {
            latestResults.value = snapshot.data().results || [];
          }
        }
      });
  
      const showLatestResults = () => {
        showResults.value = true;
      };
  
      return {
        user,
        latestResults,
        showResults,
        showLatestResults,
      };
    },
  };
  </script>
  
  <style scoped>
  .latest-results-button {
    margin-bottom: 10px;
  }
  </style>
  