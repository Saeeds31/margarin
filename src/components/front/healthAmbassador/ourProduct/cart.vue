<template>
  <div class="ourProductCart">
    <div class="svg">
      <img class="ourProductImage" :src="data.image" :alt="data.title" />
    </div>

    <h1>{{ data.title }}</h1>
    <p>{{ data.text }}</p>
  </div>
</template>
<script>
export default {
  props: {
    data: Object
  }
};
</script>
<style scoped>
img.ourProductImage {
    width: 100px;
    border-radius: 20px;
}
</style>
