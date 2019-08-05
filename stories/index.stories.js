import { storiesOf } from "@storybook/vue";

import Carousel from "../src/components/carousel/Carousel.vue";

storiesOf("カルーセル", module).add("Carousel", () => ({
  components: { Carousel },
  template: "<Carousel />"
}));
