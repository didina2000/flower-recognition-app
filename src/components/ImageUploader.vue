<template>
  <div>
    <input
      type="file"
      accept="image/*"
      @change="onFileSelected"
      ref="fileInput"
      style="display: none;"
    />
    <button @click="openFileInput">Upload Image</button>
  </div>
</template>

<script>
export default {
  methods: {
    openFileInput() {
      this.$refs.fileInput.click();
    },
    onFileSelected(event) {
      const file = event.target.files[0];
      if (file) {
        this.$emit("image-uploaded", file);
        this.$refs.fileInput.value = null;
      }
    },
  },
};
</script>
