<template>
  <div class="Student-container">
    <h1 v-text="msg"></h1>
    <h3>学生名称：{{ name }}</h3>
    <h3>学生性别:{{ sex }}</h3>
    <h3>学生年龄:{{ Myage }}</h3>
  </div>
</template>

<script>
export default {
  name: 'MyStudent',
  data() {
    console.log(this);
    return {
      msg: '我是清华大学的学生',
      // name: 'zhangsan',
      // sex: '男',
      // age: 18
      Myage: this.age
    }
  },
  // methods: {
  //   updateAge() {
  //     // this.age = 23  不能直接操作 props属性
  //   }
  // },

  // props 节点中的数据 优先级 是 高于 data 节点中的数据的

  // 第一种方式（只接收） ：简单声明接收
  // props: ['name', 'sex', 'age'], 

  // 第二种方式（限制类型）：接收的同时对数据进行类型限制
  // props: {
  //   name: String,
  //   sex: String,
  //   age: Number
  // },

  // 第三种方式(限制类型、限制必要性、指定默认值): 
  props: {
    name: {
      type: String,  // name的类型 是String 
      required: true, // name 是必写的
      // default: 'lisi',   当写了required 就不用写 default 选项了
    },

    sex: {
      type: String,  // sex的类型 是String 
      required: true, // sex 是必写的
    },

    age: {
      type: Number,   // age 的类型 是 Number
      default: 19,   // 默认值
    }
  }
}
</script>

<style scoped>
.SchoolContainer {
  background-color: bisque;
}
</style>