<template>
  <div class="q-pa-md" style="width: 800px; margin: auto;">
    <q-intersection once transition="scale" class="example-item">
      <q-table title="Product" @row-click="clickable($event)" push no-hover="false" :rows="this.rows" :columns="columns"
        row-key="name" />
    </q-intersection>
  </div>
  {{ this.getTableInfo() }}
</template>

<script>
const columns = [
  { name: 'id', classes: 'productId', required: true, label: 'Id', align: 'left', field: row => row.name, format: val => `${val}`, sortable: true },
  { name: 'product', align: '', label: 'Product Type Id', field: 'product', sortable: true },
  { name: 'name', label: 'Name Uz', field: 'name_uz', sortable: true },
  { name: 'cost', label: 'Cost', field: 'cost', sortable: true },
  { name: 'address', label: 'Address', field: 'address' },
  { name: 'created', label: 'Created Date', field: 'created' },
  // { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  // { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
]


import { defineComponent } from 'vue';

import { mapGetters } from 'vuex';

export default defineComponent({
  name: "productListTable",
  setup() {
    return {
      columns,
      rows: [

      ],

    }
  },
  methods: {
    ...mapGetters("productStore", ["getProduct"]),

    getTableInfo() {
      let data = this.getProduct();

      data.forEach((value) => {

        let currentTemplate = {
          name: value.id,
          product: value.product_type_id,
          name_uz: value.name_uz,
          cost: value.cost,
          address: value.address,
          created: this.timeConverter(value.created_date),
        }
        // console.log(.lenght);

        this.rows.push(currentTemplate)
      })
    },

    timeConverter(timestamp) {
      let a = new Date(timestamp * 1000);
      let months = ['янв', 'фев', 'март', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
      let year = a.getFullYear();
      let month = months[a.getMonth()];
      let date = a.getDate();
      let time = `${date} ${month} ${year} год`;
      return time;
    },

    clickable(event) {
      let id = event.path[1].querySelector(".productId").innerText
      this.$router.push(`/product/${id}`)
    }

    // TODO обновить информацию после удаления
    // deleteCard(id) {
    //   this.$axios.delete(`http://94.158.54.194:9092/api/product/${id}`)
    //     .then(data => {
    //       console.log('Пост удален => ' + data.id);
    //     });
    // }
  },


  // async posts() {
  //   let axioss = await this.$axios.post("http://94.158.54.194:9092/api/product", {
  //     id: Math.floor(Math.random() * 10000) + 1,
  //     product_type_id: Math.floor(Math.random() * 100) + 1,
  //     name_uz: 'another note',
  //     cost: '10000',
  //     address: 'Toshkent',
  //     created_date: 1675626175000,
  //   })
  //   console.log(axioss);
  // },


})
</script>

<style scoped>
.card-ul {
  list-style: none;
  padding: 0;
  margin-top: 5px;
}

.removeButton,
.DescriptionButton {
  text-transform: none;
  text-decoration: none;
}

main {
  max-width: 1000px;
  margin: auto;
}
</style>
