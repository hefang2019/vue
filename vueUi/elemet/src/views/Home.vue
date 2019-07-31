<template>
  <div class="home">
    <Home />
    <Glist />
  </div>
</template>

<script>
// @ is an alias to /src
import Home from "@/components/Home.vue";
import Glist from "@/components/Glist.vue";

export default {
  name: "home",
  components: {
    Home,
    Glist
  }
};
</script>
