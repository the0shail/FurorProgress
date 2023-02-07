<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
import { mapActions } from 'vuex'

export default defineComponent({
  name: 'App',

  methods: {
    ...mapActions("productStore", ["getServerData"]),

  },
  async mounted() {
    const response = await this.$axios.get("http://94.158.54.194:9092/api/product");
    this.getServerData(response.data);
  }
})
</script>

<style>
.ttn {
  text-transform: none;
}
</style>


<!-- TODO -->

<!-- 1) Обновлять информацию после удаления поста -->
<!-- 2) Допилить кнопку добавить и сохранять информацию на сервер -->

