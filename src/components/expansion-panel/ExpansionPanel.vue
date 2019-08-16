<template>
  <div class="expansion-panel">
    <ExpansionPanelHeader>
      <template v-slot:title>
        <slot name="title" />
      </template>
    </ExpansionPanelHeader>

    <ExpansionPanelContent>
      <template v-slot:content>
        <slot name="content" />
      </template>
    </ExpansionPanelContent>
  </div>
</template>

<script>
import ExpansionPanelHeader from "./ExpansionPanelHeader.vue";
import ExpansionPanelContent from "./ExpansionPanelContent.vue";

export default {
  components: {
    ExpansionPanelHeader,
    ExpansionPanelContent
  }
};
</script>

<style lang="scss" scoped>
.expansion-panel {
  border: solid 1px #d0d0d0;
  border-radius: 3px;
}
</style>
