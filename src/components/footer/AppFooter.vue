<template>
  <footer :class="{ footer: true, 'show-footer': show }">
    <div class="footer-content">
      <p>{{ appName }} - Created by {{ creatorName }}</p>
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
