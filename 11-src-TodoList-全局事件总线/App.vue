<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <!--App组件将 一个函数 传给 MyHeader子组件-->
        <!-- <MyHeader :addTodo="addTodo" /> -->
        <MyHeader @addTodo="addTodo" />

        <!-- 将一个数组 传给 MyList 子组件 -->
        <MyList :todos="todos" />

        <!-- <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" 
        :clearAllTodo="clearAllTodo" /> -->
        <MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo" />
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
      // todos: [
      //   // { id: '001', title: '睡觉', done: true },
      //   // { id: '002', title: '吃饭', done: false },
      //   // { id: '003', title: '玩游戏', done: true },
      // ]
      todos: JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  methods: {
    // 添加 一条todo   数据在哪，操作数据的方法就在哪
    addTodo(todoObj) {
      console.log('我是APP组件,收到了数据 ', todoObj);
      this.todos.unshift(todoObj);
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
    },

    // 全选or取消全选
    checkAllTodo(done) {
      this.todos.forEach((todo) => {
        todo.done = done
      })
    },

    // 清除 所有 已完成(已勾选) 的 todo
    clearAllTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done
      })
    }
  },
  watch: {
    // 监视 data节点中的 todos 数组  ，newValue 指的是当前的 todos 数组
    // 简写版 的监视器 todos 只能监视一层，数组内部 或 对象内部 发生变化后监视不到！！
    // todos(value) {
    //   // 当用户正常添加 一条 或 多条 todo 时，实时 保存到 localStorage
    //   localStorage.setItem('todos', JSON.stringify(value))
    // }

    // 完整版 的监视器 todos
    todos: {
      deep: true,
      handler(newValue) {
        localStorage.setItem('todos', JSON.stringify(newValue))
      },
    }
  },
  mounted() {
    this.$bus.$on('checkTodo', this.checkTodo)
    this.$bus.$on('deleteTodo', this.deleteTodo)
  },
  beforeDestroy() {
    this.$bus.$off('checkTodo')
    this.$bus.$off('deleteTodo')
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