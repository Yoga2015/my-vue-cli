<template>
  <div class="School3-Container">
    <h3>学校名称：{{ name | mySlice }}</h3>
    <h3>学校地址:{{ address }}</h3>
  </div>
</template>

<script>
export default {
  name: 'MySchool3',
  data() {
    console.log(this);
    return {
      name: '深圳大学',
      address: '北京'
    }
  },
}
</script>
