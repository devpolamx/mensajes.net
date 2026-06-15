/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, InsightArticle, ValueItem } from './types';

export const BRAND_INFO = {
  name: 'Mensajes.net',
  tagline: 'Inteligencia en Comunicación',
  vision: 'Inteligencia estratégica para construir influencia.',
  subtext: 'Diseñamos sistemas de posicionamiento, percepción y comunicación estratégica para empresas, gobiernos y campañas políticas.',
  differentiator: {
    title: 'Inteligencia Estratégica.',
    description: 'Las agencias tradicionales se enfocan en impresiones y me gustas efímeros. En Mensajes.net operamos a nivel de arquitectura de la percepción y sistemas de influencia. Analizamos datos vectorizados, diseñamos narrativas blindadas de alta precisión y ejecutamos distribución pautada inteligente para asegurar que su mensaje domine la mente de los tomadores de decisiones clave.'
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'inteligencia-estrategica',
    title: 'Inteligencia Estratégica',
    shortDescription: 'Sistemas avanzados de análisis cuantitativo, monitoreo de actores clave e ingeniería operativa de opinión.',
    fullDescription: 'Procesamiento de datos demográficos, socioeconómicos y de audiencias para modelar dinámicas sociales, regulatorias y de opinión pública a nivel milimétrico. Diseñamos mapas de poder y matrices de actores clave.',
    problem: 'Las organizaciones y figuras públicas operan con puntos ciegos críticos, tomando decisiones reactivas sobre tendencias legislativas, sociales o comerciales en lugar de anticipar y moldear el entorno a su favor.',
    benefits: [
      'Modelado predictivo de opinión pública y tendencias regulatorias.',
      'Identificación de detractores, promotores y canales críticos de influencia.',
      'Auditorías semióticas de marca corpórea y reputacional.',
      'Matrices de riesgo estratégico multidimensional.'
    ],
    iconName: 'Compass'
  },
  {
    id: 'marketing-politico',
    title: 'Marketing Político',
    shortDescription: 'Diseño de campañas de poder, arquitectura de marca gubernamental y movilización inteligente de audiencias de alta incidencia.',
    fullDescription: 'Ingeniería electoral sofisticada basada en psicografía y ciencia del comportamiento de masas. Desarrollamos narrativas rectoras que logran tracción histórica y posicionan proyectos políticos con máxima ventaja competitiva.',
    problem: 'Campañas y gobiernos estructurados con metodologías mercadológicas genéricas de consumo masivo, que resultan en desconexión colectiva, dilución del capital político e ineficiencia en el despliegue publicitario.',
    benefits: [
      'Diseño psicográfico del electorado y microsegmentación de mensajes dinámicos.',
      'Construcción de narrativa mítica rectora y marca de gobernanza institucional.',
      'Ingeniería de contraste y control preventivo de ataques reputacionales.',
      'Estrategias de movilización y consolidación del voto decisivo.'
    ],
    iconName: 'ShieldAlert'
  },
  {
    id: 'comunicacion-de-crisis',
    title: 'Comunicación de Crisis',
    shortDescription: 'Sistemas cerrados de blindaje reputacional, contención y control de daños en entornos hostiles de alta volatilidad.',
    fullDescription: 'Intervención inmediata y diseño de cuartos de guerra para aislar riesgos reputacionales. Creamos defensas narrativas inmunes al ruido digital y mediático que de-escalan el conflicto y recuperan el orden institucional de forma acelerada.',
    problem: 'El advenimiento de una crisis reputacional descontrolada en redes o medios destruye en horas la credibilidad y el valor comercial de una firma acumulados durante décadas.',
    benefits: [
      'Establecimiento de comités de crisis tácticos con protocolos militares de reserva.',
      'Neutralización y desacoplamiento controlado de narrativas perjudiciales en buscadores y plataformas.',
      'Interferencia de sesgos cognitivos en el debate de la opinión pública.',
      'Manuales integrales preventivos de blindaje y respuesta rápida.'
    ],
    iconName: 'ServerCrash'
  },
  {
    id: 'pauta-inteligente',
    title: 'Pauta Inteligente',
    shortDescription: 'Ingeniería algorítmica de distribución de mensajes y geolocalización de precisión orientada a tomadores de decisiones.',
    fullDescription: 'No desperdiciamos recursos en audiencias irrelevantes. Diseñamos autopistas digitales de comunicación hiper-dirigidas para impactar con absoluta certeza a círculos directivos, legisladores, reguladores, inversores y directores corporativos.',
    problem: 'Presupuestos publicitarios millonarios dispersados en métricas de vanidad que impactan a millones de perfiles, pero fallan en alcanzar a los 50 tomadores de decisión que determinan el éxito de un proyecto corporativo o gubernamental.',
    benefits: [
      'Microsegmentación industrial e institucional (IP mapping, geofencing legislativo).',
      'Distribución de contenido estratégico en el feed exacto del decisor.',
      'Optimización matemática de costo por impacto de influencia cualificado.',
      'Sistemas de análisis de atribución corporativa de alta fidelidad.'
    ],
    iconName: 'Target'
  },
  {
    id: 'marketing-digital-integral',
    title: 'Marketing Digital Integral',
    shortDescription: 'Ecosistemas digitales de alta gama estructurados para posicionamiento, tracción y consolidación institucional.',
    fullDescription: 'Desplegamos infraestructura digital blindada, optimizada para SEO técnico extremo y pensada en proyectar la sofisticación del cliente. Sincronizamos la huella digital para proyectar solidez técnica, operativa y moral en cada canal activo.',
    problem: 'Huellas digitales descuidadas, plataformas vulnerables, lentas o visualmente rudimentarias que reducen el estatus percibido por inversionistas, contrapartes internacionales y auditores externos.',
    benefits: [
      'Ingeniería web premium optimizada para velocidad de carga instantánea de nivel ejecutivo.',
      'Blindaje técnico integral contra ciberataques de denegación de servicio (DDoS) e intrusiones.',
      'Automatización sofisticada de relaciones informativas institucionales (B2B/Gobierno).',
      'Despliegue sistémico de canales multiplataforma unificados con analítica descentralizada.'
    ],
    iconName: 'Globe'
  },
  {
    id: 'posicionamiento-y-conversion',
    title: 'Posicionamiento y Conversión',
    shortDescription: 'Estructuración científica de flujos de persuasión digital orientados a la captación de grandes cuentas e inversores.',
    fullDescription: 'Desarrollamos embudos de decisión específicos diseñados paso a paso para guiar el discernimiento lógico y emocional de los perfiles corporativos más exigentes. Convertimos la visibilidad pasiva en compromisos operacionales concretos.',
    problem: 'Canales digitales que generan prospectos de baja calidad o que transmiten un mensaje transaccional común, incapaz de retener al visitante de alto patrimonio o de interés estratégico corporativo.',
    benefits: [
      'Arquitectura de persuasión basada en modelado heurístico de Kahneman.',
      'B2B Prospecting de ultra-precisión para asegurar reuniones presenciales directivas.',
      'Despliegue de whitepapers y calculadoras predictivas de retorno de inversión corporativo.',
      'Análisis de embudo optimizado para retención de audiencias de alto valor neto (UHNWI).'
    ],
    iconName: 'TrendingUp'
  },
  {
    id: 'produccion-estrategica',
    title: 'Producción Estratégica',
    shortDescription: 'Narrativas cinematográficas, activos multimedia de máximo impacto de autoridad y diseño estético editorial superior.',
    fullDescription: 'El contenido es el vehículo del estatus. Producimos piezas audiovisuales de calibre cinematográfico, reportes editoriales excepcionales e interfaces que imponen respeto intelectual en el instante de su primer contacto visual.',
    problem: 'Material corporativo aburrido, mal producido o visualmente descuidado que degrada instantáneamente la percepción de excelencia tecnológica o sofisticación estratégica de una firma.',
    benefits: [
      'Producción de video con lenguaje visual cinematográfico y guionismo de alta política.',
      'Diseño de identidad corporativa de alto contraste, sobriedad y refinamiento.',
      'Reportes de inteligencia anuales interactivos diseñados para inversionistas y líderes.',
      'Soportes interactivos tridimensionales sutiles para demostraciones técnicas de tecnología.'
    ],
    iconName: 'Layers'
  }
];

