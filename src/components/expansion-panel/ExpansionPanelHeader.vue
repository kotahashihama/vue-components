<template>
  <div class="expansion-panel-header" @click="$emit('click')">
    <ExpansionPanelHeaderTitle>
      <template v-slot:title>
        <slot name="title" />
      </template>
    </ExpansionPanelHeaderTitle>

    <ExpansionPanelHeaderArrow :class="{ open: isOpen }" />
  </div>
</template>

<script>
import ExpansionPanelHeaderTitle from "./ExpansionPanelHeaderTitle.vue";
import ExpansionPanelHeaderArrow from "./ExpansionPanelHeaderArrow.vue";

export default {
  components: {
    ExpansionPanelHeaderTitle,
    ExpansionPanelHeaderArrow
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.expansion-panel-header {
  cursor: pointer;
  display: flex;
  padding: 12px;
  background: #f3f3f3;
}

.open {
  transform: rotateX(180deg);
}
</style>
