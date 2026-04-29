// ============================================================
// Datos y textos del template — Aura Beauty
// Personaliza aquí todos los contenidos del sitio
// ============================================================

import type {
  NavLink,
  HeroStat,
  Service,
  GalleryImage,
  Testimonial,
  WorkHour,
  AboutStat,
  ContactCard,
  SocialButton,
  SalonConfig,
} from '@/types'

// ----- Configuración general del salón -------------------
export const salonConfig: SalonConfig = {
  name: 'Aura Beauty',
  tagline: 'Salón de Belleza & Spa',
  description: 'Tu espacio de lujo, cuidado y bienestar',
  phone: '+57 300 123 4567',
  // Número WhatsApp sin espacios ni símbolos: código de país + número
  whatsapp: '573001234567',
  whatsappMessage:
    'Hola! Vi su página web y me gustaría reservar una cita en Aura Beauty 💅',
  email: 'hola@aurabeauty.co',
  address: 'Calle 93 #15-47, Bogotá, Colombia',
  instagram: 'https://instagram.com/aurabeauty',
  instagramHandle: '@aurabeauty',
  facebook: 'https://facebook.com/aurabeauty',
  facebookHandle: '@aurabeauty',
  // Reemplaza con el embed URL de tu ubicación real en Google Maps
  mapsEmbed:
    'https://maps.google.com/maps?q=Bogota+Colombia+Zona+Rosa&t=&z=15&ie=UTF8&iwloc=&output=embed',
  mapsUrl: 'https://maps.app.goo.gl/placeholder',
}

// URL de WhatsApp con mensaje predefinido (usada en todos los botones)
export const whatsappUrl = `https://wa.me/${salonConfig.whatsapp}?text=${encodeURIComponent(salonConfig.whatsappMessage)}`

// ----- Navegación ----------------------------------------
export const navLinks: NavLink[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

// ----- Hero: estadísticas --------------------------------
export const heroStats: HeroStat[] = [
  { value: '+1,200', label: 'Clientas Satisfechas' },
  { value: '8+', label: 'Años de Experiencia' },
  { value: '4.9 ★', label: 'Calificación Promedio' },
]

// ----- Banner: frases del marquee ------------------------
export const bannerPhrases: string[] = [
  'BELLEZA & BIENESTAR',
  'LUJO PERSONALIZADO',
  'TU MEJOR VERSIÓN',
  'EXPERTOS EN BELLEZA',
  'CUIDADO PREMIUM',
  'EXPERIENCIA ÚNICA',
  'ELEGANCIA NATURAL',
]

// ----- Servicios -----------------------------------------
export const services: Service[] = [
  {
    id: 1,
    title: 'Corte & Peinado',
    description:
      'Diseño exclusivo adaptado a tu estilo personal con los mejores especialistas certificados.',
    price: 'Desde $80,000',
    image: 'https://picsum.photos/seed/aura-s1/800/1000',
    alt: 'Servicio de corte y peinado',
  },
  {
    id: 2,
    title: 'Coloración',
    description:
      'Técnicas avanzadas de coloración para transformar y realzar tu belleza con resultados duraderos.',
    price: 'Desde $150,000',
    image: 'https://picsum.photos/seed/aura-s2/800/1000',
    alt: 'Servicio de coloración capilar',
  },
  {
    id: 3,
    title: 'Tratamientos Faciales',
    description:
      'Rituales de belleza premium para revitalizar, nutrir y rejuvenecer tu piel con productos de lujo.',
    price: 'Desde $120,000',
    image: 'https://picsum.photos/seed/aura-s3/800/1000',
    alt: 'Tratamientos faciales spa',
  },
  {
    id: 4,
    title: 'Manicure & Pedicure',
    description:
      'Cuidado completo de uñas con productos de alta calidad y diseños exclusivos personalizados.',
    price: 'Desde $65,000',
    image: 'https://picsum.photos/seed/aura-s4/800/1000',
    alt: 'Servicio de manicure y pedicure',
  },
]

// ----- Galería -------------------------------------------
export const galleryImages: GalleryImage[] = [
  { id: 1, src: 'https://picsum.photos/seed/aura-g1/600/800', alt: 'Resultado de coloración' },
  { id: 2, src: 'https://picsum.photos/seed/aura-g2/600/480', alt: 'Peinado elegante' },
  { id: 3, src: 'https://picsum.photos/seed/aura-g3/600/720', alt: 'Tratamiento facial' },
  { id: 4, src: 'https://picsum.photos/seed/aura-g4/600/400', alt: 'Manicure artístico' },
  { id: 5, src: 'https://picsum.photos/seed/aura-g5/600/660', alt: 'Coloración balayage' },
  { id: 6, src: 'https://picsum.photos/seed/aura-g6/600/440', alt: 'Interior del salón' },
]

// ----- Testimonios ---------------------------------------
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Valentina Ramírez',
    role: 'Clienta frecuente',
    comment:
      'Increíble experiencia de principio a fin. El equipo de Aura Beauty transformó completamente mi cabello y me hizo sentir como una reina. ¡Definitivamente mi salón favorito en toda la ciudad!',
    stars: 5,
    image: 'https://picsum.photos/seed/aura-t1/200/200',
  },
  {
    id: 2,
    name: 'Carolina Mendoza',
    role: 'Clienta desde 2019',
    comment:
      'El mejor salón de la ciudad, sin duda alguna. La atención es completamente personalizada, los productos son de primera calidad y los resultados siempre superan mis expectativas.',
    stars: 5,
    image: 'https://picsum.photos/seed/aura-t2/200/200',
  },
  {
    id: 3,
    name: 'Isabella Torres',
    role: 'Clienta nueva',
    comment:
      'Mi primera visita fue una revelación. El ambiente es absolutamente lujoso y relajante. Vine por un corte y salí con el cabello más hermoso de mi vida. ¡Ya agendé mi segunda cita!',
    stars: 5,
    image: 'https://picsum.photos/seed/aura-t3/200/200',
  },
]

