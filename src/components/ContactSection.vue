<script setup lang="ts">
import { contactCards, salonConfig } from '@/data/config'
</script>

<template>
  <section id="contacto" class="py-24 bg-dark">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

      <!-- Encabezado -->
      <div class="text-center mb-16 reveal">
        <p class="font-lato text-[10px] tracking-[0.4em] uppercase text-gold mb-3">Encuéntranos</p>
        <h2 class="font-cormorant text-5xl sm:text-6xl font-light text-white">
          Contacto
        </h2>
        <div class="flex items-center justify-center gap-3 mt-4">
          <span class="h-px w-12 bg-gold/40" />
          <span class="text-gold text-sm leading-none">✦</span>
          <span class="h-px w-12 bg-gold/40" />
        </div>
      </div>

      <!-- 3 cards de información de contacto -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
        <a
          v-for="(card, index) in contactCards"
          :key="card.title"
          :href="card.href ?? '#'"
          :target="card.icon === 'location' ? '_blank' : '_self'"
          rel="noopener noreferrer"
          class="reveal block p-8 border border-white/10 rounded-2xl hover:border-gold/35 hover:bg-white/4 transition-all duration-350 group"
          :class="`reveal-delay-${index + 1}`"
        >
          <!-- Ícono dentro de círculo con borde dorado -->
          <div class="w-12 h-12 border border-gold/30 rounded-full flex items-center justify-center mb-6 group-hover:border-gold group-hover:bg-gold/8 transition-all duration-300">

            <!-- Teléfono -->
            <svg v-if="card.icon === 'phone'" class="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>

            <!-- Email -->
            <svg v-else-if="card.icon === 'email'" class="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>

            <!-- Ubicación -->
            <svg v-else class="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>

          <h3 class="font-cormorant text-white text-2xl font-light mb-3">{{ card.title }}</h3>
          <p
            v-for="line in card.lines"
            :key="line"
            class="font-lato text-white/45 text-sm leading-relaxed"
          >
            {{ line }}
          </p>
        </a>
      </div>

      <!-- Google Maps embed responsivo -->
      <div class="reveal overflow-hidden rounded-2xl border border-white/10" style="height: 340px">
        <iframe
          :src="salonConfig.mapsEmbed"
          width="100%"
          height="100%"
          style="border: 0"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Ubicación Aura Beauty en Google Maps"
        />
      </div>
    </div>
  </section>
</template>
