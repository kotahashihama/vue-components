<template>
  <div class="expansion-panel-content">
    <ExpansionPanelContentBox>
      <template v-slot:content>
        <slot name="content" />
      </template>
    </ExpansionPanelContentBox>
  </div>
</template>

<script>
import ExpansionPanelContentBox from "./ExpansionPanelContentBox.vue";

export default {
  components: {
    ExpansionPanelContentBox
  }
};
</script>

<style lang="scss" scoped>
.expansion-panel-content {
  overflow: hidden;
}
</style>
