<template>
  <div class="page">
    <h1>Page</h1>
    <ul v-if="page">
      <li>
        ID: {{ page.data._id }}
      </li>
      <br>
      <li>
        Name: {{ page.data.name }}
      </li>
    </ul>
    <div
      v-if="page"
      v-html="page.data.html"
    />
  </div>
</template>

<script>
export default {
  name: 'Page',
  data() {
    return {
      page: null
    }
  },
  head() {
    return {
      title: this.page?.data?.name || 'Page',
    }
  },
  created() {
    this.getPage()
  },
  methods: {
    async getPage() {
      this.page = await this.$axios.get('/api/get-page', {
        pageId: this.$route.params.id
      });
      const style = document.createElement('style');
      style.innerHTML = this.page?.data?.css || '';
      document.head.appendChild(style);
    },
  }
}
</script>
