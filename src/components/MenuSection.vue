<script setup>
const menuItems = [
  {
    category: "前菜",
    name: "柑橘油醋章鱼沙拉",
    description: "炙烤章鱼、芝麻菜、血橙、榛子碎",
    price: "¥68",
  },
  {
    category: "主菜",
    name: "迷迭香炭烤西冷",
    description: "谷饲牛排、烤蒜土豆泥、黑椒汁",
    price: "¥198",
    featured: true,
  },
  {
    category: "海鲜",
    name: "番茄藏红花海鲜锅",
    description: "鲜虾、青口、鳕鱼、酸面包",
    price: "¥158",
  },
  {
    category: "甜点",
    name: "焦糖海盐布丁",
    description: "马达加斯加香草、烤杏仁、海盐焦糖",
    price: "¥42",
  },
];
</script>

<template>
  <section class="section menu-section" id="menu">
    <div class="section-heading">
      <p class="eyebrow">今日推荐</p>
      <h2>从开胃菜到甜点，菜单每天跟着季节微调。</h2>
    </div>
    <div class="menu-grid">
      <article
        v-for="item in menuItems"
        :key="item.name"
        class="menu-card"
        :class="{ featured: item.featured }"
      >
        <p>{{ item.category }}</p>
        <h3>{{ item.name }}</h3>
        <span>{{ item.description }}</span>
        <strong>{{ item.price }}</strong>
      </article>
    </div>
  </section>
</template>
