<template>
  <b-row align-h="between">
    <b-col cols="8">
      <h1><router-link to="/">GH Clone</router-link></h1>
    </b-col>
    <b-col cols="3" class="text-right">
      <router-link to="/issues/new">
        <b-button variant="primary">New issue</b-button>
      </router-link>
      <user-status/>
    </b-col>
  </b-row>
</template>

<style scoped>
h1 a {
  font-size: 30px;
  color: black;
}
h1 a:hover {
  text-decoration: none;
}
</style>
