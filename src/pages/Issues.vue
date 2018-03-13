<template>
  <b-row align-h="between">
    <b-col cols="8">
      <h1>Issues</h1>
    </b-col>
    <b-col cols="2">
      <router-link to="/issues/new">
        <b-button variant="primary">New issue</b-button>
      </router-link>
    </b-col>
  </b-row>
</template>

<script>
export default {
  async created() {
    // this.$axios.setToken("github personnal token");
    // this.$axios.setToken(null);
    const { data } = await this.$axios.get("/issues");
    console.log(data);
  }
};
</script>
