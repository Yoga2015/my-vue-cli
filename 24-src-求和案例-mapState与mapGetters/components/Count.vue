<template>
  <div id="Count">
    <h3>当前求和为：{{ sum }}</h3>
    <h4>当前求和放大10倍为:{{ BigSum }}</h4>
    <h4>我在 {{ school }} , 学习 {{ subject }}</h4>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'MyCount',

  // state 状态
  data() {
    return {
      n: 1,   // 用户选择的数据
    }
  },

  computed: {       // 组件中的 computed 只能自己使用，其他组件用不了
    // 靠程序员自己亲自去写计算属性
    // he() {
    //   return this.$store.state.sum
    // },
    // school() {
    //   return this.$store.state.school
    // },
    // subject() {
    //   return this.$store.state.subject
    // },

    // 借助 mapState 生成计算属性，从 state 中读取数据  （对象写法）
    // ...mapState({ he: 'sum', xuexiao: 'school', xueke: 'subject' }),

    // 借助 mapState 生成计算属性，从 state 中读取数据  （数组写法）
    ...mapState(['sum', 'school', 'subject']),

    // BigSum() {
    //   return this.$store.getters.BigSum
    // },

    // 借助 mapGetters 生成计算属性，从 getters 中读取数据  （对象写法）
    // ...mapGetters({ BigSum: 'BigSum' })

    // 借助 mapGetters 生成计算属性，从 getters 中读取数据  （数组写法）
    ...mapGetters(['BigSum'])

  },

  // actions 动作
  methods: {
    increment() {
      this.$store.dispatch('jia', this.n)
    },
    decrement() {
      this.$store.dispatch('jian', this.n)
    },
    incrementOdd() {
      this.$store.dispatch('jiaOdd', this.n)
    },
    incrementWait() {
      setTimeout(() => {
        this.$store.dispatch('jiaWait', this.n)
      }, 500)
    }
  },
  mounted() {
    // console.log('Count中', this);
    const x = mapState({ he: 'sum', xuexiao: 'school', xueke: 'subject' })
    console.log(x);
  }
}
</script>
