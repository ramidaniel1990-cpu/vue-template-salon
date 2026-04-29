<script setup lang="ts">
import { bannerPhrases } from '@/data/config'

// Duplicamos las frases para el loop infinito sin cortes visibles
const phrases = [...bannerPhrases, ...bannerPhrases]
</script>

<template>
  <section class="bg-dark overflow-hidden py-5 border-y border-gold/20">
    <div class="flex whitespace-nowrap select-none">
      <div class="marquee-track flex items-center shrink-0">
        <template v-for="(phrase, i) in phrases" :key="i">
          <span class="font-cormorant text-gold text-2xl font-light tracking-[0.22em] px-8 italic">
            {{ phrase }}
          </span>
          <span class="text-gold/35 text-base leading-none">✦</span>
        </template>
      </div>
    </div>
  </section>
</template>
