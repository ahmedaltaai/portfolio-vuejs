<template>
  <div class="tag__container">
    <div class="tag">
      <slot name="tag"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tag'
}
</script>

<style lang="scss" scoped>
.tag__container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .tag {
    background-color: #3a3d44;
    color: #ddd;
    padding: 0.5em 1em;
    border-radius: 5px;
    margin: 0.3em 1em;
  }
}
</style>
