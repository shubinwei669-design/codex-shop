<script setup>
const features = [
  {
    number: "01",
    title: "暖暖的主厨台",
    text: "木质餐桌、柔和灯光和厨房里飘来的香气，让人一坐下就慢慢放松下来。",
  },
  {
    number: "02",
    title: "留给两个人的窗边",
    text: "适合约会、纪念日，也适合没有特别理由的晚餐，把今天的琐碎轻轻放一边。",
  },
  {
    number: "03",
    title: "给朋友团聚的长桌",
    text: "生日、家庭聚餐或好友小聚都能坐得舒服，菜一道道上来，话也一句句热起来。",
  },
];
</script>

<template>
  <section class="experience" id="experience">
    <div class="experience-copy">
      <p class="eyebrow">空间体验</p>
      <h2>像回到熟悉的小餐桌，安心吃一顿热乎饭。</h2>
      <p>
        拾味想把晚餐变成一天里柔软的片刻。灯光不刺眼，座位不拥挤，热菜从厨房端出来时，刚好适合和重要的人慢慢说话。
      </p>
    </div>
    <div class="experience-list" aria-label="服务特点">
      <div v-for="feature in features" :key="feature.number">
        <span>{{ feature.number }}</span>
        <strong>{{ feature.title }}</strong>
        <p>{{ feature.text }}</p>
      </div>
    </div>
  </section>
</template>
