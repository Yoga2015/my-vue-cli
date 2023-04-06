<template>
  <div id="App-container">
    <School3 />
    <hr>
    <Student3 />

  </div>
</template>

<script>
import School3 from '@/components/School3.vue'
import Student3 from '@/components/Student3.vue'
export default {
  name: 'MyApp',
  components: {
    School3, Student3
  },
}
</script>

<style>
#App-container {
  background-color: beige;
}
</style>