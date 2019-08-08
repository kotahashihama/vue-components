<template>
  <ul class="carousel-set">
    <CarouselListItem
      ref="index"
      v-for="(item, index) in items"
      :key="index"
      :image="item.image"
      :link="item.link"
    />
  </ul>
</template>

<script>
import CarouselListItem from "./CarouselListItem.vue";

export default {
  components: {
    CarouselListItem
  },
  props: {
    items: {
      type: Array,
      default: []
    }
  }
};
</script>

<style lang="scss" scoped>
.carousel-set {
  list-style: none;
  position: relative;
  display: flex;
  margin: 0;
  padding: 0;
  transition: left 1s;
}
</style>
