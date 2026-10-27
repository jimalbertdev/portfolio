export type Language = 'es' | 'en'

export type Localized<T> = {
  es: T
  en: T
}

export function pick<T>(value: Localized<T>, language: Language): T {
  return value[language]
}

const baseUrl = import.meta.env.BASE_URL

export const site = {
  name: 'Alberto Jiménez',
  initials: 'AJ',
  phone: '+58 424-900-8410',
  phoneHref: 'tel:+584249008410',
  whatsapp: 'https://wa.me/584249008410',
  linkedin: 'https://www.linkedin.com/in/jimalbertdev',
  github: 'https://github.com/jimalbertdev',
  cv: `${baseUrl}cv/Alberto-Jimenez-Fullstack-Senior.pdf`,
  domain: 'jimalbertdev.github.io/portfolio',
}

export const nav = {
  services: { es: 'Servicios', en: 'Services' },
  cases: { es: 'Casos', en: 'Work' },
  lab: { es: 'Lab', en: 'Lab' },
  about: { es: 'Sobre mí', en: 'About' },
  contact: { es: 'Contacto', en: 'Contact' },
  cta: { es: 'Hablemos', en: "Let's talk" },
}

export const hero = {
  availability: {
    es: 'Disponible para roles remotos',
    en: 'Available for remote roles',
  },
  title: {
    es: 'Fullstack senior que',
    en: 'Senior fullstack developer who',
  },
  titleAccent: {
    es: 'construye, despliega y mantiene.',
    en: 'builds, ships and maintains.',
  },
  description: {
    es: '8+ años construyendo SPAs con React y Vite, APIs en Python/PHP y bases de datos MySQL. También administro servidores Nginx/Apache y despliegues en producción. Un perfil fullstack + DevOps para equipos que necesitan resolver el ciclo completo.',
    en: '8+ years building React and Vite SPAs, Python/PHP APIs and MySQL databases. I also manage Nginx/Apache servers and production deployments. A fullstack + DevOps profile for teams that need the entire lifecycle covered.',
  },
  primaryCta: { es: 'Hablemos', en: "Let's talk" },
  secondaryCta: { es: 'Ver casos', en: 'View work' },
  tech: ['React', 'Vite', 'Python', 'PHP', 'MySQL', 'Nginx', 'Apache', 'AI'],
  terminal: {
    file: 'perfil.ts',
    facts: [
      {
        label: { es: 'Experiencia', en: 'Experience' },
        value: { es: '8+ años', en: '8+ years' },
      },
      {
        label: { es: 'Zona horaria', en: 'Timezone' },
        value: { es: 'UTC-4', en: 'UTC-4' },
      },
      {
        label: { es: 'Modalidad', en: 'Work mode' },
        value: { es: '100% remoto', en: '100% remote' },
      },
      {
        label: { es: 'Disponibilidad', en: 'Availability' },
        value: { es: 'Abierto a oportunidades', en: 'Open to opportunities' },
      },
    ],
  },
}

export const homeSections = {
  services: {
    eyebrow: { es: 'Servicios', en: 'Services' },
    title: { es: 'Lo que puedo resolver', en: 'What I can solve' },
    description: {
      es: 'Del frontend a la infraestructura. Si el problema cruza código, servidores y rendimiento, puedo quedarme con el ciclo completo.',
      en: 'From frontend to infrastructure. If the problem crosses code, servers and performance, I can own the full lifecycle.',
    },
  },
  cases: {
    eyebrow: { es: 'Casos', en: 'Selected work' },
    title: { es: 'Trabajo real, decisiones concretas', en: 'Real work, concrete decisions' },
    description: {
      es: 'Una muestra de proyectos anonimizados por NDA. Cada caso describe el problema, la arquitectura y el impacto sin exponer información confidencial.',
      en: 'A sample of NDA-anonymized projects. Each case describes the problem, architecture and impact without exposing confidential information.',
    },
    note: {
      es: 'Los nombres de clientes y el código están protegidos por NDA.',
      en: 'Client names and code are protected by NDA.',
    },
    viewAll: {
      es: 'Ver todos los casos',
      en: 'View all case studies',
    },
  },
  lab: {
    eyebrow: { es: 'Laboratorio', en: 'Lab' },
    title: { es: 'Proyectos propios', en: 'Own projects' },
    description: {
      es: 'Productos, módulos y prototipos que estoy construyendo: algunos ya están en producción y otros siguen en desarrollo.',
      en: 'Products, modules and prototypes I am building: some are already in production, others are still in development.',
    },
  },
  process: {
    eyebrow: { es: 'Proceso', en: 'Process' },
    title: { es: 'Cómo trabajo', en: 'How I work' },
    description: {
      es: 'Un proceso simple para reducir riesgos y mantener al equipo informado, incluso en proyectos remotos.',
      en: 'A simple process to reduce risk and keep the team informed, even on remote projects.',
    },
  },
  stack: {
    eyebrow: { es: 'Stack', en: 'Stack' },
    title: { es: 'Herramientas que uso a diario', en: 'Tools I use every day' },
    description: {
      es: 'Tecnologías con las que he trabajado en producción, no solo en tutorials.',
      en: 'Technologies I have used in production, not just in tutorials.',
    },
  },
  about: {
    eyebrow: { es: 'Sobre mí', en: 'About' },
    title: { es: 'Fullstack, pero también de servidores', en: 'Fullstack, but also a server person' },
  },
  principles: {
    eyebrow: { es: 'Principios', en: 'Principles' },
    title: { es: 'Cómo me gusta trabajar', en: 'How I like to work' },
    description: {
      es: 'Menos ruido, más entregas verificables. Estas son las reglas que aplico en cada proyecto.',
      en: 'Less noise, more verifiable delivery. These are the rules I apply on every project.',
    },
  },
}

