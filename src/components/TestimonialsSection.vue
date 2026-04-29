<script setup lang="ts">
import { testimonials } from '@/data/config'
</script>

<template>
  <section id="testimonios" class="py-24 bg-cream">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

      <!-- Encabezado -->
      <div class="text-center mb-16 reveal">
        <p class="font-lato text-[10px] tracking-[0.4em] uppercase text-gold mb-3">Lo Que Dicen</p>
        <h2 class="font-cormorant text-5xl sm:text-6xl font-light text-dark">
          Nuestras Clientas
        </h2>
        <div class="flex items-center justify-center gap-3 mt-4">
          <span class="h-px w-12 bg-gold/40" />
          <span class="text-gold text-sm leading-none">✦</span>
          <span class="h-px w-12 bg-gold/40" />
        </div>
      </div>

      <!-- Cards de testimonios -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-7">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.id"
          class="reveal"
          :class="`reveal-delay-${index + 1}`"
        >
          <div class="relative bg-white border border-dark/6 p-8 pt-10 shadow-sm hover:shadow-lg transition-shadow duration-400 h-full flex flex-col">

            <!-- Comilla decorativa dorada -->
            <span
              class="absolute top-3 left-5 font-cormorant text-gold leading-none select-none pointer-events-none"
              style="font-size: 6rem; opacity: 0.18; line-height: 1"
              aria-hidden="true"
            >"</span>

            <!-- Estrellas doradas -->
            <div class="flex gap-0.5 mb-5 relative z-10">
              <span
                v-for="star in testimonial.stars"
                :key="star"
                class="text-gold text-base"
              >★</span>
            </div>

            <!-- Comentario -->
            <p class="font-lato text-dark/65 text-sm leading-relaxed mb-7 flex-1 relative z-10">
              "{{ testimonial.comment }}"
            </p>

            <!-- Perfil de la clienta -->
            <div class="flex items-center gap-4 relative z-10">
              <img
                :src="testimonial.image"
                :alt="testimonial.name"
                class="w-12 h-12 rounded-full object-cover border-2 border-gold/25"
              />
              <div>
                <p class="font-cormorant text-dark text-lg font-medium leading-tight">{{ testimonial.name }}</p>
                <p class="font-lato text-dark/38 text-[10px] tracking-[0.2em] uppercase mt-0.5">{{ testimonial.role }}</p>
              </div>
            </div>

            <!-- Línea decorativa inferior -->
            <div class="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
