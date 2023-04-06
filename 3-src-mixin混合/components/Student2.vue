<template>
  <div class="Student2-Container">
    <h3 @click="showName">学生名称：{{ name }}</h3>
    <h3>学生性别:{{ sex }}</h3>
  </div>
</template>

<script>
// ES6按需导入
import { hunhe, hunhe2 } from '../mixin.js'
export default {
  name: 'MyStudent2',
  data() {
    console.log(this);
    return {
      name: 'lisi',
      sex: '男'
    }
  },
  mixins: [hunhe, hunhe2],
  // 当前组件中的生命周期函数 和 mixin中的数据冲突了 ，此时就共存在一起
  mounted() {
    console.log('hello !!!!');
  }
}
</script>

<style scoped>
.Student2-Container {
  background-color: gold;
}
</style>