export const stats = [
  {
    value: { es: '8+', en: '8+' },
    label: { es: 'años construyendo software', en: 'years building software' },
  },
  {
    value: { es: '3', en: '3' },
    label: { es: 'países con clientes remotos', en: 'countries with remote clients' },
  },
  {
    value: { es: 'Fullstack', en: 'Fullstack' },
    label: { es: '+ DevOps + IA', en: '+ DevOps + AI' },
  },
  {
    value: { es: '100%', en: '100%' },
    label: { es: 'remoto y async-friendly', en: 'remote and async-friendly' },
  },
]

export type ServiceIcon = 'code' | 'gauge' | 'server' | 'sparkles'

export type Service = {
  id: string
  icon: ServiceIcon
  title: Localized<string>
  description: Localized<string>
  bullets: Localized<string[]>
}

export const services: Service[] = [
  {
    id: 'fullstack',
    icon: 'code',
    title: { es: 'Desarrollo fullstack', en: 'Fullstack development' },
    description: {
      es: 'SPAs con React y Vite, APIs en Python/PHP y bases de datos MySQL. Del diseño de arquitectura al código en producción.',
      en: 'React and Vite SPAs, Python/PHP APIs and MySQL databases. From architecture design to production code.',
    },
    bullets: {
      es: ['Arquitectura frontend y backend', 'APIs REST y autenticación', 'Refactorización de código heredado'],
      en: ['Frontend and backend architecture', 'REST APIs and authentication', 'Legacy code refactoring'],
    },
  },
  {
    id: 'performance',
    icon: 'gauge',
    title: { es: 'Performance y Core Web Vitals', en: 'Performance and Core Web Vitals' },
    description: {
      es: 'Auditorías y optimización de velocidad para sitios y SPAs que necesitan cargar rápido y convertir mejor.',
      en: 'Speed audits and optimization for websites and SPAs that need to load fast and convert better.',
    },
    bullets: {
      es: ['Migración a Vite', 'Lazy loading y code splitting', 'Automatización con PageSpeed API'],
      en: ['Vite migration', 'Lazy loading and code splitting', 'PageSpeed API automation'],
    },
  },
  {
    id: 'devops',
    icon: 'server',
    title: { es: 'DevOps y servidores', en: 'DevOps and servers' },
    description: {
      es: 'Infraestructura estable para desplegar y operar en producción, sin depender de un equipo externo.',
      en: 'Stable infrastructure to deploy and operate in production, without relying on an external team.',
    },
    bullets: {
      es: ['Nginx y Apache', 'Migraciones y CI/CD', 'Seguridad, tuning y alta disponibilidad'],
      en: ['Nginx and Apache', 'Migrations and CI/CD', 'Security, tuning and high availability'],
    },
  },
  {
    id: 'ai',
    icon: 'sparkles',
    title: { es: 'Integración de IA', en: 'AI integration' },
    description: {
      es: 'Módulos de IA aplicados al negocio, con autenticación, control de costos y protección de datos.',
      en: 'Business-focused AI modules with authentication, cost control and data protection.',
    },
    bullets: {
      es: ['APIs de IA', 'Flujos automatizados', 'Auth y protección de datos'],
      en: ['AI APIs', 'Automated workflows', 'Auth and data protection'],
    },
  },
]

export type CaseStudy = {
  slug: string
  title: Localized<string>
  company: Localized<string>
  period: Localized<string>
  summary: Localized<string>
  challenge: Localized<string>
  solution: Localized<string>
  results: Localized<string[]>
  stack: string[]
  role: Localized<string>
  tags: Localized<string[]>
  highlight: Localized<string>
  status?: Localized<string>
  link?: string
}

