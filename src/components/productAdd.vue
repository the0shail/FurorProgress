<template>
  <div class="q-pa-md" style="max-width: 400px; margin: auto;">
    <q-intersection transition="scale" once class="example-item">
      <q-form @submit="this.saveInfo()" class="q-gutter-md">
        <q-input filled v-model="product_type_id" label="Product Type ID" />
        <q-input filled v-model="name_uz" label="Name Uz" />
        <q-input filled v-model="cost" label="Cost" />
        <q-input filled v-model="address" label="Address" />
        <q-input filled v-model="created_date" label="Created Date" />

        <div>
          <q-btn label="Подтвердить" type="submit" class="ttn" color="primary " />
          <q-btn label="Назад" type="button" color="primary" to="/" flat class="q-ml-sm ttn bg-indigo-7 text-white" />
        </div>
      </q-form>
    </q-intersection>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
  name: "productAdd",
  data() {
    return {
      product_type_id: null,
      name_uz: "",
      cost: null,
      address: "",
      created_date: null,
    }
  },

  methods: {
    ...mapGetters("productStore", ["getProduct"]),
    ...mapActions("productStore", ["getServerData"]),


    async saveInfo() {
      await this.$axios.post(`http://94.158.54.194:9092/api/product`, {
        "product_type_id": this.product_type_id,
        "name_uz": this.name_uz,
        "cost": this.cost,
        "address": this.address,
        "created_date": this.created_date
      })
        .then(response => console.log(response))
        .catch(error => console.log(error.response));

      const response = await this.$axios.get("http://94.158.54.194:9092/api/product");

      this.getServerData(response.data);

      this.$router.push(`/`)
    }

  },

}
</script>

<style  scoped>

</style>
