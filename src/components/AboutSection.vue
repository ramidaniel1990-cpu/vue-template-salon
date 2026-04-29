<script setup lang="ts">
import { aboutStats } from '@/data/config'
</script>

<template>
  <section id="nosotros" class="py-24 bg-cream">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <!-- Columna izquierda: texto -->
        <div class="reveal order-2 lg:order-1">
          <p class="font-lato text-[10px] tracking-[0.4em] uppercase text-gold mb-4">Nuestra Historia</p>
          <h2 class="font-cormorant text-5xl sm:text-6xl font-light text-dark mb-5 leading-tight">
            Sobre <span class="italic">Nosotras</span>
          </h2>
          <div class="h-px bg-gradient-to-r from-gold/50 to-transparent w-20 mb-8" />

          <p class="font-lato text-dark/58 text-base leading-relaxed mb-5">
            Aura Beauty nació de una pasión profunda por la belleza auténtica y el bienestar femenino. Desde nuestros inicios en el corazón de Bogotá, hemos creado un refugio de lujo donde cada clienta es tratada con la atención y el cuidado que merece.
          </p>
          <p class="font-lato text-dark/58 text-base leading-relaxed mb-12">
            Nuestro equipo de especialistas certificadas combina técnicas vanguardistas con productos de primera calidad para ofrecer resultados que superan expectativas. Aquí, tu transformación es nuestra misión.
          </p>

          <!-- Estadísticas en grid de 3 -->
          <div class="grid grid-cols-3 gap-4">
            <div
              v-for="stat in aboutStats"
              :key="stat.label"
              class="text-center py-6 border border-dark/8 hover:border-gold/30 transition-colors duration-300"
            >
              <span class="font-cormorant text-gold text-3xl font-light block mb-1">{{ stat.value }}</span>
              <span class="font-lato text-dark/45 text-[9px] tracking-[0.18em] uppercase leading-snug block">{{ stat.label }}</span>
            </div>
          </div>
        </div>

        <!-- Columna derecha: imagen -->
        <div class="reveal reveal-delay-2 order-1 lg:order-2">
          <div class="relative">
            <!-- Imagen principal con sombra elegante -->
            <img
              src="https://picsum.photos/seed/aura-about/700/900"
              alt="Interior de Aura Beauty"
              class="w-full object-cover shadow-[14px_14px_0_rgba(212,175,55,0.12)]"
            />

            <!-- Badge flotante con año de experiencia -->
            <div class="absolute -bottom-5 -left-4 bg-dark px-6 py-4 border border-gold/25 shadow-xl">
              <p class="font-cormorant text-gold text-2xl font-light leading-tight">8+ Años</p>
              <p class="font-lato text-white/38 text-[9px] tracking-[0.2em] uppercase mt-0.5">de experiencia</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
