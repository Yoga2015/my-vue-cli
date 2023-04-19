<template>
  <div id="MyTest">
    <button @click="isShow = !isShow">显示/隐藏</button>
    <h1 v-show="isShow">你好呀！</h1>
  </div>
</template>

<script>
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