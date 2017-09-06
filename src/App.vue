<template>
  <div id="app">
    <hello></hello>
    <ul>
      <li>
        <router-link to="/HistoricalEvents">HistoricalEvents</router-link>
        <router-link to="/AlarmEvents">AlarmEvents</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  import hello from './components/hello.vue'
  import HistoricalEvents from './components/EventPages/HistoricalEvents.vue'
  import AlarmEvents from './components/EventPages/AlarmEvents.vue'

  export default {
    name: 'app',
    components: {
      hello,
      HistoricalEvents,
      AlarmEvents
    }
  }
</script>

<style>
  html,
  body,
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100%;
    margin: 0px;
  }
</style>
