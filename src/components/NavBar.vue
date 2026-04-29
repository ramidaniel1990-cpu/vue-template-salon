<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { navLinks, whatsappUrl } from '@/data/config'

// Estado del navbar: transparente → oscuro al hacer scroll
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

// Scroll suave al hacer clic en un enlace del menú
const scrollTo = (href: string) => {
  mobileMenuOpen.value = false
  if (href === '#inicio') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  const el = document.querySelector(href)
  if (el) {
    const offset = 80
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      isScrolled ? 'bg-dark/96 backdrop-blur-sm shadow-xl py-3' : 'bg-transparent py-5',
    ]"
  >
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      <div class="flex items-center justify-between">

        <!-- Logo -->
        <a
          href="#inicio"
          @click.prevent="scrollTo('#inicio')"
          class="flex-shrink-0 font-cormorant text-2xl font-light tracking-[0.15em] text-white select-none"
        >
          Aura <span class="text-gold font-medium">Beauty</span>
        </a>

        <!-- Links de escritorio -->
        <div class="hidden md:flex items-center gap-8">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            @click.prevent="scrollTo(link.href)"
            class="font-lato text-[11px] tracking-[0.28em] uppercase text-white/70 hover:text-gold transition-colors duration-300 cursor-pointer"
          >
            {{ link.label }}
          </a>
        </div>

        <!-- Botón CTA + hamburguesa -->
        <div class="flex items-center gap-4">
          <a
            :href="whatsappUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden md:inline-flex items-center gap-2 px-5 py-2 bg-gold hover:bg-gold-light text-dark font-lato text-[11px] tracking-[0.25em] uppercase font-medium transition-all duration-300"
          >
            Reservar Cita
          </a>

          <!-- Hamburguesa animada -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 p-1"
            aria-label="Abrir menú"
          >
            <span
              :class="[
                'block h-px bg-white transition-all duration-300 origin-center',
                mobileMenuOpen ? 'rotate-45 translate-y-[6px]' : '',
              ]"
            />
            <span
              :class="[
                'block h-px bg-white transition-all duration-300',
                mobileMenuOpen ? 'opacity-0 scale-x-0' : '',
              ]"
            />
            <span
              :class="[
                'block h-px bg-white transition-all duration-300 origin-center',
                mobileMenuOpen ? '-rotate-45 -translate-y-[6px]' : '',
              ]"
            />
          </button>
        </div>
      </div>
    </div>

    <!-- Menú mobile -->
    <Transition
      enter-active-class="transition-all duration-400 ease-out"
      enter-from-class="opacity-0 -translate-y-3"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-250 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-3"
    >
      <div
        v-if="mobileMenuOpen"
        class="md:hidden bg-dark/98 backdrop-blur-md border-t border-white/10"
      >
        <div class="px-8 pt-4 pb-6 space-y-1">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            @click.prevent="scrollTo(link.href)"
            class="block font-lato text-sm tracking-[0.25em] uppercase text-white/70 hover:text-gold py-3 border-b border-white/8 transition-colors duration-300 cursor-pointer"
          >
            {{ link.label }}
          </a>
          <div class="pt-4">
            <a
              :href="whatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="block w-full text-center py-3 bg-gold text-dark font-lato text-sm tracking-[0.25em] uppercase font-medium"
            >
              Reservar Cita
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>
