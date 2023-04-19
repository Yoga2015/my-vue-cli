<template>
  <div id="Student">
    <h3>学生名称:{{ name }}</h3>
    <h3>学习年龄:{{ age }}</h3>
    <button @click="SendStudentName">把学生名字发送给School组件</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: "MyStudent",
  data() {
    return {
      name: '张三',
      age: 18
    }
  },
  // mounted() {
  //   // console.log('Student', window.x);
  //   // console.log('Student', this.x);
  // }
  methods: {
    // 发送方   把学生名字发送给 School组件
    //  hello 事件
    SendStudentName() {
      // 发送数据
      // this.$bus.$emit('hello', this.name)

      // 发布消息   pubsub.publish('消息名', 消息的内容)  
      pubsub.publish('hello', 666)

    }
  },

  beforeDestroy() {
    // this.$bus.$off()
  },
};
</script>

<style>
#Student {
  background-color: antiquewhite;
}
</style>