// ----- Horarios de atención ------------------------------
export const workHours: WorkHour[] = [
  { day: 'Lunes – Viernes', time: '9:00am – 7:00pm' },
  { day: 'Sábado', time: '9:00am – 5:00pm' },
  { day: 'Domingo', time: '10:00am – 3:00pm' },
]

// ----- Estadísticas de la sección "Sobre Nosotros" ------
export const aboutStats: AboutStat[] = [
  { value: '8+', label: 'Años de Experiencia' },
  { value: '+1,200', label: 'Clientas Satisfechas' },
  { value: '6', label: 'Especialistas Certificadas' },
]

// ----- Tarjetas de contacto ------------------------------
export const contactCards: ContactCard[] = [
  {
    icon: 'phone',
    title: 'Teléfono',
    lines: ['+57 300 123 4567', 'WhatsApp disponible'],
    href: 'tel:+573001234567',
  },
  {
    icon: 'email',
    title: 'Correo',
    lines: ['hola@aurabeauty.co', 'Respondemos en 24h'],
    href: 'mailto:hola@aurabeauty.co',
  },
  {
    icon: 'location',
    title: 'Ubicación',
    lines: ['Calle 93 #15-47', 'Bogotá, Colombia'],
    href: 'https://maps.app.goo.gl/placeholder',
  },
]

// ----- Botones flotantes de redes sociales ---------------
export const socialButtons: SocialButton[] = [
  {
    platform: 'whatsapp',
    label: 'WhatsApp',
    url: whatsappUrl,
    background: '#25D366',
  },
  {
    platform: 'instagram',
    label: 'Instagram',
    url: salonConfig.instagram,
    background: 'linear-gradient(135deg, #833AB4 0%, #E1306C 50%, #F56040 100%)',
  },
  {
    platform: 'facebook',
    label: 'Facebook',
    url: salonConfig.facebook,
    background: '#1877F2',
  },
  {
    platform: 'maps',
    label: 'Google Maps',
    url: salonConfig.mapsUrl,
    background: '#EA4335',
  },
]
