<script setup>
import TheHeader from "../components/UI/TheHeader.vue";
import TheSlider from "../components/UI/TheSlider.vue";
import FoodSection from "../components/UI/FoodSection.vue";
</script>

<template>
  <div>
    <div class="hero_area">
      <div class="hero_bg_box">
        <img src="../assets/images/hero-bg.jpg" alt="" />
      </div>
      <header class="header_section">
        <the-header></the-header>
      </header>

      <section class="slider_section">
        <keep-alive>
          <the-slider />
        </keep-alive>
      </section>
    </div>
    <section class="veg_section layout_padding">
      <food-section :section="'index'"></food-section>
    </section>
    <section class="container-fluid footer_section"></section>
  </div>
</template>