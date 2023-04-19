<template>
  <div id="School">
    <h3>学校名称:{{ name }}</h3>
    <h3>学校地址:{{ address }}</h3>
  </div>
</template>
  
<script>
export default {
  name: "MySchool",
  props: ["getSchoolName"],
  data() {
    return {
      name: '清华大学',
      address: '北京'
    }
  },
  mounted() {
    // console.log('School',window.x);
    // console.log('School', this);

    // 接收方   School组件 接收  Student组件 传递给过来的数据
    // hello 事件
    this.$bus.$on('hello', (data) => {
      console.log('我是 School组件，我收到了数据', data);
    })
  },
  beforeDestroy() {
    this.$bus.$off()
  },
}
</script>

<style scoped>
#School {
  background-color: yellow;
}
</style>