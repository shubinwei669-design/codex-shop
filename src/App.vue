<script setup>
import ExperienceSection from "./components/ExperienceSection.vue";
import HeroSection from "./components/HeroSection.vue";
import HoursSection from "./components/HoursSection.vue";
import InfoStrip from "./components/InfoStrip.vue";
import MenuSection from "./components/MenuSection.vue";
import ReservationSection from "./components/ReservationSection.vue";
import SiteFooter from "./components/SiteFooter.vue";
import SiteHeader from "./components/SiteHeader.vue";
</script>

<template>
  <SiteHeader />
  <main id="home">
    <HeroSection />
    <InfoStrip />
    <MenuSection />
    <ExperienceSection />
    <ReservationSection />
    <HoursSection />
  </main>
  <SiteFooter />
</template>
