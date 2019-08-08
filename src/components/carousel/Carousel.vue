<template>
  <div class="carousel">
    <ul class="carousel-list">
      <CarouselItem
        v-for="(item, index) in items"
        :key="index"
        :image="item.image"
        :link="item.link"
      />
    </ul>
    <div class="arrow">
      <div class="arrow-left">
        <i class="material-icons">keyboard_arrow_left</i>
      </div>
      <div class="arrow-right">
        <i class="material-icons">keyboard_arrow_right</i>
      </div>
    </div>
  </div>
</template>

<script>
import CarouselItem from "./CarouselItem.vue";

export default {
  components: {
    CarouselItem
  },
  data() {
    return {
      items: [
        {
          image: "http://placehold.jp/800x450.png",
          link: "a"
        },
        {
          image: "http://placehold.jp/800x450.png",
          link: ""
        },
        {
          image: "http://placehold.jp/800x450.png",
          link: ""
        },
        {
          image: "http://placehold.jp/800x450.png",
          link: ""
        },
        {
          image: "http://placehold.jp/800x450.png",
          link: ""
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.carousel {
  overflow: hidden;
  position: relative;
  width: 800px;
  height: 450px;

  &-list {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }
}

.arrow {
  z-index: 1;
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 800px;
  height: 450px;
  color: #fff;

  .material-icons {
    font-size: 3rem;
  }

  &-left,
  &-right {
    cursor: pointer;
    pointer-events: auto;
  }
}
</style>
