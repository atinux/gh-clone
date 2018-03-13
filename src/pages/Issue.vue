<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else-if="issue">
    <h1>{{ issue.title }}</h1>
    <div v-html="html"></div>
  </div>
  <b-alert v-else variant="danger" show>Issue not found</b-alert>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      issue: null,
      html: ""
    };
  },
  watch: {
    $route: "fetchIssue"
  },
  created() {
    this.fetchIssue();
  },
  methods: {
    async fetchIssue() {
      try {
        this.isLoading = true;
        this.issue = (await this.$axios.get(
          `/repos/${this.$store.state.repo}/issues/${this.$route.params.number}`
        )).data;
        // https://developer.github.com/v3/markdown/
        this.html = (await this.$axios.post(`/markdown`, {
          text: this.issue.body,
          mode: "gfm",
          context: this.$store.state.repo
        })).data;
      } catch (err) {}
      this.isLoading = false;
    }
  }
};
</script>

