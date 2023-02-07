<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <productAdd />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import productAdd from 'src/components/productAdd.vue';


export default defineComponent({
  name: "ProductAddPage",
  components: {
    productAdd
  }
})
</script>

<style scoped>

</style>
