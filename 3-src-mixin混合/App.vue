<template>
  <div id="App-container">
    <School2 />
    <hr>
    <Student2 />

  </div>
</template>

<script>
import School2 from '@/components/School2.vue'
import Student2 from '@/components/Student2.vue'
export default {
  name: 'MyApp',
  components: {
    School2, Student2
  },
}
</script>

<style>
#App-container {
  background-color: beige;
}
</style>