export const VALUES: ValueItem[] = [
  {
    id: 'precision',
    title: 'Pragmatismo Matemático',
    description: 'No teorizamos. Analizamos flujos masivos de datos para aislar la causa raíz de la percepción colectiva y modelamos estrategias de comunicación inmunes a variables de suerte.',
    iconName: 'Binary'
  },
  {
    id: 'reserva',
    title: 'Absoluta Discreción',
    description: 'Las mejores operaciones son invisibles. Preservamos la confidencialidad técnica de nuestros clientes corporativos y gubernamentales con protocolos militares de control documental.',
    iconName: 'KeyRound'
  },
  {
    id: 'autenticidad',
    title: 'Arquitectura Inmune',
    description: 'Buscamos blindar las estructuras narrativas de nuestros clientes de modo que la interferencia o la desinformación externa no penetre sus perímetros institucionales.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'sofisticacion',
    title: 'Influencia Científica',
    description: 'Combinamos técnicas avanzadas de ciencia cognitiva, segmentación psicográfica y pauta programática para guiar el debate social sin recurrir a la estridencia mediática.',
    iconName: 'Cpu'
  }
];

export const INSIGHTS: InsightArticle[] = [
  {
    id: 'algoritmo-percepcion',
    slug: 'analisis-algoritmo-percepcion',
    title: 'El Algoritmo de la Percepción: Psicografía, Datos y el Futuro de la Influencia Soberana',
    category: 'Inteligencia Estratégica',
    summary: 'Análisis detallado sobre cómo la unificación de almacenes de datos masivos y el análisis cognitivo de matrices de redes permiten orquestar narraciones inmunes a la saturación publicitaria tradicional.',
    date: 'Junio 2026',
    readTime: '8 min de lectura',
    author: 'Equipo de Inteligencia - Mensajes.net',
    seoKeywords: ['Inteligencia estratégica', 'Psicografía electoral', 'Análisis de percepción', 'Big Data corporativo'],
    content: `La opinión pública ya no se forma en plazas ni en debates públicos abiertos; se procesa de forma descentralizada y automatizada a través de las arquitecturas de las plataformas digitales que estructuran el tejido diario de nuestra interacción social.

En esta investigación, profundizamos en cómo el cambio de la "pauta masiva ordinaria" hacia los sistemas psicométricos multidimensionales ha transformado permanentemente el concepto de gobernanza mediática.

### 1. El fin de la segmentación demográfica clásica
El género, la edad y la ubicación geográfica son variables de bajísima resolución informativa. La era contemporánea exige modelos predictivos basados en rasgos de personalidad como los perfiles OCEAN (Apertura, Responsabilidad, Extroversión, Amabilidad, Neuroticismo). 

Diseñar mensajes adaptados para cada cuadrante de neurosis o adaptabilidad permite interceptar la toma de decisiones subconsciente, ahorrando hasta un 84% de recursos desperdiciados en pauta corporativa genérica.

### 2. La arquitectura del "Eco Controlado"
Los decisores gubernamentales y empresariales son impactados indirectamente. A través de la ingeniería de pauta unificada, es posible cercar virtualmente el perímetro físico de sedes parlamentarias, directorios de bancos y foros internacionales (como el Foro de Davos), asegurando que los líderes solo consuman editoriales, visiones corporativas y data estructurada que validen los objetivos comerciales o políticos de la firma representada.

### 3. Blindaje antifrágil en la era de la desinformación sintética
Las firmas del futuro no son aquellas que desmienten con desesperación comunicados de prensa apócrifos. Son aquellas que han construido "perímetros herméticos de estatus percibido". Esto se logra a través de la instalación sistemática, metódica y silenciosa de reportes de autoridad técnica, posicionados orgánicamente en los canales con mayor peso intelectual y menor velocidad de obsolescencia digital.`
  },
  {
    id: 'blindaje-crisis',
    slug: 'blindaje-crisis-reputacional',
    title: 'Gobernanza Líquida: Protocolos de Blindaje Reputacional y Respuesta Táctica Antifrágil',
    category: 'Comunicación de Crisis',
    summary: 'Cómo las corporaciones globales anticipan, mitigan y transforman las crisis en vectores de capital político agregando protocolos simétricos de desacoplamiento mediático.',
    date: 'Mayo 2026',
    readTime: '6 min de lectura',
    author: 'Gabinete de Gestión de Crisis - Mensajes.net',
    seoKeywords: ['Comunicación de crisis', 'Blindaje reputacional', 'Crisis management', 'Gestión de riesgos corporativos'],
    content: `Las crisis reputacionales contemporáneas operan bajo dinámicas líquidas de amplificación algorítmica veloz. En este informe, revelamos los protocolos estandarizados aplicados en nuestros 'War Rooms' tácticos de Mensajes.net para desarmar corrientes de pánico mediático o boicot corporativo.

### El Principio de la Inacción Selectiva Inicial
La primera reacción instintiva de un departamento de relaciones públicas ordinario es publicar un comunicado disculpándose o argumentando legalismos complejos. En el 92% de los casos, este comunicado inicial actúa como combustible que valida la narrativa del retractor y otorga consistencia a las búsquedas de Google.

El protocolo estratégico exige el silencio inmediato durante la fase de "fuego rápido", seguido por el despliegue invisible de la técnica del desacoplamiento de algoritmos de recomendación:

* **Saturación Lateral**: Propagación simultánea de anuncios, de carácter técnico o corporativo constructivo altamente desvinculados que sobrecargan los rastreadores de tendencia (crawlers) licuando el volumen de menciones conflictivas.
* **Segmentación de Conflicto**: Identificación del líder de opinión instigador original para desactivar la credibilidad de sus premisas mediante canales de autoridad técnica fácticos y simétricos, sin emitir polémicas directas.
* **Secuestro de la Narrativa Rectora**: Reencuadrar la temática central de la disputa desde una arista ética o de seguridad soberana donde nuestro cliente mantenga una posición de fuerza fáctica irrebatible.`
  },
  {
    id: 'psicografia-elites',
    slug: 'psicografia-influencia-tomadores-decision',
    title: 'La Psicografía de la Elite: Canales de Persuasión Invisibles para Audiencias de Alta Jerarquía',
    category: 'Posicionamiento y Conversión',
    summary: 'Un desglose exhaustivo sobre los mecanismos que captan la atención selectiva del 1% que decide el flujo del capital global y la legislación soberana.',
    date: 'Abril 2026',
    readTime: '5 min de lectura',
    author: 'Departamento de Estrategia B2B - Mensajes.net',
    seoKeywords: ['Pauta inteligente', 'Marketing B2B gubernamental', 'Influencia corporativa', 'Persuasión ejecutiva'],
    content: `Impactar a un consumidor promedio requiere simplicidad, repetición y recompensas inmediatas. Impactar a un líder de junta directiva o a un ministro clave de Estado exige una semiótica diametralmente opuesta: sobriedad intelectual, valor técnico denso y ausencia absoluta de artificios de marketing tradicionales.

### Los Tres Filtros Cognitivos del Líder Corporativo
Un presidente ejecutivo o un legislador promedio recibe docenas de propuestas digitales al día. Desarrollan una ceguera selectiva inmediata frente a promesas como "maximice su ROI", "acelere su crecimiento" o "somos la agencia líder". Estos enunciados se descartan como ruido de fondo comercial.

Nuestro sistema descifra esta inmunidad mediante tres filtros operacionales:

1. **La Estética de la Sobriedad**: Usamos tipografía matemática, amplios márgenes negativos y un esquema tonal estricto que evoca los tableros analíticos de instituciones de inteligencia militar o banca privada. El color de la autoridad es el azul petróleo profundo combinado con el silencio visual del negro absoluto.
2. **El Estatus de la Imperatividad**: No vendemos; documentamos realidades heurísticas. El mensaje está escrito en clave asertiva de diagnóstico directivo. En lugar de ofrecer "servicios", demostramos de forma irrefutable "vulnerabilidades de sistema" estructurales que nuestro cliente está preparado para resolver.
3. **El Embudo Privado**: Las contrapartes UHNWI y de alta jerarquía no llenan cuestionarios web públicos para ganar cupones. El canal interactivo en este sector debe ser un portal blindado, que requiera acreditación institucional y ofrezca un "Diagnóstico de Percepción Privado" que entregue valor estratégico confidencial antes de pedir un acuerdo comercial.`
  }
];