export const cases: CaseStudy[] = [
  {
    slug: 'sigaf-erp',
    title: {
      es: 'SIGAF — ERP administrativo-financiero open source',
      en: 'SIGAF — open-source administrative and financial ERP',
    },
    company: {
      es: 'Venezuela',
      en: 'Venezuela',
    },
    period: { es: '2026 — Actualidad', en: '2026 — Present' },
    summary: {
      es: 'Software libre de 13 módulos para centralizar presupuesto, compras, tesorería, contabilidad, inventario, nómina y recursos humanos. Implementación en curso en CORDAMI.',
      en: 'Free software with 13 modules centralizing budget, procurement, treasury, accounting, inventory, payroll and HR. Implementation underway at CORDAMI.',
    },
    challenge: {
      es: 'Los procesos administrativos y financieros del sector público suelen estar fragmentados entre hojas de cálculo, sistemas heredados y controles manuales. La meta era construir una base auditable, modular y reutilizable por otras instituciones.',
      en: 'Public-sector administrative and financial processes are often fragmented across spreadsheets, legacy systems and manual controls. The goal was to build an auditable, modular foundation that other institutions could reuse.',
    },
    solution: {
      es: 'Arquitectura Laravel 12 + React 19 sobre PostgreSQL 16 y Redis 7, con Keycloak para identidad, API documentada con OpenAPI y despliegue en Docker. Módulos: núcleo y auditoría, catálogos, formulación y ejecución presupuestaria, SEP, compras, cuentas por pagar, tesorería, contabilidad, activos, inventario, producción, nómina y RRHH. El proyecto se está preparando como software libre para construir comunidad.',
      en: 'Laravel 12 + React 19 architecture on PostgreSQL 16 and Redis 7, with Keycloak for identity, an OpenAPI-documented API and Docker deployment. Modules: core and audit, master data, budget formulation and execution, SEP, procurement, accounts payable, treasury, accounting, fixed assets, inventory, production, payroll and HR. The project is being prepared as free software to build a community.',
    },
    results: {
      es: [
        'Base modular con 13 módulos administrativos y financieros.',
        'Implementación en curso en CORDAMI, con presupuesto, compras, CxP, tesorería, contabilidad, activos, inventario, nómina y RRHH.',
        'Arquitectura auditable y reutilizable, preparada para abrirse como software libre.',
      ],
      en: [
        'Modular foundation with 13 administrative and financial modules.',
        'Implementation underway at CORDAMI, covering budget, procurement, AP, treasury, accounting, assets, inventory, payroll and HR.',
        'Auditable, reusable architecture prepared to be released as free software.',
      ],
    },
    stack: [
      'Laravel 12',
      'PHP 8.4',
      'React 19',
      'TypeScript',
      'PostgreSQL 16',
      'Redis 7',
      'Keycloak',
      'Tailwind CSS',
      'Docker',
      'OpenAPI',
    ],
    role: {
      es: 'Arquitectura fullstack, backend Laravel, frontend React, integración de identidad y DevOps.',
      en: 'Fullstack architecture, Laravel backend, React frontend, identity integration and DevOps.',
    },
    tags: {
      es: ['Laravel', 'React', 'PostgreSQL', 'ERP'],
      en: ['Laravel', 'React', 'PostgreSQL', 'ERP'],
    },
    highlight: { es: 'ERP + 13 módulos', en: 'ERP + 13 modules' },
    status: { es: 'Open source (en preparación)', en: 'Open source (in progress)' },
  },
  {
    slug: 'cordami-offline',
    title: {
      es: 'Registro agrícola offline-first con mapas y carnetización',
      en: 'Offline-first agricultural registry with maps and digital cards',
    },
    company: {
      es: 'CORDAMI · Venezuela',
      en: 'CORDAMI · Venezuela',
    },
    period: { es: '2026 — Actualidad', en: '2026 — Present' },
    summary: {
      es: 'PWA en producción con 4,000 productores registrados (18,000 estimados): censo offline, datos geoespaciales, carnetización y verificación pública por QR.',
      en: 'Production PWA with 4,000 registered producers (18,000 estimated): offline census, geospatial data, digital cards and public QR verification.',
    },
    challenge: {
      es: 'El censo debía funcionar en campo, sin internet, capturando polígonos de predios, fotos, datos productivos y documentación. La información necesitaba sincronizarse sin duplicados al recuperar señal.',
      en: 'The census had to work in the field without internet, capturing farm polygons, photos, production data and documentation. Information needed to sync without duplicates once connectivity returned.',
    },
    solution: {
      es: 'Reconstrucción sobre Laravel 13 + React 19 + PostgreSQL/PostGIS. PWA con Dexie/IndexedDB, cola de sincronización idempotente por UUID, mapas Leaflet + Geoman, GPS con precisión, caché de tiles offline, carnet digital con QR y exportaciones PDF/XLSX/CSV.',
      en: 'Rebuilt on Laravel 13 + React 19 + PostgreSQL/PostGIS. PWA with Dexie/IndexedDB, an idempotent UUID sync queue, Leaflet + Geoman maps, precision GPS, offline tile caching, QR digital cards and PDF/XLSX/CSV exports.',
    },
    results: {
      es: [
        '4,000 productores registrados a la fecha, con 18,000 estimados.',
        'Censo de 8 pasos con mapa satelital, polígono del predio y operación offline.',
        'Carnet digital con QR, verificación pública y exportación PDF/XLSX/CSV.',
      ],
      en: [
        '4,000 producers registered to date, with 18,000 estimated.',
        '8-step census with satellite map, farm polygon and offline operation.',
        'Digital card with QR, public verification and PDF/XLSX/CSV export.',
      ],
    },
    stack: [
      'Laravel 13',
      'PHP 8.4',
      'React 19',
      'TypeScript',
      'Vite',
      'PostgreSQL 16',
      'PostGIS',
      'Dexie',
      'IndexedDB',
      'Leaflet',
      'PWA',
      'Docker',
    ],
    role: {
      es: 'Arquitectura offline-first, frontend React/PWA, API Laravel, PostGIS y despliegue.',
      en: 'Offline-first architecture, React/PWA frontend, Laravel API, PostGIS and deployment.',
    },
    tags: {
      es: ['PWA', 'Offline-first', 'PostGIS', 'React'],
      en: ['PWA', 'Offline-first', 'PostGIS', 'React'],
    },
    highlight: { es: 'Offline-first + PostGIS', en: 'Offline-first + PostGIS' },
    status: { es: 'En producción', en: 'In production' },
    link: 'https://cordami.fii.gob.ve/',
  },
  {
    slug: 'vacanfly-hospitality',
    title: {
      es: 'Check-in para Booking y Airbnb con OCR de documentos',
      en: 'Booking and Airbnb check-in with document OCR',
    },
    company: {
      es: 'Cliente de hospitalidad · España',
      en: 'Hospitality client · Spain',
    },
    period: { es: '2025 — Actualidad', en: '2025 — Present' },
    summary: {
      es: 'Plataforma para digitalizar el check-in de huéspedes de Booking y Airbnb, el registro de viajeros y la operación de alojamientos turísticos, con OCR de documentos venezolanos, cerraduras inteligentes y multiidioma.',
      en: 'Platform to digitize Booking and Airbnb guest check-in, traveler registration and vacation rental operations, with Venezuelan document OCR, smart locks and multiple languages.',
    },
    challenge: {
      es: 'El check-in requería registrar varios huéspedes por reserva, validar documentos internacionales, leer documentos de identidad venezolanos, cumplir el registro policial de viajeros, firmar contratos y coordinar accesos al alojamiento.',
      en: 'Check-in required registering multiple guests per booking, validating international documents, reading Venezuelan identity documents, complying with traveler registration rules, signing contracts and coordinating property access.',
    },
    solution: {
      es: 'PWA React + TypeScript con API PHP/MySQL. Validaciones condicionales para DNI/NIE/pasaporte, OCR de documentos venezolanos con Gemini, firma digital y contratos PDF con mPDF, panel de huésped y propietario, control de cerraduras inteligentes, guía local e interfaz en ES/EN/CA/FR/DE/NL.',
      en: 'React + TypeScript PWA with a PHP/MySQL API. Conditional DNI/NIE/passport validation, Venezuelan document OCR with Gemini, digital signatures and PDF contracts with mPDF, guest and owner dashboards, smart lock control, local guide and ES/EN/CA/FR/DE/NL interfaces.',
    },
    results: {
      es: [
        'Check-in digital multi-huésped para reservas de Booking y Airbnb.',
        'OCR de documentos de identidad venezolanos integrado en el registro.',
        'Contratos PDF, registro de viajeros, cerraduras inteligentes y seis idiomas.',
      ],
      en: [
        'Multi-guest digital check-in for Booking and Airbnb bookings.',
        'Venezuelan identity document OCR integrated into registration.',
        'PDF contracts, traveler registration, smart locks and six languages.',
      ],
    },
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'shadcn/ui',
      'React Hook Form',
      'Zod',
      'PHP 8',
      'MySQL 8',
      'Apache',
      'mPDF',
      'PWA',
      'OCR',
      'Gemini API',
    ],
    role: {
      es: 'Desarrollo fullstack, API PHP, frontend React, generación de PDFs y control de acceso.',
      en: 'Fullstack development, PHP API, React frontend, PDF generation and access control.',
    },
    tags: {
      es: ['React', 'PHP', 'PWA', 'Hospitality'],
      en: ['React', 'PHP', 'PWA', 'Hospitality'],
    },
    highlight: { es: 'PWA + OCR', en: 'PWA + OCR' },
  },
  {
    slug: 'wushutech-pro',
    title: {
      es: 'WushuTech Pro — competencias y evaluación con IA',
      en: 'WushuTech Pro — competition and AI-assisted evaluation',
    },
    company: {
      es: 'Federación Venezolana de Wushu',
      en: 'Venezuelan Wushu Federation',
    },
    period: { es: '2025 — Actualidad', en: '2025 — Present' },
    summary: {
      es: 'Plataforma en producción para gestionar competencias, evaluar Taolu y Sanda y asistir a jueces con inteligencia artificial.',
      en: 'Production platform to manage competitions, evaluate Taolu and Sanda, and assist judges with artificial intelligence.',
    },
    challenge: {
      es: 'La federación necesitaba digitalizar la gestión de competencias y el registro de evaluaciones de Taolu y Sanda, con una experiencia simple para jueces y organización.',
      en: 'The federation needed to digitize competition management and Taolu/Sanda evaluation records, with a simple experience for judges and organizers.',
    },
    solution: {
      es: 'Aplicación React 19 + TypeScript + Vite con React Router y Gemini API. Cubre gestión de competencias, evaluación de Taolu y Sanda y asistencia con IA. Está desplegada en producción en fevewushu.com.',
      en: 'React 19 + TypeScript + Vite application with React Router and the Gemini API. It covers competition management, Taolu and Sanda evaluation, and AI assistance. It is deployed in production at fevewushu.com.',
    },
    results: {
      es: [
        'En producción para la Federación Venezolana de Wushu.',
        'Evaluación de Taolu y Sanda y gestión de competencias.',
        'Asistencia con IA integrada en el flujo de evaluación.',
      ],
      en: [
        'In production for the Venezuelan Wushu Federation.',
        'Taolu and Sanda evaluation and competition management.',
        'AI assistance integrated into the evaluation workflow.',
      ],
    },
    stack: ['React 19', 'TypeScript', 'Vite', 'React Router', 'Gemini API', 'Lucide'],
    role: {
      es: 'Desarrollo fullstack, producto, integración de IA y despliegue.',
      en: 'Fullstack development, product, AI integration and deployment.',
    },
    tags: {
      es: ['React', 'IA', 'Deportes'],
      en: ['React', 'AI', 'Sports'],
    },
    highlight: { es: 'Producción + IA', en: 'Production + AI' },
    status: { es: 'En producción', en: 'In production' },
    link: 'https://fevewushu.com/',
  },
  {
    slug: 'quedate',
    title: {
      es: 'Quedate — plataforma de alojamiento temporal',
      en: 'Quedate — short-term rental platform',
    },
    company: {
      es: 'Quedate · Venezuela',
      en: 'Quedate · Venezuela',
    },
    period: { es: '2025 — Actualidad', en: '2025 — Present' },
    summary: {
      es: 'Marketplace venezolano de alojamiento temporal en producción: 5,000 reservas en lo que va de año y 120+ alojamientos. Una alternativa local a Booking y Airbnb.',
      en: 'Venezuelan short-term rental marketplace in production: 5,000 bookings year-to-date and 120+ properties. A local alternative to Booking and Airbnb.',
    },
    challenge: {
      es: 'Conectar huéspedes y anfitriones con confianza, verificación de identidad, pagos y gestión de reservas en un mercado local.',
      en: 'Connect guests and hosts with trust, identity verification, payments and booking management in a local market.',
    },
    solution: {
      es: 'Aplicación React 19 + TypeScript con backend PHP y servicios de IA. Incluye mapas, mensajería, KYC, billetera digital, recomendaciones con Gemini y visuales 3D. Está desplegada en producción en quedate.net.',
      en: 'React 19 + TypeScript application with a PHP backend and AI services. It includes maps, messaging, KYC, a digital wallet, Gemini-powered recommendations and 3D visuals. It is deployed in production at quedate.net.',
    },
    results: {
      es: [
        '5,000 reservas en lo que va de año y 120+ alojamientos en producción.',
        'Alternativa venezolana a Booking y Airbnb, desplegada en quedate.net.',
        'Reservas, KYC, billetera digital, mensajería y recomendaciones con Gemini.',
      ],
      en: [
        '5,000 bookings year-to-date and 120+ properties in production.',
        'Venezuelan alternative to Booking and Airbnb, deployed at quedate.net.',
        'Bookings, KYC, digital wallet, messaging and Gemini-powered recommendations.',
      ],
    },
    stack: ['React 19', 'TypeScript', 'Vite', 'PHP', 'REST API', 'Gemini API', 'Three.js'],
    role: {
      es: 'Desarrollo fullstack, producto, integración de IA y despliegue.',
      en: 'Fullstack development, product, AI integration and deployment.',
    },
    tags: {
      es: ['React', 'Marketplace', 'KYC'],
      en: ['React', 'Marketplace', 'KYC'],
    },
    highlight: { es: 'Reservas + KYC', en: 'Bookings + KYC' },
    status: { es: 'En producción', en: 'In production' },
    link: 'https://quedate.net',
  },
  {
    slug: 'saas-internacional',
    title: {
      es: 'SaaS internacional: SPAs rápidas y backend seguro',
      en: 'International SaaS: fast SPAs and a secure backend',
    },
    company: {
      es: 'Cliente SaaS · España',
      en: 'SaaS client · Spain',
    },
    period: { es: '2021 — Actualidad', en: '2021 — Present' },
    summary: {
      es: 'Arquitectura y desarrollo fullstack para aplicaciones web y plataformas SaaS internacionales, con foco en rendimiento, autenticación e integración de IA.',
      en: 'Fullstack architecture and development for international web applications and SaaS platforms, focused on performance, authentication and AI integration.',
    },
    challenge: {
      es: 'Las aplicaciones necesitaban SPAs rápidas con manejo de estado complejo, APIs eficientes en Python y PHP, autenticación segura y despliegues estables en servidores propios.',
      en: 'The applications needed fast SPAs with complex state management, efficient Python and PHP APIs, secure authentication and stable deployments on self-managed servers.',
    },
    solution: {
      es: 'Diseñé y desarrollé SPAs con React y Vite, APIs REST en Python/PHP sobre MySQL, módulos de IA aplicados al negocio y flujos de autenticación robustos. Además configuré Nginx/Apache y optimicé los despliegues y el CI/CD.',
      en: 'I designed and built React and Vite SPAs, Python/PHP REST APIs on MySQL, business-focused AI modules and robust authentication flows. I also configured Nginx/Apache and optimized deployments and CI/CD.',
    },
    results: {
      es: [
        'Renderizado y manejo de estado optimizados en SPAs.',
        'APIs REST en Python y PHP con MySQL.',
        'Autenticación robusta e integración de IA en producción.',
      ],
      en: [
        'Optimized rendering and state management across SPAs.',
        'Python and PHP REST APIs backed by MySQL.',
        'Robust authentication and AI integration in production.',
      ],
    },
    stack: ['React', 'Vite', 'Python', 'PHP', 'MySQL', 'Nginx', 'Apache', 'REST APIs', 'AI integration'],
    role: {
      es: 'Diseño y desarrollo fullstack, integración de IA y DevOps.',
      en: 'Fullstack design and development, AI integration and DevOps.',
    },
    tags: { es: ['React', 'Vite', 'Python', 'IA'], en: ['React', 'Vite', 'Python', 'AI'] },
    highlight: { es: 'SPAs + IA', en: 'SPAs + AI' },
  },
  {
    slug: 'auditoria-performance',
    title: {
      es: 'Auditoría de performance a escala',
      en: 'Performance auditing at scale',
    },
    company: {
      es: 'Agencia de contenido · Canadá',
      en: 'Content agency · Canada',
    },
    period: { es: '2019 — 2020', en: '2019 — 2020' },
    summary: {
      es: 'Herramienta interna para auditar velocidad y Core Web Vitals con la API de Google PageSpeed, más migración crítica de servidores.',
      en: 'Internal tool to audit speed and Core Web Vitals with the Google PageSpeed API, plus a critical server migration.',
    },
    challenge: {
      es: 'La agencia necesitaba auditar el rendimiento de muchos sitios sin hacerlo manualmente y migrar su infraestructura para mejorar latencia y redundancia.',
      en: 'The agency needed to audit many sites without manual work and migrate its infrastructure to improve latency and redundancy.',
    },
    solution: {
      es: 'Construí una aplicación web integrada con la API de Google PageSpeed para automatizar auditorías de carga y Core Web Vitals en tiempo real. También lideré la configuración y migración de servidores entre proveedores de infraestructura.',
      en: 'I built a web application integrated with the Google PageSpeed API to automate load and Core Web Vitals audits in real time. I also led server configuration and migration across infrastructure providers.',
    },
    results: {
      es: [
        'Auditorías automatizadas de velocidad y Core Web Vitals.',
        'Migración de servidores a proveedores con mejor latencia y redundancia.',
        'Estándares de entrega técnica más consistentes para la agencia.',
      ],
      en: [
        'Automated speed and Core Web Vitals audits.',
        'Server migration to providers with better latency and redundancy.',
        'More consistent technical delivery standards for the agency.',
      ],
    },
    stack: ['PHP', 'Google PageSpeed API', 'Core Web Vitals', 'Server migration', 'WordPress', 'Magento', 'Shopify'],
    role: {
      es: 'Desarrollo de la herramienta, automatización y migración de infraestructura.',
      en: 'Tool development, automation and infrastructure migration.',
    },
    tags: { es: ['Performance', 'PageSpeed API', 'DevOps'], en: ['Performance', 'PageSpeed API', 'DevOps'] },
    highlight: { es: 'Core Web Vitals', en: 'Core Web Vitals' },
  },
  {
    slug: 'ecommerce-cms',
    title: {
      es: 'E-commerce y CMS a medida',
      en: 'Custom e-commerce and CMS',
    },
    company: {
      es: 'Agencias web · Canadá y Perú',
      en: 'Web agencies · Canada and Peru',
    },
    period: { es: '2018 — 2021', en: '2018 — 2021' },
    summary: {
      es: 'Plugins PHP, arquitectura CMS/e-commerce y administración de servidores para WordPress, Shopify, Magento y PrestaShop.',
      en: 'PHP plugins, CMS/e-commerce architecture and server administration for WordPress, Shopify, Magento and PrestaShop.',
    },
    challenge: {
      es: 'Varios clientes necesitaban funcionalidades que las herramientas comerciales no cubrían: lógica de negocio compleja, pasarelas de pago y sitios de alto tráfico.',
      en: 'Several clients needed features commercial tools did not cover: complex business logic, payment gateways and high-traffic sites.',
    },
    solution: {
      es: 'Desarrollé plugins personalizados en PHP, arquitecturas de información limpias y flujos de conversión con pasarelas de pago. También gestioné hosting, servidores y mantenimiento para el portafolio de clientes.',
      en: 'I built custom PHP plugins, clean information architectures and conversion flows with payment gateways. I also managed hosting, servers and maintenance for the client portfolio.',
    },
    results: {
      es: [
        'Plugins PHP a medida para lógica de negocio compleja.',
        'Integración de pasarelas de pago y flujos de conversión.',
        'Administración de infraestructura y hosting para clientes.',
      ],
      en: [
        'Custom PHP plugins for complex business logic.',
        'Payment gateway integration and conversion flows.',
        'Infrastructure and hosting management for clients.',
      ],
    },
    stack: ['PHP', 'WordPress', 'WooCommerce', 'Shopify', 'Magento', 'PrestaShop', 'MySQL', 'Linux'],
    role: {
      es: 'Desarrollo fullstack, integración de pagos y administración de servidores.',
      en: 'Fullstack development, payment integration and server administration.',
    },
    tags: { es: ['PHP', 'E-commerce', 'CMS'], en: ['PHP', 'E-commerce', 'CMS'] },
    highlight: { es: 'E-commerce + CMS', en: 'E-commerce + CMS' },
  },
]

