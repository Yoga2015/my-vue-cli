<template>
  <div class="container">
    <Count></Count>
    <Person></Person>
  </div>
</template>

<script>
import Count from './components/Count.vue'
import Person from './components/Person.vue'
export default {
  name: 'MyApp',
  components: { Count, Person },
  // mounted() {
  //   console.log('App中', this);
  // }
}
</script>
