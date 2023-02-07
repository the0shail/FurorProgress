<template>
  <div class="q-pa-md" style="max-width: 400px; margin: auto;">
    <q-intersection transition="scale" once class="example-item">
      <q-form @submit="this.onSubmits()" class="q-gutter-md">

        <q-input filled v-model="product_type_id" label="Product Type ID" />
        <q-input filled v-model="name_uz" label="Name Uz" />
        <q-input filled v-model="cost" label="Cost" />
        <q-input filled v-model="address" label="Address" />
        <q-input filled v-model="created_date" label="Created Date" />

        <div>
          <q-btn label="Подтвердить" type="submit" class="ttn" color="primary " />
          <q-btn label="Назад" type="button" color="primary" to="/" flat class="q-ml-sm ttn bg-indigo-7 text-white" />
          <q-btn label="Удалить" type="button" color="primary" @click="deleteCard()" flat
            class="q-ml-sm ttn bg-red-10 text-white" />

        </div>
      </q-form>
    </q-intersection>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
  name: "productCard",
  data() {
    return {
      "id": this.editable("id"),
      "product_type_id": this.editable("product_type_id"),
      "name_uz": this.editable("name_uz"),
      "cost": this.editable("cost"),
      "address": this.editable("address"),
      "created_date": this.editable("created_date"),
    }
  },

  methods: {
    ...mapGetters("productStore", ["getProduct"]),
    ...mapActions("productStore", ["getServerData"]),

    editable(item) {
      return this.search(this.$route.params.id)[item];
    },

    search(id) {
      let result;
      let request = this.getProduct();
      request.forEach((value) => {
        value.id == id ? result = value : undefined;
      });
      return result
    },

    async onSubmits() {
      await this.$axios.put(`http://94.158.54.194:9092/api/product?id=${this.id}`, {
        id: this.id,
        product_type_id: this.product_type_id,
        name_uz: this.name_uz,
        cost: this.cost,
        address: this.address,
        created_date: this.created_date,
      })
        .then(response => console.log(response))
        .catch(error => console.log(error));

      const response = await this.$axios.get("http://94.158.54.194:9092/api/product");

      this.getServerData(response.data);


      this.$router.push("/")
    },
    async deleteCard() {
      await this.$axios.delete(`http://94.158.54.194:9092/api/product/${this.id}`)
        .then(data => {
          console.log('Пост удален => ' + data);
        })
        .catch(error => console.log(error));

      const response = await this.$axios.get("http://94.158.54.194:9092/api/product");

      this.getServerData(response.data);

      this.$router.push("/")
    },

  },

}
</script>

<style lang="scss" scoped>

</style>
