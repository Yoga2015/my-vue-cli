<template>
  <div class="container">

    <Category title="游戏" class="meishi">
      <template scope="walking">
        {{ walking }}
        <ul>
          <li v-for="item in walking.games" :key="item.index">
            {{ item }}
          </li>
        </ul>
      </template>
    </Category>

    <Category title="游戏" class="meishi">
      <template scope="{games}">
        <ol>
          <li v-for="item in games" :key="item.index">
            {{ item }}
          </li>
        </ol>
      </template>
    </Category>

    <Category title="游戏" class="meishi">
      <template scope="{games,msg}">
        <h4>{{ games }}</h4>
        <h4>{{ msg }}</h4>
      </template>
    </Category>

  </div>
</template>

<script>
import Category from './components/category.vue'
export default {
  name: 'MyApp',
  components: { Category },
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

video {
  width: 100%;
}

meishi {
  width: 30%;
  margin-top: 2%;
}

ol {
  background-color: antiquewhite;
}
</style>