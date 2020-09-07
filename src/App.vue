<template>
  <div id="app">
    <BoardContainer></BoardContainer>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import BoardContainer from "@/components/BoardContainer.vue";

@Component({
  components: {
    BoardContainer
  },
})

export default class App extends Vue {
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  width: 1120px;
  max-width: none !important;
}
</style>
