<template>
  <div
    class="carousel-arrows"
    :style="{ width: width + 'px', height: height + 'px' }"
  >
    <CarouselArrow class="arrow" @click="showPrevItem()">left</CarouselArrow>
    <CarouselArrow class="arrow" @click="showNextItem()">right</CarouselArrow>
  </div>
</template>

<script>
import CarouselArrow from "./CarouselArrow.vue";

export default {
  components: {
    CarouselArrow
  },
  props: {
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    }
  },
  methods: {
    showPrevItem() {
      this.$emit("show-prev-item");
    },
    showNextItem() {
      this.$emit("show-next-item");
    }
  }
};
</script>

<style lang="scss" scoped>
.carousel-arrows {
  z-index: 1;
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}
</style>
