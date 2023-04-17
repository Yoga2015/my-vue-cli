<template>
  <div id="app">
    <h1>{{ msg }} 学生的姓名是：{{ studentName }}</h1>
    <!-- 第一种 ：通过 父组件 给 子组件 传递 函数类型的 props 实现：子 给 父 传递数据 -->
    <School :getSchoolName="getSchoolName" />

    <!-- 第二种：通过 父组件 给 子组件 绑定一个自定义事件 实现：子 给 父 传递数据 -->
    <!-- <Student @customEvent="getStudentName" /> -->
    <!-- <Student @customEvent.once="getStudentName" @demo="m1" /> -->

    <!-- 第三种 ：使用 ref 属性 实现 接收 子组件 中 data节点下的 name数据 -->
    <Student ref="student" @click.native="show" />
  </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'
export default {
  name: "app",
  components: {
    School, Student
  },
  data() {
    return {
      msg: '您好！',
      studentName: ''
    }
  },
  methods: {
    // 接收 School.vue 发送过来的学校名称
    getSchoolName(name) {
      console.log("App 收到了学校名称：", name);
    },
    // 接收 Student.vue 发送过来的学校名称    第一种 使用 自定义事件
    getStudentName(name, ...params) {
      console.log('App 收到了学生名称', name, params);
      this.studentName = name
    },

    m1() {
      console.log("demo自定义事件被触发了");
    },

    show() {
      console.log('hello');
    }
  },
  mounted() {
    // 第二种使用 ref 属性 实现 接收 子组件 中 data节点下的 name数据
    // console.log(this.$refs.student.name);
    this.$refs.student.$on('customEvent', this.getStudentName) // 绑定自定义事件
    // this.$refs.student.$once('customEvent', this.getStudentName)  //一次性
  }
}
</script>

<style></style>