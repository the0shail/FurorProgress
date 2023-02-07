<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <productCard />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import productCard from 'src/components/productCard.vue';


export default defineComponent({
  name: "ProductPage",
  components: {
    productCard
  }
})
</script>

<style lang="scss" scoped>

</style>


<!-- [{"id":8847,"product_type_id":15,"name_uz":"Anor","cost":10000.0,"address":"Buxoro","created_date":1675625683000},{"id":8839,"product_type_id":15,"name_uz":"Nok","cost":1000.0,"address":"Toshkent","created_date":1675594518000},{"id":8843,"product_type_id":15,"name_uz":"Cola","cost":12000.0,"address":"Toshkent","created_date":1675603925000}] -->
