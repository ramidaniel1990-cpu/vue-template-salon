<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { galleryImages } from '@/data/config'

const lightboxOpen = ref(false)
const lightboxIndex = ref(0)

const openLightbox = (index: number) => {
  lightboxIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

const prevImage = () => {
  lightboxIndex.value = (lightboxIndex.value - 1 + galleryImages.length) % galleryImages.length
}

const nextImage = () => {
  lightboxIndex.value = (lightboxIndex.value + 1) % galleryImages.length
}

const handleKey = (e: KeyboardEvent) => {
  if (!lightboxOpen.value) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowLeft') prevImage()
  if (e.key === 'ArrowRight') nextImage()
}

onMounted(() => window.addEventListener('keydown', handleKey))
onUnmounted(() => {
  window.removeEventListener('keydown', handleKey)
  document.body.style.overflow = ''
})
</script>

<template>
  <section id="galeria" class="py-24 bg-dark">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

      <!-- Encabezado -->
      <div class="text-center mb-16 reveal">
        <p class="font-lato text-[10px] tracking-[0.4em] uppercase text-gold mb-3">Portfolio</p>
        <h2 class="font-cormorant text-5xl sm:text-6xl font-light text-white">
          Nuestro Trabajo
        </h2>
        <div class="flex items-center justify-center gap-3 mt-4">
          <span class="h-px w-12 bg-gold/40" />
          <span class="text-gold text-sm leading-none">✦</span>
          <span class="h-px w-12 bg-gold/40" />
        </div>
      </div>

      <!-- Grid masonry con CSS columns -->
      <div class="columns-1 sm:columns-2 lg:columns-3 gap-4">
        <div
          v-for="(img, index) in galleryImages"
          :key="img.id"
          class="break-inside-avoid mb-4 reveal"
          :class="`reveal-delay-${(index % 4) + 1}`"
        >
          <div
            class="group relative overflow-hidden cursor-pointer"
            @click="openLightbox(index)"
          >
            <img
              :src="img.src"
              :alt="img.alt"
              class="w-full object-cover transition-transform duration-700 group-hover:scale-108 block"
            />
            <!-- Overlay con lupa al hacer hover -->
            <div class="absolute inset-0 bg-dark/55 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-350">
              <div class="flex flex-col items-center gap-2">
                <div class="w-11 h-11 border border-white/60 flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
                <p class="font-lato text-white text-[9px] tracking-[0.3em] uppercase">Ver</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <Transition name="fade">
      <div
        v-if="lightboxOpen"
        class="fixed inset-0 z-[100] bg-dark/96 flex items-center justify-center p-4"
        @click.self="closeLightbox"
      >
        <!-- Botón cerrar -->
        <button
          @click="closeLightbox"
          class="absolute top-5 right-5 w-10 h-10 flex items-center justify-center text-white/50 hover:text-white border border-white/15 hover:border-gold transition-all duration-300"
          aria-label="Cerrar"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Flecha izquierda -->
        <button
          @click="prevImage"
          class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/50 hover:text-white border border-white/15 hover:border-gold transition-all duration-300"
          aria-label="Imagen anterior"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <!-- Imagen activa -->
        <img
          v-if="galleryImages[lightboxIndex]"
          :src="galleryImages[lightboxIndex]!.src"
          :alt="galleryImages[lightboxIndex]!.alt"
          class="max-h-[85vh] max-w-[88vw] object-contain shadow-2xl"
        />

        <!-- Flecha derecha -->
        <button
          @click="nextImage"
          class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/50 hover:text-white border border-white/15 hover:border-gold transition-all duration-300"
          aria-label="Imagen siguiente"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Contador -->
        <div class="absolute bottom-5 left-1/2 -translate-x-1/2 font-lato text-white/35 text-xs tracking-[0.25em]">
          {{ lightboxIndex + 1 }} / {{ galleryImages.length }}
        </div>
      </div>
    </Transition>
  </section>
</template>
