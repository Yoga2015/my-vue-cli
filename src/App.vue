<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <!--App组件将 一个函数 传给 MyHeader子组件-->
        <MyHeader :addTodo="addTodo" />
        <!-- 将一个数组 传给 MyList 子组件 -->
        <MyList :todos="todos" :checkTodo="checkTodo" 
        :deleteTodo="deleteTodo" />
        <MyFooter />
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'
import MyFooter from './components/MyFooter.vue'
export default {
  name: 'MyApp',
  components: {
    MyHeader, MyList, MyFooter
  },
  data() {
    return {
      todos: [
        { id: '001', title: '睡觉', done: true },
        { id: '002', title: '吃饭', done: false },
        { id: '003', title: '玩游戏', done: true },
      ]
    }
  },
  methods: {
    // 添加 一条todo 
    addTodo(todoObj) {
      console.log('我是APP组件,收到了数据 ', todoObj);
      this.todos.unshift(todoObj)
    },

    // 勾选 or 取消勾选一个todo
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          return todo.done = !todo.done
        }
      })
    },

    // 删除 一条todo
    deleteTodo(id) {
      // filter()方法 不会删除 原数组
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id
      })
    }
  }
}
</script>

<style scoped>
/*base*/
body {
  background: #fff;
}



.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>