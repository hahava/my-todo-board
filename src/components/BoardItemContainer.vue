<template>
  <div class="col-4">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

@Component
export default class BoardItemContainer extends Vue {
}
</script>