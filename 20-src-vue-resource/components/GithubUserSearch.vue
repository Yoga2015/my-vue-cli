<template>
  <!-- 巨幕  搜索框 -->
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="输入你要搜索的名称" v-model="keyWord" />
      &nbsp;
      <button @click="searchUsers">搜索</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GithubUserSearch',
  data() {
    return {
      keyWord: ''
    }
  },
  methods: {
    searchUsers() {
      console.log(this);    // 打印中 出现 $http

      //   请求前更新List的数据   (GithubUserList组件中的 动态数据 都是来自 GithubUserSearch组件)
      this.$bus.$emit('updataListData', { isFirst: false, isLoading: true, errMsg: '', users: [] })

      this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(

        response => {
          console.log('请求成功了');   // 此时 GithubUserSearch 已接收到响应回来的数据

          // 发送方  ，请求成功后，就把请求回来的数据 直接发给 GithubUserList组件
          // this.$bus.$emit('getUsers', response.data.items)

          // 请求成功后更新List的数据
          this.$bus.$emit('updataListData',
            { isFirst: false, isLoading: false, errMsg: '', users: response.data.items }
          )
        },

        error => {
          console.log('请求失败了', error.message);
          // 请求失败后更新List的数据
          this.$bus.$emit('updataListData',
            { isFirst: false, isLoading: false, errMsg: error.message, users: [] }
          )
        }

      )

    }
  }
}
</script>

<style></style>