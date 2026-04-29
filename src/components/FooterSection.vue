<script setup lang="ts">
import { navLinks, salonConfig, whatsappUrl } from '@/data/config'

const scrollTo = (href: string) => {
  if (href === '#inicio') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  const el = document.querySelector(href)
  if (el) {
    const top = el.getBoundingClientRect().top + window.pageYOffset - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-dark border-t border-white/5">

    <!-- Contenido principal del footer -->
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">

        <!-- Columna 1: Logo y descripción -->
        <div>
          <a
            href="#inicio"
            @click.prevent="scrollTo('#inicio')"
            class="font-cormorant text-3xl font-light tracking-[0.15em] text-white select-none"
          >
            Aura <span class="text-gold font-medium">Beauty</span>
          </a>

          <p class="font-lato text-white/60 text-sm leading-relaxed mt-4 max-w-xs">
            Tu espacio de lujo, cuidado y bienestar. Expertos en belleza femenina con más de 8 años transformando vidas en Bogotá.
          </p>

          <!-- Enlace WhatsApp -->
          <a
            :href="whatsappUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 mt-7 font-lato text-gold text-[10px] tracking-[0.28em] uppercase hover:text-gold-light transition-colors duration-300"
          >
            <span class="h-px w-5 bg-gold" />
            Reservar Cita
          </a>
        </div>

        <!-- Columna 2: Navegación -->
        <div>
          <h4 class="font-lato text-[9px] tracking-[0.4em] uppercase text-gold mb-6">Navegación</h4>
          <ul class="space-y-3">
            <li v-for="link in navLinks" :key="link.href">
              <a
                :href="link.href"
                @click.prevent="scrollTo(link.href)"
                class="font-lato text-white/60 text-sm hover:text-gold transition-colors duration-300 cursor-pointer"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Columna 3: Síguenos + dirección -->
        <div>
          <h4 class="font-lato text-[9px] tracking-[0.4em] uppercase text-gold mb-6">Síguenos</h4>
          <div class="space-y-3 mb-9">
            <a
              :href="salonConfig.instagram"
              target="_blank"
              rel="noopener noreferrer"
              class="block font-lato text-white/60 text-sm hover:text-white transition-colors duration-300"
            >
              Instagram — {{ salonConfig.instagramHandle }}
            </a>
            <a
              :href="salonConfig.facebook"
              target="_blank"
              rel="noopener noreferrer"
              class="block font-lato text-white/60 text-sm hover:text-white transition-colors duration-300"
            >
              Facebook — {{ salonConfig.facebookHandle }}
            </a>
          </div>

          <h4 class="font-lato text-[9px] tracking-[0.4em] uppercase text-gold mb-3">Dirección</h4>
          <p class="font-lato text-white/60 text-sm leading-relaxed">{{ salonConfig.address }}</p>
          <p class="font-lato text-white/60 text-sm mt-1">{{ salonConfig.phone }}</p>
        </div>
      </div>
    </div>

    <!-- Barra de copyright -->
    <div class="border-t border-white/5">
      <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p class="font-lato text-white/45 text-xs tracking-wider">
          © {{ year }} Aura Beauty. Todos los derechos reservados.
        </p>
        <div class="flex items-center gap-2">
          <span class="text-gold/40 text-xs select-none" aria-hidden="true">✦</span>
          <p class="font-lato text-white/45 text-xs">Bogotá, Colombia</p>
        </div>
      </div>
    </div>
  </footer>
</template>
