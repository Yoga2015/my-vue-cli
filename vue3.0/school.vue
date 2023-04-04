<template>
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <student></student>
  </div>
</template>

<script>
export default {
  name: MyShool,
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
  //注册组件（局部）
  components: {
    student,
  },
}
</script>

<style>
.demo {
  background-color: antiquewhite;
}
</style>