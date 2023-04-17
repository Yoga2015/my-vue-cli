<template>
  <div id="Student">
    <h3>学生名称:{{ name }}</h3>
    <h3>学习年龄:{{ age }}</h3>
    <button @click="sendStudentName()">把学生名给 App组件</button>
    <button @click="unbind">解绑customEvent自定义事件</button>
    <button @click="death">销毁当前Student组件的实例(vc)</button>
  </div>
</template>

<script>
export default {
  name: "MyStudent",
  data() {
    return {
      name: '张三',
      age: 18
    }
  },
  methods: {
    sendStudentName() {
      // 触发 student组件实例身上 的 customEvent 自定义事件
      this.$emit('customEvent', this.name, 666, 777, 888)
      // this.$emit('demo')
    },
    // 解绑自定义事件
    unbind() {
      this.$off('customEvent')  // 解绑一个自定义事件
      // this.$off(['customEvent', 'demo'])  // 解绑多个自定义事件
      // this.$off()  // 解绑所有自定义事件
    },

    // 通过 销毁 Student组件的实例 也能达到 解绑所有自定义事件 
    // 无论 vm 还是 vc 被销毁后，身上的自定义事件、定时器 等等就都销毁了  
    death() {
      this.$destroy();
    }
  }
};
</script>

<style>
#Student {
  background-color: antiquewhite;
}
</style>