export type LabProject = {
  name: Localized<string>
  description: Localized<string>
  stack: string[]
  tags: Localized<string[]>
  status: Localized<string>
  statusTone: 'production' | 'development'
  highlight: Localized<string>
  link?: string
}

export const labProjects: LabProject[] = [
  {
    name: {
      es: 'Octupus Finance — trading desk multiagente',
      en: 'Octupus Finance — multi-agent trading desk',
    },
    description: {
      es: 'Desk sistemático de tendencia sobre Hyperliquid con gobernanza auditable: ledger inmutable SHA-256, límites de riesgo duros, kill switch y centro de mando web. Python/FastAPI, PostgreSQL, Redis, un ejecutor en Rust y Docker.',
      en: 'Systematic trend desk on Hyperliquid with auditable governance: immutable SHA-256 ledger, hard risk limits, kill switch and a web command center. Python/FastAPI, PostgreSQL, Redis, a Rust executor and Docker.',
    },
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Rust', 'React', 'Docker'],
    tags: {
      es: ['Fintech', 'IA', 'Riesgo'],
      en: ['Fintech', 'AI', 'Risk'],
    },
    status: { es: 'En desarrollo', en: 'In development' },
    statusTone: 'development',
    highlight: { es: 'Multiagente + ledger', en: 'Multi-agent + ledger' },
  },
  {
    name: {
      es: 'Punto Verde AI — marketplace inteligente',
      en: 'Punto Verde AI — intelligent marketplace',
    },
    description: {
      es: 'Marketplace hiperlocal con IA para Maturín: catálogo flexible, geolocalización con PostGIS, búsqueda en lenguaje natural, panel de vendedor y suscripciones. Laravel 11, Next.js 14, PostgreSQL/PostGIS, MongoDB y un scraper en Python.',
      en: 'Hyperlocal AI marketplace for Maturín: flexible catalog, PostGIS geolocation, natural-language search, seller dashboard and subscriptions. Laravel 11, Next.js 14, PostgreSQL/PostGIS, MongoDB and a Python scraper.',
    },
    stack: ['Laravel', 'Next.js', 'PostgreSQL', 'PostGIS', 'MongoDB', 'Python', 'Docker'],
    tags: {
      es: ['IA', 'Marketplace', 'Geo'],
      en: ['AI', 'Marketplace', 'Geo'],
    },
    status: { es: 'En desarrollo', en: 'In development' },
    statusTone: 'development',
    highlight: { es: 'IA + geo', en: 'AI + geo' },
  },
  {
    name: {
      es: 'FlashLoans — arbitraje atómico',
      en: 'FlashLoans — atomic arbitrage',
    },
    description: {
      es: 'Bot de arbitraje atómico en Arbitrum con flash loans de Aave V3 y liquidez de Uniswap V3/Sushiswap. Python/Web3, Solidity, FastAPI, PostgreSQL y Redis, con observabilidad y dashboard.',
      en: 'Atomic arbitrage bot on Arbitrum with Aave V3 flash loans and Uniswap V3/Sushiswap liquidity. Python/Web3, Solidity, FastAPI, PostgreSQL and Redis, with observability and a dashboard.',
    },
    stack: ['Python', 'Web3.py', 'Solidity', 'Aave V3', 'Uniswap V3', 'PostgreSQL', 'FastAPI', 'Redis'],
    tags: {
      es: ['DeFi', 'Arbitraje', 'Web3'],
      en: ['DeFi', 'Arbitrage', 'Web3'],
    },
    status: { es: 'En desarrollo', en: 'In development' },
    statusTone: 'development',
    highlight: { es: 'Flash loans + Arbitrum', en: 'Flash loans + Arbitrum' },
  },
  {
    name: {
      es: 'ID Scanner IA — OCR de documentos',
      en: 'ID Scanner AI — document OCR',
    },
    description: {
      es: 'OCR para extraer datos de documentos de identidad venezolanos con Gemini 2.5 Flash. Se usa en el check-in de huéspedes para reducir la captura manual y acelerar el registro.',
      en: 'OCR to extract data from Venezuelan identity documents with Gemini 2.5 Flash. Used in guest check-in to reduce manual entry and speed up registration.',
    },
    stack: ['React', 'TypeScript', 'Vite', 'Gemini API', 'OCR'],
    tags: {
      es: ['OCR', 'IA', 'Check-in'],
      en: ['OCR', 'AI', 'Check-in'],
    },
    status: { es: 'En producción', en: 'In production' },
    statusTone: 'production',
    highlight: { es: 'OCR + Gemini', en: 'OCR + Gemini' },
  },
]

