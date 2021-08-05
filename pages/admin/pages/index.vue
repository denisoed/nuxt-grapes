<template>
  <div class="pages">
    <h1>Список всех страниц</h1>
    <div class="pages_create">
      <input v-model="newPageName" type="text" placeholder="Название страницы">
      <button @click="createPage">Создать</button>
    </div>
    <ul class="pages_list">
      <li
        v-for="(page, i) of pages.data"
        :key="i"
      >
        <nuxt-link
          :to="`/admin/pages/${page._id}`"
        >
          {{ page.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Pages',
  data() {
    return {
      newPageName: null,
      pages: []
    }
  },
  created() {
    this.getPages()
  },
  methods: {
    async getPages() {
      this.pages = await this.$axios.get('/api/get-pages');
    },
    async createPage() {
      if (!this.newPageName) return;
      await this.$axios.$post('/api/create', {
        name: this.newPageName,
      });
    }
  }
}
</script>