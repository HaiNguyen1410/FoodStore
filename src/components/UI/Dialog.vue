<template>
  <v-dialog persistent width="50rem">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
        :class="toggleDialog"
        depressed
        @mouseover="hover"
        @mouseleave="hover"
        ><slot name="display"></slot
      ></v-btn>
    </template>
    <template v-slot:default="dialog">
      <v-card>
        <v-toolbar color="primary" dark> Product Detail</v-toolbar>
        <v-card-text>
          <b-img center :src="product.image" class="my-5" />
          <form class="d-inline-flex float-end mt-2 mx-4" @keypress.enter.prevent>
            <b-form-input
              type="number"
              class="h-25"
              v-model.number="quantity"
            ></b-form-input>
            <b-button
              class="Add d-inline text-nowrap mx-3"
              size="sm"
              @click="AddToCart"
              >Add To Cart</b-button
            >
          </form>
          <div class="detail-box">
            <div>{{ product.name }}</div>
            <div class="price_box">
              <h6 class="price_heading"><span>$</span>{{ product.price }}</h6>
            </div>
            <div>{{ product.description }}</div>
          </div>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn text @click="dialog.value = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
<script>
export default {
  inject: ["products"],
  props: ["product", "btn"],
  methods: {
    AddToCart() {
      var isStopSearching = false;
      var step = 0;
      var subStep = 0;
      var latestID;
      var isProcessed = false;
      for (const order of this.$store.state.cart) {
        step++;
        if (!order.paid && !isProcessed) {
          for (const item of order.items) {
            if (item.id == this.product.id) {
              item.quantity += this.quantity;
              fetch(
                "https://634918dfa59874146b171fc0.mockapi.io/api/cart/" +
                  order.id,
                {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(order),
                }
              );
              isProcessed = true;
              break;
            } else {
              subStep++;
            }
          }
          if (subStep == order.items.length) {
              order.items.push({
                id: this.product.id,
                name: this.product.name,
                price: this.product.price,
                quantity: this.quantity,
              });
              fetch(
                "https://634918dfa59874146b171fc0.mockapi.io/api/cart/" +
                  order.id,
                {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(order),
                }
              );
              isProcessed = true;
            }
        }
        if (step === this.$store.state.cart.length) {
          console.log("running");
          isStopSearching = true;
          latestID = parseInt(order.id) + 1;
        }
      }
      if ((isStopSearching || !this.$store.state.cart.length) && !isProcessed) {
        var a = {};
        a = {
          id: latestID,
          paid: false,
          total: 0,
          items: [
            {
              id: this.product.id,
              name: this.product.name,
              price: this.product.price,
              quantity: this.quantity,
            },
          ],
        };
        this.$store.state.cart.push(a);
        fetch("https://634918dfa59874146b171fc0.mockapi.io/api/cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            paid: a.paid,
            total: a.total,
            items: a.items,
          }),
        });
      }
      this.quantity = 1;
    },
    hover() {
      this.isHover = !this.isHover;
    },
  },
  data() {
    return {
      quantity: 1,
      isHover: false,
    };
  },
  computed: {
    toggleDialog() {
      if (this.btn === "FoodSection") {
        return "product";
      } else if (this.isHover) {
        return "hover";
      } else return "Add";
    },
  },
};
</script>
<style scoped>
button.product {
  border: 0ch !important;
  background-color: white !important;
  margin: inherit !important;
  padding: inherit !important;
  width: 24rem !important;
  height: 25rem !important;
  color: black !important;
}
button.Add {
  background-color: #b6eb7a !important;
  color: #ffffff !important;
  transition: all 0.3s;
  border: 1px solid transparent;
  border-radius: 5px;
}
button.hover {
  background-color: transparent !important;
  border-color: #b6eb7a !important;
  color: #b6eb7a;
  transition: all 0.3s;
  border: 1px solid transparent;
  border-radius: 5px;
}
</style>
