<template>
  <div id="category">

    <h3>{{ title }}分类</h3>

    <!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充） -->
    <slot>我是一些默认值,当使用者没有传递具体结构时,我会出现 </slot><br>
    <slot name="center">我是具名插槽1,当使用者没有传递具体结构时,我会出现</slot>
    <br><br>
    <slot name="footer">我是具名插槽2,当使用者没有传递具体结构时,我会出现</slot>
    <br><br>
  </div>
</template>

<script>
export default {
  name: 'MyCategory',
  props: ['title']
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