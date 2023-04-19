<template>
  <div id="School">
    <h3>学校名称:{{ name }}</h3>
    <h3>学校地址:{{ address }}</h3>
  </div>
</template>
  
<script>
import pubsub from 'pubsub-js'
export default {
  name: "MySchool",
  props: ["getSchoolName"],
  data() {
    return {
      name: '清华大学',
      address: '北京'
    }
  },
  methods: {
    demo(msgName, data) {
      console.log('有人发布了hello消息,hello消息的回调执行了', msgName, data);
    }
  },
  mounted() {
    // 接收方   School组件 接收  Student组件 传递给过来的数据
    // hello 事件
    // this.$bus.$on('hello', (data) => {
    //   console.log('我是 School组件，我收到了数据', data);
    // })

    // console.log(pubsub);
    // this.pubId = pubsub.subscribe('hello', this.demo)

    // 订阅者
    // 订阅消息的id = 订阅消息，编写回调函数
    this.pubId = pubsub.subscribe('hello', (msgName, data) => {
      console.log('有人发布了hello消息,hello消息的回调执行了', msgName, data);
    })

  },
  beforeDestroy() {
    // 取消订阅消息
    pubsub.unsubscribe(this.pubId)
  },
}
</script>

<style scoped>
#School {
  background-color: yellow;
}
</style>