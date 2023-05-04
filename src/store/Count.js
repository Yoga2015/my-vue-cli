// 求和案例相关配置
const countOptions = {
  namespaced: true,

  // 准备 actions -- 用于响应 组件中的动作
  actions: {
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
  },

  // 准备 mutations -- 用于操作 数据（state）
  mutations: {
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
  },

  // 准备 state -- 用于存储 数据
  state: {
    sum: 0, // 当前的和
    school: '清华大学',
    subject: '前端',
  },

  // 准备 getters -- 用于 将state中的数据进行加工
  getters: {
    BigSum(state) {
      return state.sum * 10
    },
  }
}

export default countOptions