export const SEO_METADATA = {
  default: {
    title: 'Mensajes.net | Inteligencia en Comunicación Estratégica',
    description: 'Firma estratégica especializada en posicionamiento del poder, arquitectura de opinión pública, control de crisis e influencia de alto nivel para empresas, gobiernos y líderes políticos.',
    keywords: ['Mensajes.net', 'Inteligencia en Comunicación', 'Estrategia reputacional', 'Marketing Político', 'Gestión de crisis', 'Posicionamiento de influencia', 'Pauta Inteligente'],
    ogImage: '/og-image-mensajes-net.png',
  },
  nosotros: {
    title: 'Nosotros | Mensajes.net - Arquitectura de Percepción y Poder',
    description: 'Conozca la filosofía, valores y métodos reservados con los que Mensajes.net diseña e implementa estructuras sólidas de reputación e influencia y mapas de poder.',
    keywords: ['Firma estratégica', 'Opinión pública', 'Modelos cognitivos', 'Gobernanza corporativa', 'Inteligencia política'],
  },
  servicios: {
    title: 'Servicios de Inteligencia y Percepción | Mensajes.net',
    description: '7 pilares de ingeniería en comunicación estratégica. Inteligencia Estratégica, Crisis, Pauta Segmentada, Marketing Político y Producción Tecnológica para corporaciones y gobiernos.',
    keywords: ['Servicios estratégicos corporativos', 'Seguridad reputacional', 'Ecosystemas digitales empresariales', 'Marketing gubernamental'],
  },
  insights: {
    title: 'Insights Estratégicos | Mensajes.net - Análisis de Reputación e Influencia',
    description: 'Papeles técnicos de investigación, análisis y visión científica de las redes de percepción mediática y control corporativo de crisis del siglo XXI.',
    keywords: ['Insights estratégicos mensajes.net', 'Análisis de datos predictivos', 'Estrategias de comunicación elite', 'Big Data opinión pública'],
  },
  contacto: {
    title: 'Agendar Reunión Estratégica | Mensajes.net - Auditoria Privada',
    description: 'Inicie una auditoría y diagnóstico de influencia privado y confidencial. Acceda a nuestros analistas y estructuradores de crisis renombrados.',
    keywords: ['Diagnóstico de percepción corporativo', 'Consultoría comunicación elite', 'Solicitar diagnóstico Mensajes.net'],
  }
};

export const SITEMAP_XML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://mensajesnet.com/</loc>
    <lastmod>2026-06-05</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://mensajesnet.com/nosotros</loc>
    <lastmod>2026-06-05</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://mensajesnet.com/servicios</loc>
    <lastmod>2026-06-05</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://mensajesnet.com/insights</loc>
    <lastmod>2026-06-05</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://mensajesnet.com/contacto</loc>
    <lastmod>2026-06-05</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>`;

export const ROBOTS_TXT = `# www.mensajesnet.com Robots File
User-agent: *
Allow: /
Disallow: /api/
Disallow: /private-war-room/

Sitemap: https://mensajesnet.com/sitemap.xml`;
