<template>
  <div id="MyItem">
    <li>
      <label>
        <!-- v-model绑定的值，不能是props传过来的值，因为props是不可以修改的！ -->
        <!-- <input type="checkbox" v-model="todo.done" /> -->

        <!-- :checked="done" 是为了初始化展示列表时，显示谁勾了，谁没勾-->
        <!-- @change="handleCheck(todo.id) 是为了更新后续操作，谁取消勾选，谁又勾选了-->
        <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" />

        <span>{{ todo.title }}</span>
      </label>
      <button class="btn btn-danger" @click="handleTodo(todo.id)">
        删除
      </button>
    </li>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: 'MyItem',
  // 声明接收 todo对象
  // props节点中，定义的 自定义属性 的名称 优先级很高
  props: ['todo'],
  methods: {
    // 处理 勾选 or 取消勾选状态
    handleCheck(id) {
      // console.log(id);
      // 通知 App组件 将对应的todo对象的done 值取反
      // this.checkTodo(id)
      this.$bus.$emit('checkTodo', id)
    },
    // 删除 某一个 todo 时，获取它的id
    handleTodo(id) {
      // 让用户确认是否真要删
      if (confirm('确定要删除吗？')) {
        // console.log(id);
        // 通知 App组件 将对应的todo对象 删除
        // this.deleteTodo(id)
        // this.$bus.$emit('deleteTodo', id)

        // 发布者： 发布消息
        pubsub.publish('deleteTodo', id)
      }
    }
  },
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

#MyItem li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;

}

#MyItem li:hover button {
  display: block;
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