<template>
  <div id="MyItem">
    <li>
      <label>
        <!--:checked="done" 是为了初始化展示列表时，显示谁勾了，谁没勾-->
        <!-- @change="handleCheck(todo.id) 是为了 更新后续操作，谁取消勾选，谁又勾选了  -->
        <!-- <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" /> -->
        <input type="checkbox" v-model="todo.done" />
        <span>{{ todo.title }}</span>
      </label>
      <button class="btn btn-danger" style="display:block">
        删除
      </button>
    </li>
  </div>
</template>

<script>
export default {
  name: 'MyItem',
  // 声明接收 todo对象
  // props节点中，定义的 自定义属性 的名称 优先级很高
  props: ['todo'],

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

li button {
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