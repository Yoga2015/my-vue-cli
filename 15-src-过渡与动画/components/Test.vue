<template>
  <div id="MyTest">
    <button @click="isShow = !isShow">
      显示/隐藏
    </button>
    <!--使用<transition>包裹 要过渡的元素，并配置name属性-->
    <transition
      appear
      name="animate__animated animate__bounce" 
      enter-active-class="animate__swing"
      leave-active-class="animate__backOutUp" >

      <h1 v-show="isShow">hi!</h1>

    </transition>
  </div>
</template>

<script>
import 'animate.css'
export default {
  name: "MyTest",
  data() {
    return {
      isShow: true
    }
  }
}
</script>

<style scoped>
h1 {
  background-color: skyblue;
}
</style>