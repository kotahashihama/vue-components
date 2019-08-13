<template>
  <div class="carousel" :style="{ width: width + 'px', height: height + 'px' }">
    <transition name="fade">
      <CarouselList
        ref="carouselList"
        :items="items"
        :width="width"
        :height="height"
        :style="{
          width: width * items.length + 'px',
          left: width * -currentIndex + 'px'
        }"
      />
    </transition>
    <CarouselArrows
      :width="width"
      :height="height"
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
          image: "http://placehold.jp/790x300.png",
          link: "http://example.com/"
        },
        {
          image: "http://placehold.jp/150x150.png",
          link: ""
        },
        {
          image: "http://placehold.jp/300x100.png",
          link: ""
        },
        {
          image: "http://placehold.jp/500x440.png",
          link: "http://example.com/"
        },
        {
          image: "http://placehold.jp/220x500.png",
          link: ""
        }
      ],
      interval: 5000,

      currentIndex: 0,
      width: 0,
      height: 0
    };
  },
  mounted() {
    this.setCarouselSize();
    this.autoPaging();
  },
  methods: {
    setCarouselSize() {
      window.onload = () => {
        const listItems = Array.from(this.$refs.carouselList.$el.children);
        const imageWidths = listItems.map(item => {
          const childElement = item.children[0];
          if (childElement.tagName === "A") {
            return childElement.children[0].clientWidth;
          } else {
            return childElement.clientWidth;
          }
        });
        const imageHeights = listItems.map(item => {
          const childElement = item.children[0];
          if (childElement.tagName === "A") {
            return childElement.children[0].clientHeight;
          } else {
            return childElement.clientHeight;
          }
        });
        this.width = Math.max(...imageWidths);
        this.height = Math.max(...imageHeights);
      };
    },
    autoPaging() {
      setInterval(() => {
        this.showNextItem();
      }, this.interval);
    },
    showPrevItem() {
      if (this.currentIndex === 0) {
        this.currentIndex = this.items.length - 1;
      } else {
        this.currentIndex--;
      }
    },
    showNextItem() {
      if (this.currentIndex === this.items.length - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.carousel {
  overflow: hidden;
  position: relative;
}
</style>
