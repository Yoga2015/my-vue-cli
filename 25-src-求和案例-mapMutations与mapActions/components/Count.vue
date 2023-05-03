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
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'MyCount',

  // state 状态
  data() {
    return {
      n: 1,   // 用户选择的数据
    }
  },
  computed: {       // 组件中的 computed 只能自己使用，其他组件用不了
    // 借助 mapState 生成计算属性，从 state 中读取数据  （对象写法）
    // ...mapState({ he: 'sum', xuexiao: 'school', xueke: 'subject' }),

    // 借助 mapState 生成计算属性，从 state 中读取数据  （数组写法）
    ...mapState(['sum', 'school', 'subject']),


    // 借助 mapGetters 生成计算属性，从 getters 中读取数据  （对象写法）
    // ...mapGetters({ BigSum: 'BigSum' })

    // 借助 mapGetters 生成计算属性，从 getters 中读取数据  （数组写法）
    ...mapGetters(['BigSum'])
  },

  // actions 动作
  methods: {
    // 程序员亲自写的方法 
    // // 递增
    // increment() {
    //   // this.$store.dispatch('jia', this.n)   
    //   // 当没有复杂逻辑计算时，就跳过 dispatch，直接commit
    //   this.$store.commit('JIA', this.n)
    // },
    // // 递减
    // decrement() {
    //   // this.$store.dispatch('jian', this.n)
    //   // 当没有复杂逻辑计算时，就跳过 dispatch，直接commit
    //   this.$store.commit('JIAN', this.n)
    // },

    // 借助 mapMutations 生成对应的方法，方法中会调用 commit 去联系 mutations   
    ...mapMutations({ increment: 'JIA', decrement: 'JIAN' }),  //对象写法

    // 借助 mapMutations 生成对应的方法，方法中会调用 commit 去联系 mutations
    // ...mapMutations(['JIA', 'JIAN']),    // 数组写法

    // **************************************************************

    // 程序员亲自写的方法
    // incrementOdd() {
    //   this.$store.dispatch('jiaOdd', this.n)
    // },
    // incrementWait() {
    //   setTimeout(() => {
    //     this.$store.dispatch('jiaWait', this.n)
    //   }, 500)
    // },

    // 借助 mapActions 生成对应的方法，方法中调用 dispatch 去联系 actions
    ...mapActions({ incrementOdd: 'jiaOdd', incrementWait: 'jiaWait' })
    // ...mapActions(['jiaOdd', 'jiaWait'])    // 数组写法
  },

  mounted() {
    // console.log('Count中', this);
    const x = mapState({ he: 'sum', xuexiao: 'school', xueke: 'subject' })
    console.log(x);
  }
}
</script>