export const processSteps = [
  {
    number: '01',
    title: { es: 'Diagnóstico', en: 'Discovery' },
    description: {
      es: 'Entiendo el problema, el stack y las restricciones antes de proponer una solución.',
      en: 'I understand the problem, the stack and the constraints before proposing a solution.',
    },
  },
  {
    number: '02',
    title: { es: 'Propuesta', en: 'Proposal' },
    description: {
      es: 'Alcance, hitos y riesgos claros. Sin sorpresas ni promesas que no se puedan cumplir.',
      en: 'Clear scope, milestones and risks. No surprises and no promises I cannot keep.',
    },
  },
  {
    number: '03',
    title: { es: 'Construcción', en: 'Build' },
    description: {
      es: 'Entregas pequeñas, código revisable y comunicación async con el equipo.',
      en: 'Small deliveries, reviewable code and async communication with the team.',
    },
  },
  {
    number: '04',
    title: { es: 'Despliegue y soporte', en: 'Deploy and support' },
    description: {
      es: 'Producción, monitoreo y documentación para que el equipo pueda seguir sin depender de mí.',
      en: 'Production, monitoring and documentation so the team can keep going without depending on me.',
    },
  },
]

export const stackGroups = [
  {
    label: { es: 'Frontend', en: 'Frontend' },
    items: ['React', 'Vite', 'JavaScript moderno', 'SPAs', 'HTML/CSS'],
  },
  {
    label: { es: 'Backend', en: 'Backend' },
    items: ['Python', 'PHP', 'Yii2', 'REST APIs', 'MySQL'],
  },
  {
    label: { es: 'DevOps', en: 'DevOps' },
    items: ['Nginx', 'Apache', 'Linux', 'CI/CD', 'Git'],
  },
  {
    label: { es: 'IA y automatización', en: 'AI and automation' },
    items: ['Integración de IA', 'APIs de IA', 'Automatización', 'Auth seguro'],
  },
  {
    label: { es: 'CMS y e-commerce', en: 'CMS and e-commerce' },
    items: ['WordPress', 'WooCommerce', 'Shopify', 'Magento', 'PrestaShop'],
  },
  {
    label: { es: 'Búsqueda y rendimiento', en: 'Search and performance' },
    items: ['SEO técnico', 'Core Web Vitals', 'PageSpeed API', 'Optimización web'],
  },
]

