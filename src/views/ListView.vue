<template>
  <div>
    <ListItem :items="newsItems" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { fetchNews, NewsItem } from "@/api";
import ListItem from "../components/ListItem.vue";

export default Vue.extend({
  components: {
    ListItem,
  },
  data() {
    return {
      newsItems: [] as NewsItem[],
    };
  },
  methods: {
    async getNews() {
      const { data } = await fetchNews();
      this.newsItems = data;
    },
  },
  created() {
    const { name } = this.$route;
    if (name === "ask") {
      this.newsItems = this.$store.state.ask;
    } else if (name === "jobs") {
      this.newsItems = this.$store.state.jobs;
    } else {
      this.getNews();
    }
  },
});
</script>

<style></style>
