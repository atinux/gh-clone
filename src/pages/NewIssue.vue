<template>
  <b-form @submit.prevent="postIssue">
    <b-alert variant="danger" :show="hasErrored">Could not post issue on GitHub.</b-alert>
    <b-form-input type="text" v-model="title" required placeholder="Issue title" style="margin-bottom: 10px;"/>
    <b-form-textarea v-model="body" placeholder="Issue content" :rows="6" style="margin-bottom: 10px;">
    </b-form-textarea>
    <b-button type="submit" variant="primary" :disabled="isLoading">{{ isLoading ? 'Submitting issue...' : 'Submit issue' }}</b-button>
  </b-form>
</template>

<script>
export default {
  data() {
    return {
      hasErrored: false,
      isLoading: false,
      title: "",
      body: ""
    };
  },
  methods: {
    async postIssue() {
      console.log(this.title, this.body);
      if (!this.title || !this.body) return;

      this.isLoading = true;
      this.hasErrored = false;
      try {
        const { data } = await this.$axios.post(
          `/repos/${this.$store.state.repo}/issues`,
          {
            title: this.title,
            body: this.body
          }
        );

        this.title = "";
        this.body = "";
        this.$router.push(`/issues/${data.number}`);
      } catch (err) {
        this.hasErrored = true;
      }
      this.isLoading = false;
    }
  }
};
</script>

<style scoped>

</style>
