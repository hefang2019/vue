<template>
  <div id="app">
    <Xheader />
    <Navbar />
    <M_main />
  </div>
</template>

<script>
import Xheader from "./components/Xheader";
import Navbar from "./components/Navbar";
import M_main from "./components/M_main";

export default {
  name: "app",
  components: {
    Xheader,
    Navbar,
    M_main
  }
};
</script>

<style>
</style>
