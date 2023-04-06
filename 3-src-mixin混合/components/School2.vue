<template>
<div class="Student2-Container">
  <h3 @click="showName">学校名称：{{ name }}</h3>
  <h3>学校地址:{{ address }}</h3>
</div>
</template>

<script>
// ES6按需导入
import { hunhe,hunhe2} from '../mixin.js'
export default {
  name: 'MySchool2',
  data() {
    console.log(this);
    return {
      name: '深圳大学',
      address: '北京'
    }
  },
  mixins:[hunhe,hunhe2]
}
</script>

<style scoped>
.Student2-Container {
  background-color: yellowgreen;
}
</style>