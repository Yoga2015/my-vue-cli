<template>
  <div id="root">
    <button @click="getStudents">获取学生信息</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'MyApp',
  
  methods: {

    getStudents() {
      axios.get('http://localhost:5000/students').then(
        response => {
          console.log('请求成功了', response);
        }, error => {
          console.log('请求失败了', error);
        }
      )
    }

  }
}
</script>