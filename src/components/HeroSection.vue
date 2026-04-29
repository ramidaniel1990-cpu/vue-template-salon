<script setup lang="ts">
import { heroStats, whatsappUrl } from '@/data/config'

const scrollToServices = () => {
  const el = document.querySelector('#servicios')
  if (el) {
    const top = el.getBoundingClientRect().top + window.pageYOffset - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
</script>

<template>
  <section
    id="inicio"
    class="relative h-screen min-h-[640px] flex flex-col items-center overflow-hidden"
  >
    <!-- Imagen de fondo placeholder -->
    <img
      src="https://picsum.photos/seed/aura-hero/1920/1080"
      alt="Aura Beauty Salon"
      class="absolute inset-0 w-full h-full object-cover"
    />

    <!-- Overlay degradado oscuro -->
    <div class="absolute inset-0 bg-gradient-to-b from-dark/75 via-dark/55 to-dark/85" />

    <!-- Contenido central -->
    <div
      class="relative z-10 text-center px-5 max-w-4xl mx-auto w-full flex-1 flex flex-col items-center justify-center pt-[20px] pb-[100px] sm:pt-0 sm:pb-0"
    >
      <!-- Badge superior -->
      <div class="hero-animate hero-animate-1 inline-flex items-center gap-3 mb-6">
        <span class="h-px w-8 bg-gold" />
        <p class="font-lato text-[10px] tracking-[0.4em] uppercase text-gold">
          Salón de Belleza & Spa
        </p>
        <span class="h-px w-8 bg-gold" />
      </div>

      <!-- Título principal -->
      <h1
        class="hero-animate hero-animate-2 font-cormorant font-light text-white leading-none mb-5"
        style="font-size: clamp(4rem, 12vw, 9rem)"
      >
        Aura <span class="italic text-primary">Beauty</span>
      </h1>

      <!-- Subtítulo -->
      <p
        class="hero-animate hero-animate-3 font-cormorant text-white/65 font-light italic mb-10"
        style="font-size: clamp(1.1rem, 2.5vw, 1.5rem)"
      >
        Tu espacio de lujo, cuidado y bienestar
      </p>

      <!-- Botones CTA -->
      <div
        class="hero-animate hero-animate-4 flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <a
          :href="whatsappUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="px-9 py-3.5 bg-gold hover:bg-gold-light text-dark font-lato text-[11px] tracking-[0.3em] uppercase font-medium transition-all duration-300 hover:shadow-[0_0_24px_rgba(212,175,55,0.45)] min-w-[180px]"
        >
          Reservar Cita
        </a>
        <button
          @click="scrollToServices"
          class="px-9 py-3.5 border border-white/40 hover:border-gold text-white/80 hover:text-gold font-lato text-[11px] tracking-[0.3em] uppercase font-medium transition-all duration-300 min-w-[180px]"
        >
          Ver Servicios
        </button>
      </div>
    </div>
  </section>
</template>
