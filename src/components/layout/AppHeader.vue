<template>
  <div>
  <v-app-bar color="primary" app dark flat>
    <v-app-bar-nav-icon @click="isDrawerOpen = !isDrawerOpen" class="hidden-md-and-up" ></v-app-bar-nav-icon>
    <v-toolbar-title to="/">{{name}}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn v-for="navLink in navLinks" :key="navLink.link" :to="navLink.link" text class="hidden-sm-and-down">
      <v-icon left>{{navLink.icon}}</v-icon>
      {{navLink.name}}
    </v-btn>
    <v-btn v-if="currentUser" text>
      <v-icon left>mdi-account-box</v-icon>
      {{currentUser.email}}
    </v-btn>
  </v-app-bar>
  <v-navigation-drawer v-model="isDrawerOpen" absolute temporary>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          {{name}}
        </v-list-item-title>
          Navigation
        <v-list-item-subtitle>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list nav dense>
      <v-list-item-group v-model="group" active-class="primary white--text">
        <v-list-item v-for="navLink in navLinks" :key="navLink.link" :to="navLink.link">
          <v-list-item-icon>
            <v-icon>{{navLink.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{navLink.name}}</v-list-item-title>
        </v-list-item>
        <v-list-item v-if="currentUser">
          <v-list-item-icon>
            <v-icon>mdi-account-box</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{currentUser.email}}</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      isDrawerOpen: false,
      group: null,
      currentUser: null,
      name: "Vue Webpack GAS",
      navLinks: [
        { link: "/", name: "Home", icon: "mdi-home" },
        { link: "/form", name: "Form", icon: "mdi-view-list" },
        { link: "/contacts", name: "Contacts", icon: "mdi-contacts" }
      ]
    };
  },
  beforeCreate(){
      google.script.run
        .withSuccessHandler(user=>{
            this.currentUser = JSON.parse(user)
        })
        .getCurrentUser()
  }
};
</script>

<style>
</style>
