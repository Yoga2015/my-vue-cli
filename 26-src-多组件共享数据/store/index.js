// 该文件用于创建 Vuex中 最为核心的 store
// 1、引入Vue
import Vue from 'vue'
// 2、引入Vuex
import Vuex from 'vuex'
// 3、使用 Vuex
Vue.use(Vuex)

// 准备 actions -- 用于响应 组件中的动作
const actions = {
  // // 递增
  // jia(context, value) {
  //   console.log('actions中的 jia 被调用了', context, value);
  //   context.commit('JIA', value)
  // },
  // // 递减
  // jian(context, value) {
  //   console.log('actions中的 jian 被调用了', context, value);
  //   context.commit('JIAN', value)
  // },

  // 奇数才递增
  jiaOdd(context, value) {
    console.log('actions中的 jiaOdd 被调用了', context, value);
    context.commit('JIAODD', value)
  },

  // 延时递增
  jiaWait(context, value) {
    console.log('actions中的 jiaWait 被调用了', context, value);
    context.commit('JIAWAIT', value)
  }
}

// 准备 mutations -- 用于操作 数据（state）
const mutations = {
  // 递增
  JIA(state, value) {
    console.log('mutations 中的 JIA 被调用了', state, value);
    state.sum += value
  },

  // 递减
  JIAN(state, value) {
    console.log('mutations 中的 JIAN 被调用了', state, value);
    if (state.sum == 0) {
      alert('为 0 不能再减了')
    } else {
      state.sum -= value
    }
  },

  // 奇数才递增
  JIAODD(state, value) {
    console.log('mutations 中的 JIAODD 被调用了', state, value);
    if (state.sum % 2) {
      state.sum += value
    }
  },

  // 延时递增
  JIAWAIT(state, value) {
    console.log('mutations 中的 JIAWAIT 被调用了', state, value);
    state.sum += value
  },

  // 添加人员
  ADD_PERSON(state, value) {
    console.log('mutations 中的 ADD_PERSON 被调用了', state, value);
    state.personList.unshift(value)
  }
}

// 准备 state -- 用于存储 数据
const state = {
  sum: 0, // 当前的和
  school: '清华大学',
  subject: '前端',
  personList: [
    { id: '001', name: '张三' },
    { id: '002', name: '李四' }
  ]
}


// 准备 getters -- 用于 将state中的数据进行加工
const getters = {
  BigSum(state) {
    return state.sum * 10
  },
}

// 创建store
const store = new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})

// 导出 store  或   暴露 store
export default store

