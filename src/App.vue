<script setup lang="ts">
import { useScrollReveal } from '@/composables/useScrollReveal'
import NavBar from '@/components/NavBar.vue'
import HeroSection from '@/components/HeroSection.vue'
import BannerSection from '@/components/BannerSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import GallerySection from '@/components/GallerySection.vue'
import TestimonialsSection from '@/components/TestimonialsSection.vue'
import BookingSection from '@/components/BookingSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import SocialButtons from '@/components/SocialButtons.vue'
import FooterSection from '@/components/FooterSection.vue'

// Inicializa el observador de scroll para toda la página
useScrollReveal()
</script>

<template>
  <NavBar />

  <main>
    <HeroSection />
    <BannerSection />
    <ServicesSection />
    <GallerySection />
    <TestimonialsSection />
    <BookingSection />
    <AboutSection />
    <ContactSection />
  </main>

  <FooterSection />
  <SocialButtons />
</template>
