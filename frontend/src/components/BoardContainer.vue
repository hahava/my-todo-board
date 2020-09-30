<template>
  <div class="container">
    <h3>MY Todo Board</h3>
    <div class="row">
      <div class="col-12  float-right text-right">
        <span>정렬 방향 : </span>
        <router-link to="/page/sort/vertical">세로</router-link>
        /
        <router-link to="/page/sort/horizontal">ㅁㅁ가로</router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <BoardInputContainer/>
      </div>
    </div>
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {Component, Vue} from 'vue-property-decorator';
import BoardInputContainer from "@/components/BoardInputContainer.vue";
import BoardListContainer from "@/components/BoardListContainer.vue"

@Component({
  components: {
    BoardListVertical: BoardListContainer,
    BoardInputContainer,
  }
})
export default class BoardContainer extends Vue {
}

</script>

<style scoped>

</style>
