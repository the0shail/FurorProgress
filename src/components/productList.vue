<template>
  <main class="q-pa-md">
    <div class="row q-col-gutter-lg justify-evenly">
      <div class="col-6" v-for="item in getProduct()" :key="item.id">
        <q-intersection transition="scale" once class="example-item">
          <q-card class="my-card bg-primary text-white ">
            <q-card-section>
              <div class="text-h5"><b>Продукт: {{ item.name_uz }}</b></div>
              <div class="text-subtitle2">{{ item.cost }} сум</div>
              <ul class="card-ul">
                <li>Адрес: <b>{{ item.address }}</b></li>
                <li>Дата создания: <b>{{ timeConverter(item.created_date) }}</b></li>
              </ul>
            </q-card-section>
            <q-separator dark />

            <q-card-actions>
              <q-btn class="removeButton bg-indigo-7">
                <router-link class="DescriptionButton text-white"
                  :to="{ name: 'product-item', params: { id: item.id } }">
                  Подробнее
                </router-link>
              </q-btn>
              <q-btn class="removeButton bg-red-7" @click="this.deleteCard(item.id)">Удалить</q-btn>
            </q-card-actions>
          </q-card>
        </q-intersection>
      </div>
    </div>
  </main>
</template>

<script>
import { defineComponent } from 'vue';

import { mapGetters, mapActions } from 'vuex';

export default defineComponent({
  name: "productList",
  methods: {
    ...mapGetters("productStore", ["getProduct"]),
    ...mapActions("productStore", ["getServerData"]),


    timeConverter(timestamp) {
      let a = new Date(timestamp * 1000);
      let months = ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
      let year = a.getFullYear();
      let month = months[a.getMonth()];
      let date = a.getDate();
      let time = `${date} ${month} ${year} год`;
      return time;
    },

    // TODO обновить информацию после удаления


    async requestData() {
      const response = await this.$axios.get("http://94.158.54.194:9092/api/product");
      this.getServerData(response.data);
    }

  },

  async mounted() {
    await this.requestData()
  }

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
