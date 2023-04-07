<template>
    <div id="root">
      <div class="todo-container">

        <div class="todo-wrap">
          <MyHeader></MyHeader>
          <MyList></MyList>
          <MyFooter></MyFooter>
        </div>

      </div>
    </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'
import MyFooter from './components/MyFooter.vue'

export default {
  name: 'MyApp',
  components: {
    MyHeader, MyList, MyFooter
  },
}
</script>

<style scoped>
/*base*/
body {
  background: #fff;
}



.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>