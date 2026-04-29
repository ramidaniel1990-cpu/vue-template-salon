// Composable para animar elementos al entrar en el viewport
import { onMounted, onUnmounted, nextTick } from 'vue'

export function useScrollReveal() {
  let observer: IntersectionObserver | null = null

  const init = () => {
    const elements = document.querySelectorAll<HTMLElement>('.reveal')
    if (!elements.length) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer?.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.12,
        // Activa la animación antes de que el elemento llegue al borde inferior
        rootMargin: '0px 0px -60px 0px',
      },
    )

    elements.forEach((el) => observer!.observe(el))
  }

  onMounted(async () => {
    // nextTick garantiza que todos los componentes hijos estén en el DOM
    await nextTick()
    init()
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}
