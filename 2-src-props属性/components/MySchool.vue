<template>
  <div class="SchoolContainer">
    <h3>学校名称：{{ name }}</h3>
    <h3>学校地址:{{ address }}</h3>
  </div>
</template>

<script>
export default {
  name: 'MySchool',
  data() {
    return {
      name: '清华大学',
      address: '北京'
    }
  }
}
</script>

<style scoped>
.SchoolContainer {
  background-color: bisque;
}
</style>