export const principles = [
  {
    title: { es: 'Comunicación clara', en: 'Clear communication' },
    description: {
      es: 'Updates cortos, decisiones documentadas y feedback temprano. Menos reuniones, más contexto.',
      en: 'Short updates, documented decisions and early feedback. Fewer meetings, more context.',
    },
  },
  {
    title: { es: 'Ownership', en: 'Ownership' },
    description: {
      es: 'Del problema al deploy. Si algo falla en producción, me involucro hasta resolverlo.',
      en: 'From problem to deploy. If something fails in production, I stay involved until it is fixed.',
    },
  },
  {
    title: { es: 'Código mantenible', en: 'Maintainable code' },
    description: {
      es: 'Legibilidad, tests donde aportan y documentación útil para la siguiente persona.',
      en: 'Readability, tests where they add value and useful documentation for the next person.',
    },
  },
  {
    title: { es: 'Velocidad con criterio', en: 'Speed with judgment' },
    description: {
      es: 'Entregar rápido sin sacrificar seguridad ni estabilidad. Medir antes de optimizar.',
      en: 'Ship fast without sacrificing security or stability. Measure before optimizing.',
    },
  },
]

export const about = {
  paragraphs: {
    es: [
      'Soy Alberto Jiménez, desarrollador fullstack senior con más de 8 años construyendo aplicaciones web y plataformas SaaS. Trabajo con React y Vite en el frontend, y Python/PHP con MySQL en el backend.',
      'También administro servidores Nginx/Apache y despliegues. Esa combinación me permite resolver el ciclo completo: desde la interfaz hasta la infraestructura.',
      'He colaborado de forma remota con equipos y clientes en Canadá, España y Perú, incluyendo proyectos bajo NDA. Me enfoco en performance, estabilidad y código que el equipo pueda mantener.',
    ],
    en: [
      'I am Alberto Jiménez, a senior fullstack developer with 8+ years building web applications and SaaS platforms. I work with React and Vite on the frontend, and Python/PHP with MySQL on the backend.',
      'I also manage Nginx/Apache servers and deployments. That combination lets me cover the full lifecycle: from the interface to the infrastructure.',
      'I have worked remotely with teams and clients in Canada, Spain and Peru, including NDA-protected projects. I focus on performance, stability and code the team can maintain.',
    ],
  },
  facts: [
    {
      label: { es: 'Ubicación', en: 'Location' },
      value: { es: 'Venezuela · UTC-4', en: 'Venezuela · UTC-4' },
    },
    {
      label: { es: 'Modalidad', en: 'Work mode' },
      value: { es: 'Remoto · full-time o freelance', en: 'Remote · full-time or freelance' },
    },
    {
      label: { es: 'Idiomas', en: 'Languages' },
      value: {
        es: 'Español nativo · Inglés técnico B1 (speaking en mejora)',
        en: 'Native Spanish · Technical English B1 (speaking in progress)',
      },
    },
    {
      label: { es: 'Enfoque', en: 'Focus' },
      value: { es: 'Fullstack + DevOps + IA', en: 'Fullstack + DevOps + AI' },
    },
  ],
}

