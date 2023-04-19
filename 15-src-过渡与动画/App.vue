<template>
  <div id="root">
    <Test /><br><br>
    <Test2 />
  </div>
</template>

<script>
import Test from "@/components/Test.vue"
import Test2 from "@/components/Test2.vue"
export default {
  name: 'MyApp',
  components: {
    Test, Test2
  },
}
</script>



