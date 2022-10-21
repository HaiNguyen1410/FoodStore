<template>
    <body class="sub_page">
      <div class="hero_area">
        <div class="hero_bg_box">
          <img src="../assets/images/hero-bg.jpg" alt="" />
        </div>
        <header class="header_section">
          <the-header></the-header>
        </header>
      </div>
      <section class="veg_section layout_padding">
        <cart-card/>
    </section>
    </body>
  </template>
  <script setup>
  import TheHeader from "../components/UI/TheHeader.vue";
  import CartCard from "../components/UI/CartCard.vue"
  </script>