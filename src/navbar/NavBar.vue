<template>
  <nav class="navbar">
    <div class="navbar-title">Flower Recognition App</div>
    <Authentication />
  </nav>
</template>


<script>
import { auth } from '../firebase';
import Authentication from '../auth/Authentication.vue';

export default {
  components: {
    Authentication,
  },
  mounted() {
    auth.onAuthStateChanged(user => {
      if (user) {
        localStorage.setItem('authenticated', 'true');
      } else {
        localStorage.removeItem('authenticated');
      }
    });
  },
};
</script>
