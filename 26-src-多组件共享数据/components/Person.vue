<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: red;">Count组件的求和为 : {{ sum }}</h3>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加</button>
    <ul>
      <!-- <li v-for="p in this.$store.state.personList" :key="p.id"> -->
      <li v-for="p in personList" :key="p.id">
        {{ p.id }}--{{ p.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
// import { mapState } from 'vuex'
export default {
  name: 'MyPerson',
  data() {
    return {
      name: '',
    }
  },
  computed: {
    // 自己写的方法 ，从 state 中读取数据
    personList() {
      return this.$store.state.personList
    },
    sum() {
      return this.$store.state.sum
    },

    // 借助 mapState 生成计算属性，从 state 中读取数据  (数组写法)
    // ...mapState(['personList', 'sum'])
  },
  methods: {
    add() {
      // const personObj = { id: nanoid(), name: this.name }
      // console.log(personObj);
      // this.name = ''
      // this.$store.state.personList.push(personObj)
      // console.log(this.$store.state.personList);

      const personObj = { id: nanoid(), name: this.name }
      // 由于没有复杂逻辑运算，所以跳过dispatch, 直接 commit
      this.$store.commit('ADD_PERSON', personObj)
      this.name = ''
    }
  }
}
</script>

<style></style>