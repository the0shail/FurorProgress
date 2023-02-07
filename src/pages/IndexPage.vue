<template>

  <q-page class="flex">
    <!-- <productList/> -->
    <productListTable />
  </q-page>
  <router-view/>
</template>

<script>
import { defineComponent } from 'vue'
import productList from 'src/components/productList.vue';
import productListTable from 'src/components/productListTable.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    productList, productListTable
  }
})
</script>

<style scoped>
</style>
