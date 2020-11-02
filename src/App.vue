<template>
  <div id="app">
    <v-app>
      <AppHeader />
      <AppMain />
      <AppFooter />
    </v-app>
  </div>
</template>

<script>
import AppHeader from "./components/layout/AppHeader";
import AppMain from "./components/layout/AppMain";
import AppFooter from "./components/layout/AppFooter";
export default {
  name: "app",
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
</style>
