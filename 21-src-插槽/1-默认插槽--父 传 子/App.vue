<template>
  <div class="container">
    <Category title="美食">
      <img src="./assets/img/ningmeng.png">
    </Category>

    <Category title="美食">
      <ul>
        <li v-for="(game, index) in games" :key="index">{{ game }}</li>
      </ul>
    </Category>

    <Category title="电影">
      <video src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls>
      </video>
    </Category>
  </div>
</template>

<script>
import Category from './components/category.vue'
export default {
  name: 'MyApp',
  components: { Category },
  data() {
    return {
      foods: ['鸡蛋', '牛肉', '青菜', '香蕉'],
      games: ['魂斗罗', '拳王97', '王者荣耀', '和平英雄'],
      films: ['少林寺', '叶问', '杀破狼', '十月革命']
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}

video {
  width: 100%;
}
</style>