<template>
  <b-carousel
    :interval="4000"
    indicators
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd"
    id="customCarousel1"
    img-height="50%"
  >
    <!-- Text slides with image -->
    <b-carousel-slide img-blank v-for="product in slider" :key="product.id">
      <div class="row">
        <div class="col-md-6">
          <div class="detail-box">
            <h1>
              <div class="detail-box">
                <div>{{ product.name }}</div>
                <div class="price_box">
                  <h6 class="price_heading">
                    <span>$</span>{{ product.price }}
                  </h6>
                </div>
              </div>
            </h1>
            <DialogCard :product="product" :btn="'theSlider'"><template v-slot:display>Buy Now</template></DialogCard>
          </div>
        </div>
      </div>
    </b-carousel-slide>
  </b-carousel>
</template>

<script>
import DialogCard from './Dialog.vue'
export default {
  components:{DialogCard},
  props:['product'],
  data() {
    return {
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
  inject:['products'],
  data(){
    return{
      slider:[]
    }
  },
  created(){
    setTimeout(() => {
      var a;
      var b = [];
      do {
        a = Math.floor(Math.random() * this.products.length);
        if (!b.find((t) => t == a)) {
          this.slider.push(this.products.find((id) => id.id == a));
          b.push(a);
        }
      } while (this.slider.length < 3);
    }, 1000);
  }
};
</script>
