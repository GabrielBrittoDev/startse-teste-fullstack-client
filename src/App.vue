<template>
  <v-app>
    <v-row>
    <side-bar></side-bar>
    <grid></grid>
    </v-row>




  </v-app>
</template>

<script>
import SideBar from "./components/SideBar";
import Grid from "./components/Grid";
export default {
  name: 'App',

  components: {
    SideBar,
    Grid
  },

  data: () => ({
    //
  }),
};
</script>
