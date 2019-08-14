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
  props: {
    interval: {
      type: Number,
      default: 0
    },
    items: {
      type: Array,
      default: []
    },
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  mounted() {
    this.autoPaging();
  },
  methods: {
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
