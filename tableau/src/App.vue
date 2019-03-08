<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <iframe :src="tableauUrl" frameborder="0"></iframe>
  </div>
</template>

<script>
// import $ from 'jquery';
import axios from 'axios';
axios.create({
  headers: {
    'content-type': 'application/json;charset=utf-8',
  },
});

export default {
  name: 'app',
  data() {
    return {
      webserverUrl: 'tableau/ticket?url=https://ymvisual.dataone.ai/t/ymtest/views/DailyUpdate/DailyUpdate?iframeSizedToWindow=true%26:embed=y%26:showAppBanner=false%26:display_count=no%26:showVizHome=no',
      tableauUrl: ''
    };
  },
  created() {
    const that = this;
    axios.get(this.webserverUrl)
      .then(function(res) {
        that.tableauUrl = res.data.data.proxy_url;
      });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
