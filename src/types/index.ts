// ============================================================
// Tipos globales para el template de salón de belleza
// Aura Beauty — todos los tipos centralizados aquí
// ============================================================

/** Enlace del menú de navegación */
export interface NavLink {
  label: string
  href: string
}

/** Estadística visible en el hero */
export interface HeroStat {
  value: string
  label: string
}

/** Tarjeta de servicio con imagen, descripción y precio */
export interface Service {
  id: number
  title: string
  description: string
  price: string
  image: string
  alt: string
}

/** Imagen de la galería con dimensiones opcionales */
export interface GalleryImage {
  id: number
  src: string
  alt: string
}

/** Testimonio de clienta con calificación y foto */
export interface Testimonial {
  id: number
  name: string
  role: string
  comment: string
  stars: number
  image: string
}

/** Horario de atención */
export interface WorkHour {
  day: string
  time: string
}

/** Estadística en la sección "Sobre Nosotros" */
export interface AboutStat {
  value: string
  label: string
}

/** Tipo de ícono para las tarjetas de contacto */
export type ContactIcon = 'phone' | 'email' | 'location'

/** Tarjeta de información de contacto */
export interface ContactCard {
  icon: ContactIcon
  title: string
  lines: string[]
  href?: string
}

/** Plataforma de red social */
export type SocialPlatform = 'whatsapp' | 'instagram' | 'facebook' | 'maps'

/** Botón flotante de red social */
export interface SocialButton {
  platform: SocialPlatform
  label: string
  url: string
  background: string
}

/** Configuración general del salón (textos personalizables) */
export interface SalonConfig {
  name: string
  tagline: string
  description: string
  phone: string
  whatsapp: string
  whatsappMessage: string
  email: string
  address: string
  instagram: string
  instagramHandle: string
  facebook: string
  facebookHandle: string
  mapsEmbed: string
  mapsUrl: string
}
