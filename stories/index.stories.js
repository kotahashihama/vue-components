import { storiesOf } from "@storybook/vue";

import Carousel from "../src/components/carousel/Carousel.vue";

storiesOf("カルーセル", module).add("Carousel", () => ({
  components: { Carousel },
  data() {
    return {
      interval: 5000,
      items: [
        {
          image: "https://placehold.jp/790x300.png",
          link: "http://example.com/"
        },
        {
          image: "https://placehold.jp/150x150.png",
          link: ""
        },
        {
          image: "https://placehold.jp/300x100.png",
          link: ""
        },
        {
          image: "https://placehold.jp/500x440.png",
          link: "http://example.com/"
        },
        {
          image: "https://placehold.jp/220x500.png",
          link: ""
        }
      ]
    };
  },
  template: `<Carousel :interval="interval" :items="items" />`
}));
