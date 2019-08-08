<template>
  <div class="carousel">
    <transition name="fade">
      <CarouselList
        :items="items"
        :style="{
          width: itemWidth * items.length + 'px',
          left: itemWidth * -currentItem + 'px'
        }"
      />
    </transition>
    <CarouselArrows
      @show-prev-item="showPrevItem()"
      @show-next-item="showNextItem()"
    />
  </div>
</template>

<script>
import CarouselList from "./CarouselList.vue";
import CarouselArrows from "./CarouselArrows.vue";

export default {
  components: {
    CarouselList,
    CarouselArrows
  },
  data() {
    return {
      items: [
        {
          image: "http://placehold.jp/800x450.png",
          link: ""
        },
        {
          image: "http://placehold.jp/150x150.png",
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
      ],
      currentItem: 0,
      itemWidth: 800,
      interval: 5000
    };
  },
  mounted() {
    this.autoPaging();
  },
  methods: {
    autoPaging() {
      setInterval(() => {
        this.currentItem++;

        if (this.currentItem === this.items.length) {
          this.currentItem = 0;
        }
      }, this.interval);
    },
    showPrevItem() {
      const lastItem = this.items.length - 1;

      if (this.currentItem === 0) {
        this.currentItem = lastItem;
      } else {
        this.currentItem--;
      }
    },
    showNextItem() {
      const lastItem = this.items.length - 1;

      if (this.currentItem === lastItem) {
        this.currentItem = 0;
      } else {
        this.currentItem++;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.carousel {
  overflow: hidden;
  position: relative;
  width: 800px;
  height: 450px;
}
</style>
