<template>
  <div class="expansion-panel-header-title">
    <slot name="title" />
  </div>
</template>

<style lang="scss" scoped>
.expansion-panel-header-title {
  width: calc(100% - 28px);
  font-weight: bold;
}
</style>
