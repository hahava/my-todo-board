<template>
  <div class="col-4">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "BoardItemContainer",
        props: ["type"]
    }
</script>

<style scoped>

</style>
