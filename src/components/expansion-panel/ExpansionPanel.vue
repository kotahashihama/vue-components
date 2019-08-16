<template>
  <div class="expansion-panel">
    <ExpansionPanelHeader :is-open="isOpen" @click="togglePanel()">
      <template v-slot:title>
        <slot name="title" />
      </template>
    </ExpansionPanelHeader>

    <transition
      name="expansion-panel-content"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
    >
      <ExpansionPanelContent v-if="isOpen">
        <template v-slot:content>
          <slot name="content" />
        </template>
      </ExpansionPanelContent>
    </transition>
  </div>
</template>

<script>
import ExpansionPanelHeader from "./ExpansionPanelHeader.vue";
import ExpansionPanelContent from "./ExpansionPanelContent.vue";

export default {
  components: {
    ExpansionPanelHeader,
    ExpansionPanelContent
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    togglePanel() {
      this.isOpen = !this.isOpen;
    },
    beforeEnter(el) {
      el.style.height = "0";
    },
    enter(el) {
      el.style.height = el.scrollHeight + "px";
    },
    beforeLeave(el) {
      el.style.height = el.scrollHeight + "px";
    },
    leave(el) {
      el.style.height = "0";
    }
  }
};
</script>

<style lang="scss" scoped>
.expansion-panel {
  border: solid 1px #d0d0d0;
  border-radius: 3px;

  &-content {
    &-enter-active,
    &-leave-active {
      transition: height 0.3s;
    }
    &-enter,
    &-leave-to {
      height: 0;
    }
  }
}
</style>
