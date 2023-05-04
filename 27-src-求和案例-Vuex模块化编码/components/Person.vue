<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: red;">Count组件的求和为 : {{ sum }}</h3>
    <h3>列表中第一个人的姓名是 : {{ firstPersonName }}</h3>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加</button>
    <button @click="addWang">添加一个姓王的人</button>
    <button @click="addPersonServer">添加一个人,姓名随机</button>
    <ul>
      <li v-for="p in personList" :key="p.id">
        {{ p.id }}--{{ p.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
import { mapGetters, mapState, mapMutations } from 'vuex'
export default {
  name: 'MyPerson',
  data() {
    return {
      name: '',
    }
  },
  computed: {
    // 自己写的方法，从state 中读取数据
    personList() {
      return this.$store.state.personList
    },
    sum() {
      return this.$store.state.sum
    },
    firstPersonName() {
      return this.$store.getters['personAbout/firstPersonName']
    },

    // 借助 mapState 生成计算属性，从 state 中读取数据  (数组写法)
    ...mapState('personAbout', ['personList']),
    ...mapState('countAbout', ['sum']),

    // 借助 mapGetters 生成计算属性，从 getters 中读取数据
    ...mapGetters('personAbout', ['firstPersonName'])

  },
  methods: {
    // 添加一个人员
    add() {
      const personObj = { id: nanoid(), name: this.name }
      // 由于没有复杂逻辑运算，所以跳过dispatch, 直接 commit
      this.$store.commit('personAbout/ADD_PERSON', personObj)
      this.name = ''
    },

    // 添加一个姓王的人
    addWang() {
      const personObj = { id: nanoid(), name: this.name }
      this.$store.dispatch('personAbout/addPersonWang', personObj)
      this.name = ''
    },

    // 添加一个人, 姓名随机
    addPersonServer() {
      this.$store.dispatch('personAbout/addPersonServer')
    },

    // 借助 mapMutations 生成对应的方法，方法中会调用commit 去联系 mutations
    // ...mapMutations('personAbout', { add: 'ADD_PERSON' })

  }
}
</script>

<style></style>