<template>
  <div id="Count">
    <h3>当前求和为：{{ this.$store.state.sum }}</h3>
    <!-- <h4>当前求和放大10倍为:{{ this.$store.state.sum * 10 }}</h4> -->
    <!-- <h4>当前求和放大10倍为:{{ fangda }}</h4> -->
    <h4>当前求和放大10倍为:{{ this.$store.getters.BigSum }}</h4>
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
export default {
  name: 'MyCount',
  // state 状态
  data() {
    return {
      n: 1,   // 用户选择的数据
    }
  },

  // computed: {       // 组件中的 computed 只能自己使用，其他组件用不了
  //   fangda() {
  //     return this.$store.state.sum * 10
  //   },
  // },


  
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
    console.log('Count中', this);
  }
}
</script>
