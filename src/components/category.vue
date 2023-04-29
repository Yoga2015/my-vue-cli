<template>
  <div id="category">

    <h3>{{ title }}分类</h3>

    <!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充） -->
    <slot :games="games" msg="hello">
      我是默认插槽 , 当使用者没有传递具体结构时 , 我会出现 
    </slot>

  </div>
</template>

<script>
export default {
  name: 'MyCategory',
  props: ['title'],
  data() {
    return {
      games: ['魂斗罗', '拳王97', '王者荣耀', '和平英雄'],
    }
  }
}
</script>

<style scoped>
#category {
  background-color: skyblue;
  width: 200px;
  height: 400px;
}

h3 {
  text-align: center;
  background-color: yellowgreen;
}

img {
  width: 100%
}
</style>