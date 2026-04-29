<script setup lang="ts">
import { services, whatsappUrl } from '@/data/config'
</script>

<template>
  <section id="servicios" class="py-24 bg-cream">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

      <!-- Encabezado de sección -->
      <div class="text-center mb-16 reveal">
        <p class="font-lato text-[10px] tracking-[0.4em] uppercase text-gold mb-3">Lo Que Ofrecemos</p>
        <h2 class="font-cormorant text-5xl sm:text-6xl font-light text-dark">
          Nuestros Servicios
        </h2>
        <div class="flex items-center justify-center gap-3 mt-4">
          <span class="h-px w-12 bg-gold/40" />
          <span class="text-gold text-sm leading-none">✦</span>
          <span class="h-px w-12 bg-gold/40" />
        </div>
      </div>

      <!-- Grid 2×2 escritorio, 1 columna mobile -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div
          v-for="(service, index) in services"
          :key="service.id"
          class="reveal"
          :class="`reveal-delay-${(index % 4) + 1}`"
        >
          <!-- Card de servicio con hover overlay -->
          <div class="group relative overflow-hidden aspect-[4/5] bg-dark cursor-pointer">

            <!-- Imagen de fondo -->
            <img
              :src="service.image"
              :alt="service.alt"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <!-- Info base siempre visible en la parte inferior -->
            <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent">
              <h3 class="font-cormorant text-white text-2xl font-light">{{ service.title }}</h3>
              <p class="font-lato text-gold text-sm mt-1">{{ service.price }}</p>
            </div>

            <!-- Overlay dorado en hover -->
            <div class="absolute inset-0 bg-dark/82 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-450 px-8 text-center">
              <div class="h-px w-10 bg-gold/50 mb-4" />
              <h3 class="font-cormorant text-white text-3xl font-light mb-3">{{ service.title }}</h3>
              <p class="font-lato text-white/65 text-sm leading-relaxed mb-5">{{ service.description }}</p>
              <p class="font-cormorant text-gold text-xl italic mb-6">{{ service.price }}</p>
              <a
                :href="whatsappUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block px-7 py-2.5 bg-gold hover:bg-gold-light text-dark font-lato text-[10px] tracking-[0.3em] uppercase font-medium transition-colors duration-300"
              >
                Reservar
              </a>
              <div class="h-px w-10 bg-gold/50 mt-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