export const contact = {
  eyebrow: { es: 'Contacto', en: 'Contact' },
  title: { es: '¿Construimos algo que funcione?', en: 'Shall we build something that works?' },
  description: {
    es: 'Cuéntame por WhatsApp qué necesitas: un rol full-time, un proyecto freelance o una auditoría técnica. Respondo en menos de 24 horas.',
    en: 'Tell me on WhatsApp what you need: a full-time role, a freelance project or a technical audit. I reply within 24 hours.',
  },
  whatsappLabel: { es: 'WhatsApp', en: 'WhatsApp' },
  cvLabel: { es: 'Currículum', en: 'Résumé' },
  cvValue: { es: 'Descargar PDF', en: 'Download PDF' },
  linkedinLabel: { es: 'LinkedIn', en: 'LinkedIn' },
  form: {
    name: { es: 'Nombre', en: 'Name' },
    namePlaceholder: { es: 'Tu nombre', en: 'Your name' },
    email: { es: 'Email', en: 'Email' },
    emailPlaceholder: { es: 'tu@email.com', en: 'you@email.com' },
    message: { es: 'Mensaje', en: 'Message' },
    messagePlaceholder: {
      es: 'Cuéntame sobre el rol o proyecto...',
      en: 'Tell me about the role or project...',
    },
    submit: { es: 'Enviar por WhatsApp', en: 'Send via WhatsApp' },
    success: {
      es: 'Se abrirá WhatsApp con el mensaje listo para enviar.',
      en: 'WhatsApp will open with the message ready to send.',
    },
    invalid: {
      es: 'Revisa los campos e inténtalo de nuevo.',
      en: 'Please check the fields and try again.',
    },
    note: {
      es: 'Este formulario abre WhatsApp con el mensaje listo para enviar. No se almacena nada en el sitio.',
      en: 'This form opens WhatsApp with the message ready to send. Nothing is stored on the site.',
    },
  },
}

