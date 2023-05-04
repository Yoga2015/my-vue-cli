// 人员管理相关配置
import axios from "axios";
import { nanoid } from "nanoid";

const personOptions = {
  namespaced: true,

  // 准备 actions -- 用于响应 组件中的动作  (用于写些异步操作)
  actions: {

    // 添加一个姓王的人   （这算是 复杂的逻辑运算）
    addPersonWang(context, value) {
      console.log('actions中的 addPersonWang 被调用了', context, value);
      if (value.name.indexOf('王') === 0) {
        context.commit('ADD_PERSON', value)
      } else {
        alert('必须姓王')
      }
    },

    // 向服务器中获取一个人
    addPersonServer(context) {
      axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
        response => {
          // 请求响应成功
          context.commit('ADD_PERSON', { id: nanoid(), name: response.data })
        },
        error => {
          // 请求响应失败
          alert(error.message)
        }
      )
    }
  },

    // 准备 mutations -- 用于操作 数据（state）
    mutations: {
      // 添加人员
      ADD_PERSON(state, value) {
        console.log('mutations 中的 ADD_PERSON 被调用了', state, value);
        state.personList.unshift(value)
      }
    },

    // 准备 state -- 用于存储 数据
    state: {
      personList: [
        { id: '001', name: '张三' },
        { id: '002', name: '李四' }
      ]
    },

    // 准备 getters -- 用于 将state中的数据进行加工
    getters: {
      // 获取 列表中第一个人的姓名
      firstPersonName(state) {
        return state.personList[0].name
      }
    }
}

export default personOptions
