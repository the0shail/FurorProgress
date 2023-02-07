<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title>
          Furor Progress
        </q-toolbar-title>

        <q-btn class="bg-indigo-7 ttn" to="/product-add" label="Добавить" style="font-weight: bold;"/>
      </q-toolbar>
    </q-header>


    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',


})
</script>
