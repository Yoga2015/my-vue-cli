<template>
  <div id="App-container">
    <School />
    <hr>
    <Student />

  </div>
</template>

<script>
import School from '@/components/MySchool.vue'
import Student from '@/components/MyStudent.vue'
export default {
  name: 'MyApp',
  components: {
    School, Student
  },
}
</script>

<style>
#App-container {
  background-color: beige;
}
</style>