<template>
  <b-container class="container">
    <navbar class="nav"/>
    <router-view/>
  </b-container>
</template>

<script>
export default {
  created() {
    if (this.$store.state.user) {
      this.$axios.setToken(process.env.GH_TOKEN);
    }
  }
};
</script>


<style scoped>
.container {
  padding-top: 20px;
}
.nav {
  padding-bottom: 10px;
}
</style>
