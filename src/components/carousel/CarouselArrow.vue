<template>
  <div class="carousel-arrow" @click="$emit('click')">
    <i class="material-icons">keyboard_arrow_<slot /></i>
  </div>
</template>

<style lang="scss" scoped>
.carousel-arrow {
  cursor: pointer;
  pointer-events: auto;
}

.material-icons {
  font-size: 3rem;
}
</style>
