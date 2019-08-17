<template>
  <div class="expansion-panel-content">
    <div class="box">
      <slot name="content" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.expansion-panel-content {
  overflow: hidden;

  .box {
    padding: 12px;
  }
}
</style>
