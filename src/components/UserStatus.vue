<template>
  <b-button v-if="!user" @click="login">Login</b-button>
  <img v-else @click="logout" :src="user.avatar_url" :alt="user.login"/>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["user"])
  },
  methods: {
    async login() {
      this.$axios.setToken(process.env.GH_TOKEN);

      const user = (await this.$axios.get("/user")).data;
      const collaborators = (await this.$axios.get(
        `/repos/${this.$store.state.repo}/collaborators`
      )).data;
      this.$store.commit("SET_USER", user);
      this.$store.commit("SET_COLLABORATORS", collaborators);
    },
    logout() {
      this.$axios.setToken(null);
      this.$store.commit("SET_USER", null);
      this.$store.commit("SET_COLLABORATORS", []);
    }
  }
};
</script>

<style scoped>
img {
  height: 40px;
  width: 40px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