export const footer = {
  tagline: {
    es: 'Fullstack senior. Construyo, despliego y mantengo productos web.',
    en: 'Senior fullstack. I build, ship and maintain web products.',
  },
  rights: { es: 'Todos los derechos reservados.', en: 'All rights reserved.' },
  madeWith: {
    es: 'Hecho con React, Vite y Tailwind.',
    en: 'Built with React, Vite and Tailwind.',
  },
  backToTop: { es: 'Volver arriba', en: 'Back to top' },
}

export const casesPage = {
  eyebrow: { es: 'Casos', en: 'Work' },
  title: { es: 'Todos los casos', en: 'All case studies' },
  description: {
    es: 'Proyectos de producción, open source y trabajo previo. Los nombres de clientes y el código están protegidos por NDA cuando aplica.',
    en: 'Production, open-source and previous work. Client names and code are protected by NDA where applicable.',
  },
  backHome: { es: 'Volver al inicio', en: 'Back home' },
}

export const casePage = {
  back: { es: 'Volver a casos', en: 'Back to work' },
  viewCase: { es: 'Ver caso', en: 'View case' },
  viewLive: { es: 'Ver en vivo', en: 'View live' },
  challenge: { es: 'El reto', en: 'The challenge' },
  solution: { es: 'La solución', en: 'The solution' },
  results: { es: 'Resultados', en: 'Results' },
  role: { es: 'Mi rol', en: 'My role' },
  stack: { es: 'Stack', en: 'Stack' },
  ndaTitle: { es: 'Nota sobre NDA', en: 'NDA note' },
  ndaText: {
    es: 'Parte del trabajo está protegido por NDA. Este caso describe el problema y la arquitectura sin exponer código, datos ni nombres de clientes.',
    en: 'Part of this work is protected by NDA. This case describes the problem and architecture without exposing code, data or client names.',
  },
  ctaTitle: { es: '¿Tienes un reto similar?', en: 'Do you have a similar challenge?' },
  ctaText: {
    es: 'Cuéntame qué necesitas y te respondo en menos de 24 horas.',
    en: 'Tell me what you need and I will reply within 24 hours.',
  },
  ctaButton: { es: 'Hablemos', en: "Let's talk" },
  notFoundTitle: { es: 'Caso no encontrado', en: 'Case study not found' },
  notFoundText: {
    es: 'El caso que buscas no existe o cambió de nombre.',
    en: 'The case you are looking for does not exist or was renamed.',
  },
  notFoundButton: { es: 'Volver al inicio', en: 'Back to home' },
}
