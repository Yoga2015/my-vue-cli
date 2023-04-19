<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!-- :checked="isAll" 处理初始化的展示   @change="checkAll" 处理后续的交互后的展示 -->
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll" /> -->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{ doneTotal }} </span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: 'MyFooter',
  // props: ['todos', 'checkAllTodo', 'clearAllTodo'],
  props: ['todos'],
  computed: {
    // todo个数
    total() {
      return this.todos.length
    },

    // 已完成的数量值 是对应着 已勾选的todo 个数
    doneTotal() {
      // let i = 0;
      // this.todos.forEach((todo) => {
      //   if (todo.done === true) i++
      // })
      // return i

      // const x = this.todos.reduce((previousValue, currentValue) => {
      //   console.log('@', previousValue);  //  0
      //   console.log('@', currentValue);  // {__ob__: Observer}  每一个todo
      //   console.log(currentValue.done); //  打印 每一个todo的done 的值
      //   return previousValue + (currentValue.done ? 1 : 0)
      // }, 0)
      // return x

      return this.todos.reduce((previousValue, currentValue) => {
        return previousValue + (currentValue.done ? 1 : 0)
      }, 0)

    },

    // 全选 or 取消全选    处理初始化的展示
    // isAll() {   // true                       true
    //   return this.doneTotal === this.total && this.total > 0
    // }


    // 升级 全选 or 取消全选           计算属性完整写法
    isAll: {
      // 处理初始化的展示
      get() {     // true                          true
        return this.doneTotal === this.total && this.total > 0
      },
      // 处理后续的交互后的展示
      set(value) {
        // this.checkAllTodo(value)
        this.$emit('checkAllTodo', value)
      }
    }
  },
  methods: {
    // 全选 or 取消全选   处理后续的交互后的展示
    // checkAll(e) {
    //   // console.log(e.target);
    //   // console.log(e.target.checked);
    //   this.checkAllTodo(e.target.checked)
    // }

    clearAll() {
      // 通知 App组件 去删除 所有已勾选的todo 
      // this.clearAllTodo()
      this.$emit('clearAllTodo')
    }
  }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}
</style>