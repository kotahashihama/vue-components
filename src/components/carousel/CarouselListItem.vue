<template>
  <li
    v-if="link"
    class="carousel-item"
    :style="{ width: width + 'px', height: height + 'px' }"
  >
    <a :href="link" class="link">
      <img :src="image" alt="" class="image" :style="{ maxWidth: width + 'px', maxHeight: height + 'px' }" />
    </a>
  </li>
  <li
    v-else
    class="carousel-item"
    :style="{ width: width + 'px', height: height + 'px' }"
  >
    <img :src="image" alt="" class="image" :style="{ maxWidth: width + 'px', maxHeight: height + 'px' }" />
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
    },
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style>
.carousel-item {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
}

.link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.image {
  display: block;
}
</style>
