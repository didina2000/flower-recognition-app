<template>
  <div class="modal">
    <div class="modal-content">
      <h3>{{ plant.name }}</h3>
      <img :src="plant.imageUrl" alt="Plant" class="modal-image" />
      <p>{{ plant.description }}</p>
      <a :href="plant.wikipediaLink" target="_blank">Read more on Wikipedia</a>
      <button @click="$emit('close')">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    plant: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  text-align: center;
}

.modal-image {
  max-width: 100%;
  max-height: 200px;
  margin-bottom: 10px;
}
</style>
