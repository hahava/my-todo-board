<template>
  <div id="app">
    <BoardContainer></BoardContainer>
  </div>
</template>

<script>
import BoardContainer  from "./components/BoardContainer"

export default {
  name: 'App',
  components: {
      BoardContainer
  }
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
