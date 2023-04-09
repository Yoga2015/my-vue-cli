<template>
  <div id="MyItem">
    <li>
      <label>
        <!--:checked="done"是为了渲染初始化列表时，显示谁勾了，谁没勾 -->
        <input type="checkbox" :checked="done" @change="handleCheck(id)" />
        <span>{{ title }}</span>
      </label>
      <button class="btn btn-danger" style="display:block">删除</button>
    </li>
  </div>
</template>

<script>
export default {
  name: 'MyItem',
  // props节点中，定义的 自定义属性 的名称 优先级很高，
  props: {
    id: {
      // Number数据类型是有限的，故用 String类型
      type: String,
      default: ''
    },
    done: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  },
  // mounted() {
  //   // 每条数据 挂载到 真实DOM 后，都打印输出
  //   console.log('todoObj', this);
  // },
  methods: {
    handleCheck(id) {
      console.log(id);
    }
  }
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