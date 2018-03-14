<template>
  <at-ta :members="members" name-key="name" @at="updated">
    <template slot="item" slot-scope="s">
      <img :src="s.item.avatar" style="height: 100%;">
      <span v-text="s.item.name"></span>
    </template>
    <b-form-textarea ref="textarea" v-model="body" placeholder="Issue content" :rows="6" style="margin-bottom: 10px;"></b-form-textarea>
  </at-ta>
</template>

<script>
import AtTa from "vue-at/dist/vue-at-textarea";

export default {
  props: ["input"],
  data() {
    return {
      body: this.input
    };
  },
  watch: {
    input() {
      this.body = this.input;
    },
    body() {
      this.$emit("input", this.body);
    }
  },
  methods: {
    updated(data) {
      if (!data) return;
      this.body = this.$refs.textarea.$el.value;
    }
  },
  computed: {
    members() {
      return this.$store.state.collaborators.map(({ login, avatar_url }) => {
        return {
          name: login,
          avatar: avatar_url
        };
      });
    }
  },
  components: { AtTa }
};
</script>
