<template>
  <div class="container">
    <div class="heading_container heading_center d-inline">
      <h2 class="">{{ view }}</h2>
      <v-btn
        class="float-right my-n12 white--text"
        color="#b6eb7a"
        @click="title(view === 'Your Cart' ? 'Order History' : 'Your Cart')"
        >{{ view == "Your Cart" ? "Order History" : "Your Cart" }}</v-btn
      >
    </div>
    <v-sheet
      v-for="order in $store.state.cart"
      :key="order.id"
      rounded
      color="grey lighten-5"
      elevation="2"
      class="p-3 my-3"
      v-if="isHistory(order)"
    >
      <div class="">
        <div>Cart id: {{ order.id }}</div>
        <v-container v-for="item in order.items" :key="item.id" fluid>
          <v-row>
            <v-col>Name: {{ item.name }}</v-col>
            <v-col class="offset-3"> Quantity: {{ item.quantity }} </v-col>
            <v-col class="offset-4" v-once>Sub-Total: ${{ parseInt(item.price)*item.quantity }}{{sumTotal(item)}}</v-col>
          </v-row>
        </v-container>
      </div>
      <div class="price_box d-block">
        <h6 class="price_heading">Total <span>$</span>{{ resetTotal(order) }}</h6>
      </div>
      <v-btn v-if="!order.paid" @click="purchase(order)">Purchase</v-btn>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data() {
    return {
      view: "Your Cart",
      total:0
    };
  },
  methods: {
    title(state) {
      this.view = state;
    },
    isHistory(order) {
      return this.view === "Your Cart" ? !order.paid : order.paid;
    },
    purchase(index) {
      for (const order of this.$store.state.cart) {
        if (order.id == index.id) {
          order.paid = true;
          fetch(
            "https://634918dfa59874146b171fc0.mockapi.io/api/cart/" + order.id,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ paid: true }),
            }
          );
        }
      }
    },
    sumTotal(item){
      this.total+=(parseInt(item.price)*item.quantity)
    },
    resetTotal(order){
      order.total=this.total
      this.total=0
      return order.total
    }
  },
};
</script>
