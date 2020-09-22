<template>
  <div v-bind:class="columnSize">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'

@Component
export default class BoardItemContainer extends Vue {

  @Prop() readonly column: string

  get columnSize() {
    return this.column;
  }

}
</script>