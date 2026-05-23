<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

const isScrolled = ref(false);

function updateHeader() {
  isScrolled.value = window.scrollY > 24;
}

onMounted(() => {
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateHeader);
});
</script>

<template>
  <header class="site-header" :class="{ 'is-scrolled': isScrolled }">
    <a class="brand" href="#home" aria-label="拾味餐馆首页">
      <span class="brand-mark">拾</span>
      <span>拾味餐馆</span>
    </a>
    <nav class="site-nav" aria-label="主导航">
      <a href="#menu">菜单</a>
      <a href="#experience">空间</a>
      <a href="#hours">营业</a>
      <a href="#reserve">订位</a>
    </nav>
    <a class="header-action" href="#reserve">立即订位</a>
  </header>
</template>
