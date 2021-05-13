<template>
  <div id="app">
    <Converter currency-a="USD" currency-b="BRL" />
  </div>
</template>

<script>
import Converter from "./components/Converter";

export default {
  name: "App",
  components: {
    Converter,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
