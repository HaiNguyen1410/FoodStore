<template>
  <v-app id="app">
    <router-view></router-view>
  </v-app>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:400,700|Raleway:400,700&display=swap");
</style>
<script>
import { computed } from "vue";
import { Store } from "vuex";
export default {
  data() {
    return {
      products: [],
    };
  },
  created() {
    fetch("https://634918dfa59874146b171fc0.mockapi.io/api/food")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        const results = [];
        for (const id in data) {
          results.push({
            id: parseInt(id)+1,
            name: data[id].name,
            price: data[id].price,
            description: data[id].description,
            image: data[id].image,
          });
        }
        this.products = results;
      });
      fetch("https://634918dfa59874146b171fc0.mockapi.io/api/cart")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        const results = [];
        for (const id in data) {
          results.push({
            id: parseInt(id)+1,
            items: data[id].items,
            total: data[id].total,
            paid: data[id].paid,
          });
        }
        this.$store.state.cart = results;
      });
  },
  provide() {
    return {
      products: computed(() => this.products),
    };
  },
};
</script>