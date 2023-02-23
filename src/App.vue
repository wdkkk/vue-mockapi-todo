<template>
      <div>
            <navbar></navbar>
            <router-view></router-view>
      </div>
</template>

<script>
      import Navbar from "./components/TodoNav.vue";
      export default {
            name: "App",
            components: {
                  Navbar,
            },
      };
</script>

<style>
      * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
      }
      #app {
            font-family: Avenir, Helvetica, Arial, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
      }
</style>
