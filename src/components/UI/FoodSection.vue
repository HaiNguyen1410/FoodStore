<template>
  <div class="container">
    <div class="heading_container heading_center">
      <h2>Our Delicious Food</h2>
    </div>
    <div class="row">
      <div v-for="product in dat" class="col-md-6 col-lg-4" :key="product.id">
        <DialogCard :product="product" :btn="'FoodSection'">
          <template v-slot:display>
            <div class="box">
              <div class="img-box">
                <img :src="product.image" alt="" />
              </div>
              <div class="detail-box">
                <div>{{ product.name }}</div>
                <div class="price_box">
                  <h6 class="price_heading">
                    <span>$</span>{{ product.price }}
                  </h6>
                </div>
              </div>
            </div>
          </template>
        </DialogCard>
      </div>
    </div>
    <div class="btn-box" v-if="section == 'index'">
      <router-link to="/products"> View More </router-link>
    </div>
  </div>
</template>

<script>
import DialogCard from "./Dialog.vue";
export default {
  components: { DialogCard },
  inject: ["products"],
  props: ["section"],
  data() {
    return {
      display: [],
    };
  },
  computed: {
    dat() {
      return this.section == "index" ? this.display : this.products;
    },
  },
  created() {
    setTimeout(() => {
      var a;
      var b = [];
      do {
        a = Math.floor(Math.random() * this.products.length);
        if (!b.find((t) => t == a)) {
          this.display.push(this.products.find((id) => id.id == a));
          b.push(a);
        }
      } while (this.display.length < 6);
    }, 1000);
  },
};
</script>
