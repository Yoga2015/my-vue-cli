<template>
  <div class="container">
    <Category title="美食" class="meishi">

      <img src="./assets/img/ningmeng.png">

      <template v-slot:footer>
        <a href="https://www.baidu.com">更多详情</a>
      </template>

    </Category>

    <Category title="游戏">

      <template #center>
        <ul>
          <li v-for="(game, index) in games" :key="index">{{ game }}</li>
        </ul>
      </template>

      <template #footer>
        <a href="www.baidu.com"> 更多美食 </a>&nbsp;
        <a href="www.baidu.com"> 早餐 </a>
      </template>

    </Category>

    <Category title="电影">

     <video src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls>
     </video>

    </Category>

    <Category title="旅游">
      <template #center>
        <a href="www.baidu.com"> 北京故宫 </a>
      </template>

      <template #footer>
        <a href="www.baidu.com"> 沈阳故宫 </a>
      </template>
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
  flex-wrap: wrap;
}

video {
  width: 100%;
}

meishi {
  width: 30%;
  margin-top: 2%;
}
</style>