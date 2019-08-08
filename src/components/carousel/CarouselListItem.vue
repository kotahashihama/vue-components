<template>
  <li v-if="link" class="carousel-item">
    <a :href="link">
      <img :src="image" alt="" class="image" />
    </a>
  </li>
  <li v-else class="carousel-item">
    <img :src="image" alt="" class="image" />
  </li>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: ""
    },
    link: {
      type: String,
      default: ""
    }
  }
};
</script>

<style>
.carousel-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 450px;
  background: #000;
}

.image {
  display: block;
}
</style>
