<template>
  <div id="MyTest">
    <button @click="isShow = !isShow">
      显示/隐藏
    </button>
    <!-- 若有多个元素需要过度，则需要使用：<transition-group> ，
      且每个元素都要指定 key 值。 -->
    <transition-group 
    appear 
    name="animate__animated animate__bounce"
    enter-active-class="animate__swing"
    leave-active-class="animate__backOutUp">

      <h1 v-show="isShow" key="1">你好!</h1>
      <h1 v-show="!isShow" key="2">hello!</h1>

    </transition-group>
  </div>
</template>

<script>
import 'animate.css'
export default {
  name: "MyTest2",
  data() {
    return {
      isShow: true
    }
  }
}
</script>

<style scoped>
h1 {
  background-color: orange;
}
</style>