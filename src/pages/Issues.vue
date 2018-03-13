<template>
  <div v-if="isLoading">Loading...</div>
  <ul v-else>
    <li v-for="issue in issues" :key="issue.id">
      <router-link :to="`/issues/${issue.number}`">{{ issue.title }}</router-link><br>
      #{{ issue.number }} created {{ issue.created_at | moment('from') }} by {{ issue.user.login }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      issues: []
    };
  },
  async created() {
    this.isLoading = true;
    this.issues = (await this.$axios.get(
      `/repos/${this.$store.state.repo}/issues`
    )).data;
    this.isLoading = false;
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li {
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
}
li a {
  font-size: 20px;
  font-weight: semibold;
}
</style>

