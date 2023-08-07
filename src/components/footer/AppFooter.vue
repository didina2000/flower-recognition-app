<template>
  <footer class="footer">
    <div class="footer-content">
      <p>{{ appName }} - Created by {{ creatorName }}</p>
      <div class="social-icons">
        <a href="https://www.facebook.com/VicliucDidina/" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/dinuta_vicliuc/" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://github.com/didina2000" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-github"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    appName: {
      type: String,
      required: true,
    },
    creatorName: {
      type: String,
      required: true,
    },
    show: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

