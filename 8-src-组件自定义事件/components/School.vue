<template>
  <div id="School">
    <h3>学校名称:{{ name }}</h3>
    <h3>学校地址:{{ address }}</h3>
    <button @click="sendSchoolName">把学校名给 App组件</button>
  </div>
</template>
  
<script>
export default {
  name: "MySchool",
  props: ["getSchoolName"],
  data() {
    return {
      name: '清华大学',
      address: '北京'
    }
  },
  methods: {
    sendSchoolName() {
      this.getSchoolName(this.name)
    }
  }
}
</script>

<style scoped>
#School {
  background-color: yellow;
}
</style>