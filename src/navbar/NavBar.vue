<template>
  <nav class="navbar">
    <div class="navbar-title">Flower Recognition App</div>
    <Authentication />
  </nav>
</template>

<script>
import Authentication from '../auth/Authentication.vue';

export default {
  components: {
    Authentication,
  },
};
</script>
