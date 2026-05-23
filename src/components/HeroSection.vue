<script setup>
import heroImage from "../../assets/restaurant-hero.png";
</script>

<template>
  <section class="hero" aria-label="拾味餐馆介绍">
    <img
      class="hero-image"
      :src="heroImage"
      alt="温暖灯光下的现代餐馆开放式厨房与当季菜品"
    />
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <p class="eyebrow">当季餐桌 · 城市小馆</p>
      <h1>用一顿认真做的晚餐，留住今天的好胃口。</h1>
      <p class="hero-copy">
        拾味餐馆每日采购新鲜食材，以开放式厨房呈现炙烤、慢炖与手作甜点。适合约会、好友小聚，也适合给自己一顿从容的晚餐。
      </p>
      <div class="hero-actions" aria-label="首页主要操作">
        <a class="button primary" href="#reserve">预订餐位</a>
        <a class="button secondary" href="#menu">查看菜单</a>
      </div>
    </div>
  </section>
</template>
