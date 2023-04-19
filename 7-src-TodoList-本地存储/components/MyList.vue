<template>
  <div id="MyList">
    <ul class="todo-main">
      <MyItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj" :checkTodo="checkTodo"
        :deleteTodo="deleteTodo" />
    </ul>
  </div>
</template>

<script>
import MyItem from './MyItem.vue'

export default {
  name: 'MyList',
  components: {
    MyItem
  },
  // 声明接收 App传递过来的数据，其中todos是自己用的，
  // checkTodo 和  deleteTodo 是给 子组件MyItem 用的
  props: ['todos', 'checkTodo', 'deleteTodo']

}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>