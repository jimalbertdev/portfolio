export type Language = 'es' | 'en'

export type Localized<T> = {
  es: T
  en: T
}

export function pick<T>(value: Localized<T>, language: Language): T {
  return value[language]
}

export const site = {
  name: 'Alberto Jiménez',
  initials: 'AJ',
  email: 'jim.alberto@gmail.com',
  phone: '+58 424-900-8410',
  phoneHref: 'tel:+584249008410',
  whatsapp: 'https://wa.me/584249008410',
  linkedin: 'https://www.linkedin.com/in/jimalbertdev',
  github: 'https://github.com/jimalbertdev',
  cv: '/cv/Alberto-Jimenez-Fullstack-Senior.pdf',
  domain: 'jimalbert.dev',
}

export const nav = {
  services: { es: 'Servicios', en: 'Services' },
  cases: { es: 'Casos', en: 'Work' },
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
  },
  lab: {
    eyebrow: { es: 'Laboratorio', en: 'Lab' },
    title: { es: 'Proyectos en desarrollo', en: 'Projects in progress' },
    description: {
      es: 'Productos propios y prototipos donde estoy explorando IA, datos y arquitecturas nuevas. Sin promesas de producción: código, decisiones y aprendizaje.',
      en: 'Personal products and prototypes where I am exploring AI, data and new architectures. No production promises: code, decisions and learning.',
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
}

export const cases: CaseStudy[] = [
  {
    slug: 'sigaf-erp',
    title: {
      es: 'ERP administrativo-financiero para el sector público',
      en: 'Administrative and financial ERP for the public sector',
    },
    company: {
      es: 'Cliente institucional · Venezuela',
      en: 'Institutional client · Venezuela',
    },
    period: { es: '2026 — Actualidad', en: '2026 — Present' },
    summary: {
      es: 'Plataforma modular para centralizar presupuesto, compras, tesorería, contabilidad, inventario, nómina y recursos humanos en una sola arquitectura.',
      en: 'Modular platform centralizing budget, procurement, treasury, accounting, inventory, payroll and HR in a single architecture.',
    },
    challenge: {
      es: 'Los procesos administrativos y financieros estaban fragmentados entre hojas de cálculo, sistemas heredados y controles manuales. El cliente necesitaba trazabilidad, auditoría y una operación unificada.',
      en: 'Administrative and financial processes were fragmented across spreadsheets, legacy systems and manual controls. The client needed traceability, auditing and unified operations.',
    },
    solution: {
      es: 'Arquitectura Laravel 12 + React 19 sobre PostgreSQL 16 y Redis 7, con Keycloak para identidad, API documentada con OpenAPI y despliegue en Docker. Implementación por módulos: núcleo y auditoría, catálogos, formulación y ejecución presupuestaria, SEP, compras, cuentas por pagar, tesorería, contabilidad, activos, inventario, producción, nómina y RRHH.',
      en: 'Laravel 12 + React 19 architecture on PostgreSQL 16 and Redis 7, with Keycloak for identity, an OpenAPI-documented API and Docker deployment. Delivered by modules: core and audit, master data, budget formulation and execution, SEP, procurement, accounts payable, treasury, accounting, fixed assets, inventory, production, payroll and HR.',
    },
    results: {
      es: [
        'Plataforma modular con 13 módulos administrativos y financieros.',
        'Presupuesto, compras, CxP, tesorería, contabilidad, activos, inventario, nómina y RRHH integrados.',
        'Auditoría, identidad centralizada y contrato de API documentado.',
      ],
      en: [
        'Modular platform with 13 administrative and financial modules.',
        'Budget, procurement, AP, treasury, accounting, assets, inventory, payroll and HR integrated.',
        'Auditing, centralized identity and a documented API contract.',
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
  },
  {
    slug: 'cordami-offline',
    title: {
      es: 'Registro agrícola offline-first con mapas y carnetización',
      en: 'Offline-first agricultural registry with maps and digital cards',
    },
    company: {
      es: 'Cliente institucional · Venezuela',
      en: 'Institutional client · Venezuela',
    },
    period: { es: '2026 — Actualidad', en: '2026 — Present' },
    summary: {
      es: 'PWA para censar y carnetizar productores agrícolas en zonas sin cobertura, con datos geoespaciales, sincronización offline y verificación pública por QR.',
      en: 'PWA to register and issue digital cards for agricultural producers in areas without coverage, with geospatial data, offline sync and public QR verification.',
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
        'Censo de 8 pasos con mapa satelital y polígono del predio.',
        'Operación offline con sincronización automática e idempotencia.',
        'Carnet digital con QR y verificación pública; exportación PDF/XLSX/CSV.',
      ],
      en: [
        '8-step census with satellite map and farm polygon.',
        'Offline operation with automatic, idempotent synchronization.',
        'Digital card with QR and public verification; PDF/XLSX/CSV export.',
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
  },
  {
    slug: 'vacanfly-hospitality',
    title: {
      es: 'Suite de hospitalidad para huéspedes y propietarios',
      en: 'Hospitality suite for guests and property owners',
    },
    company: {
      es: 'Cliente de hospitalidad · España',
      en: 'Hospitality client · Spain',
    },
    period: { es: '2025 — Actualidad', en: '2025 — Present' },
    summary: {
      es: 'Plataforma para digitalizar el check-in de huéspedes, el registro de viajeros y la operación de alojamientos turísticos, con acceso a cerraduras inteligentes y multiidioma.',
      en: 'Platform to digitize guest check-in, traveler registration and vacation rental operations, with smart lock access and multiple languages.',
    },
    challenge: {
      es: 'El check-in requería registrar varios huéspedes por reserva, validar documentos internacionales, cumplir el registro policial de viajeros, firmar contratos y coordinar accesos al alojamiento.',
      en: 'Check-in required registering multiple guests per booking, validating international documents, complying with traveler registration rules, signing contracts and coordinating property access.',
    },
    solution: {
      es: 'PWA React + TypeScript con API PHP/MySQL. Validaciones condicionales para DNI/NIE/pasaporte, firma digital y contratos PDF con mPDF, panel de huésped y propietario, control de cerraduras inteligentes, guía local e interfaz en ES/EN/CA/FR/DE/NL.',
      en: 'React + TypeScript PWA with a PHP/MySQL API. Conditional DNI/NIE/passport validation, digital signatures and PDF contracts with mPDF, guest and owner dashboards, smart lock control, local guide and ES/EN/CA/FR/DE/NL interfaces.',
    },
    results: {
      es: [
        'Check-in digital multi-huésped con validación documental y firma.',
        'Contratos PDF y flujo alineado al registro de viajeros.',
        'Control de cerraduras inteligentes, guía local y seis idiomas.',
      ],
      en: [
        'Multi-guest digital check-in with document validation and signature.',
        'PDF contracts and a traveler-registration-aligned flow.',
        'Smart lock control, local guide and six languages.',
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
    ],
    role: {
      es: 'Desarrollo fullstack, API PHP, frontend React, generación de PDFs y control de acceso.',
      en: 'Fullstack development, PHP API, React frontend, PDF generation and access control.',
    },
    tags: {
      es: ['React', 'PHP', 'PWA', 'Hospitality'],
      en: ['React', 'PHP', 'PWA', 'Hospitality'],
    },
    highlight: { es: 'PWA + Smart locks', en: 'PWA + Smart locks' },
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
  highlight: Localized<string>
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
    highlight: { es: 'IA + geo', en: 'AI + geo' },
  },
  {
    name: {
      es: 'WushuTech Pro — gestión de competencias',
      en: 'WushuTech Pro — competition management',
    },
    description: {
      es: 'Plataforma para federaciones de wushu: gestión de competencias, evaluación de Taolu y Sanda y asistencia con IA. React 19, TypeScript, Vite, React Router y Gemini API.',
      en: 'Platform for wushu federations: competition management, Taolu and Sanda evaluation, and AI assistance. React 19, TypeScript, Vite, React Router and the Gemini API.',
    },
    stack: ['React', 'TypeScript', 'Vite', 'React Router', 'Gemini API'],
    tags: {
      es: ['Deportes', 'IA', 'SaaS'],
      en: ['Sports', 'AI', 'SaaS'],
    },
    status: { es: 'En desarrollo', en: 'In development' },
    highlight: { es: 'Taolu + Sanda', en: 'Taolu + Sanda' },
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
    es: 'Cuéntame qué necesitas: un rol full-time, un proyecto freelance o una auditoría técnica. Respondo en menos de 24 horas.',
    en: 'Tell me what you need: a full-time role, a freelance project or a technical audit. I reply within 24 hours.',
  },
  emailLabel: { es: 'Email', en: 'Email' },
  whatsappLabel: { es: 'WhatsApp', en: 'WhatsApp' },
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
    submit: { es: 'Enviar mensaje', en: 'Send message' },
    success: {
      es: 'Se abrirá tu cliente de correo con el mensaje listo para enviar.',
      en: 'Your email client will open with the message ready to send.',
    },
    invalid: {
      es: 'Revisa los campos e inténtalo de nuevo.',
      en: 'Please check the fields and try again.',
    },
    note: {
      es: 'Este formulario abre tu cliente de correo. No se almacena nada en el sitio.',
      en: 'This form opens your email client. Nothing is stored on the site.',
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

export const casePage = {
  back: { es: 'Volver a casos', en: 'Back to work' },
  viewCase: { es: 'Ver caso', en: 'View case' },
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

export const contactEmail = site.email
