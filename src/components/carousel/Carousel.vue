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

<style scoped>
.carousel {
  overflow: hidden;
  width: 800px;
  height: 450px;
}

.carousel-list {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}
</style>
