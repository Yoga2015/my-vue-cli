<template>
  <div class="container">
    <Count></Count>
  </div>
</template>

<script>
import Count from './components/Count.vue'
export default {
  name: 'MyApp',
  components: { Count },
  // mounted() {
  //   console.log('App中', this);
  // }
}
</script>
