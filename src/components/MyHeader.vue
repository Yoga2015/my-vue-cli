<template>
  <div class="todo-header">
    <!-- 子 传 父（App组件） -->
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model.trim="title" @keyup.enter="add" />
  </div>
</template>

<script>
// 导入 已安装的  nanoid  ，指：唯一标识符
import { nanoid } from 'nanoid'

export default {
  name: 'MyHeader',
  data() {
    return {
      title: ''
    }
  },
  props: ['addTodo'],
  methods: {
    // 添加一条 todo
    add() {
      // console.log(e.target.value);

      // 1、校验用户输入的数据   this.title === '' === !this.title 为空就警告！
      if (!this.title) return alert('输入不能为空！')

      // 2、将用户的输入 包装成 一个 todo对象
      const todoObj = { id: nanoid(), title: this.title, done: false }
      // console.log(todoObj);

      // 3、通知 App组件 去添加一个 todo对象
      this.addTodo(todoObj)

      // 4、、清空用户输入
      this.title = ''
    }
  },
}
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>