<script setup>
import { reactive, ref } from "vue";

const isSubmitted = ref(false);
const form = reactive({
  date: "",
  partySize: "2 位",
  phone: "",
});

function submitReservation() {
  isSubmitted.value = true;

  window.setTimeout(() => {
    isSubmitted.value = false;
    form.date = "";
    form.partySize = "2 位";
    form.phone = "";
  }, 2200);
}
</script>

<template>
  <section class="reservation-band" id="reserve">
    <div>
      <p class="eyebrow">订位</p>
      <h2>今晚留一个好位置。</h2>
    </div>
    <form class="reservation-form" aria-label="订位表单" @submit.prevent="submitReservation">
      <label>
        <span>日期</span>
        <input v-model="form.date" type="date" required />
      </label>
      <label>
        <span>人数</span>
        <select v-model="form.partySize" required>
          <option>2 位</option>
          <option>3-4 位</option>
          <option>5-8 位</option>
          <option>包场咨询</option>
        </select>
      </label>
      <label>
        <span>电话</span>
        <input v-model="form.phone" type="tel" placeholder="请输入手机号" required />
      </label>
      <button type="submit" :disabled="isSubmitted">
        {{ isSubmitted ? "已收到订位" : "提交订位" }}
      </button>
    </form>
  </section>
</template>
