<template>
  <div class="Student3-Container">
    <h3>学生名称：{{ name }}</h3>
    <h3>学生性别:{{ sex }}</h3>
    <button @click="test">点击我测试一个hello方法</button>
  </div>
</template>

<script>
export default {
  name: 'MyStudent3',
  data() {
    console.log(this);
    return {
      name: 'lisi',
      sex: '男'
    }
  },
  methods: {
    test() {
      this.hello();
    }
  }
}
</script>
