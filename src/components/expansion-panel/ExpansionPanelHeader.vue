<template>
  <div class="expansion-panel-header">
    <ExpansionPanelHeaderTitle>
      <template v-slot:title>
        <slot name="title" />
      </template>
    </ExpansionPanelHeaderTitle>

    <ExpansionPanelHeaderArrow />
  </div>
</template>

<script>
import ExpansionPanelHeaderTitle from "./ExpansionPanelHeaderTitle.vue";
import ExpansionPanelHeaderArrow from "./ExpansionPanelHeaderArrow.vue";

export default {
  components: {
    ExpansionPanelHeaderTitle,
    ExpansionPanelHeaderArrow
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
</style>
