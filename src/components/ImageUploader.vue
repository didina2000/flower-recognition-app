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
      // Programmatically trigger the file input click event
      this.$refs.fileInput.click();
    },
    onFileSelected(event) {
      const file = event.target.files[0];
      if (file) {
        this.$emit("image-uploaded", file);
        // Clear the file input value to allow uploading the same image multiple times
        this.$refs.fileInput.value = null;
      }
    },
  },
};
</script>
