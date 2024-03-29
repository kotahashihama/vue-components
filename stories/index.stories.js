import { storiesOf } from "@storybook/vue";

import Carousel from "../src/components/carousel/Carousel.vue";
import ExpansionPanel from "../src/components/expansion-panel/ExpansionPanel.vue";

storiesOf("カルーセル", module).add("Carousel", () => ({
  components: { Carousel },
  data() {
    return {
      interval: 5000,
      width: 790,
      height: 500,
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
      ],

      interval2: 3000,
      width2: 450,
      height2: 300,
      items2: [
        {
          image: "https://placehold.jp/120x340.png",
          link: "http://example.com/"
        },
        {
          image: "https://placehold.jp/330x200.png",
          link: ""
        },
        {
          image: "https://placehold.jp/300x100.png",
          link: ""
        },
        {
          image: "https://placehold.jp/450x300.png",
          link: "http://example.com/"
        }
      ]
    };
  },
  template: `<div>
               <Carousel :interval="interval" :width="width" :height="height" :items="items" />
               <Carousel :interval="interval2" :width="width2" :height="height2" :items="items2" />
             </div>`
}));

storiesOf("開閉パネル", module).add("ExpansionPanel", () => ({
  components: { ExpansionPanel },
  data() {
    return {
      isOpen: true
    };
  },
  template: `<div>
               <ExpansionPanel :is-open="isOpen" style="width: 320px;"><template v-slot:title>タイトル</template><template v-slot:content>この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</template></ExpansionPanel>
               <ExpansionPanel style="width: 320px;"><template v-slot:title>タイトル</template><template v-slot:content>この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</template></ExpansionPanel>
               <ExpansionPanel style="width: 320px;"><template v-slot:title>タイトルタイトルタイトルタイトルタイトルタイトル</template><template v-slot:content>この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</template></ExpansionPanel>
             </div>`
}));
