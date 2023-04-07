<template>
  <div id="MyList">
    <ul class="todo-main">
      <MyItem v-for="todoObj in todos" 
      :key="todoObj.id" 
      :id="todoObj.id" 
      :done="todoObj.done" 
      :title="todoObj.title">
      </MyItem>
    </ul>
  </div>
</template>

<script>
import MyItem from './MyItem.vue';
export default {
  name: 'MyList',
  components: {
    MyItem
  },
  data() {
    return {
      todos: [
        { id: '001', title: '睡觉', done: true },
        { id: '002', title: '吃饭', done: false },
        { id: '003', title: '玩游戏', done: true },
        { id: '004', title: '旅游', done: true },
      ]
    }
  },
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