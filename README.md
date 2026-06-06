# Mensajes.net — Inteligencia en Comunicación Estratégica

Plataforma digital premium diseñada para firmas de posicionamiento de alta jerarquía, corporaciones, gobiernos e instituciones que requieren blindaje reputacional, control de pauta publicitaria y modelado de opinión pública.

---

## Propósito del Sitio

El sitio web de **Mensajes.net** funciona como la carta de presentación ejecutiva y centro de operaciones digitales de la firma. Su propósito es:
1.  **Exponer el portafolio operativo**: Presentar módulos estructurados científicamente (ingeniería narrativa, modelado psicográfico, contención de crisis) dirigidos a decisores clave.
2.  **Ofrecer diagnósticos estratégicos**: Servir como canal seguro (bajo acuerdos estrictos de confidencialidad NDA) para capturar solicitudes de diagnóstico inicial.
3.  **Garantizar accesibilidad ejecutiva**: Presentar una interfaz de usuario limpia, de alta velocidad y adaptable visualmente (soporte completo de Modo Oscuro y Claro) para altos ejecutivos.

---

## Arquitectura y Estructura del Proyecto

El proyecto sigue una arquitectura moderna de **Single Page Application (SPA)** de alto rendimiento, optimizada para cargas inmediatas y SEO:

*   **Vite 6 / Bundler Core**: Empaquetador de alto rendimiento para procesar recursos estáticos, TSX y estilos optimizados en milisegundos.
*   **Enrutamiento React Reactivo**: Control de estado centralizado en `src/App.tsx` para alternar entre las secciones dinámicas del sitio (Inicio, Nosotros, Servicios, Insights, Contacto) sin recargar la página, garantizando una navegación fluida.
*   **Tema Global de Doble Canal**: Integración de estados de modo claro/oscuro sincronizados en `localStorage` y en la clase raíz `<html>` del documento.
*   **Módulos Divididos (Grid Layouts)**: Estructuración adaptativa que distribuye el contenido de forma simétrica, integrando gráficos e ilustraciones fusionadas orgánicamente con el fondo del sitio web.

---

## Tecnología Implementada

El desarrollo se sustenta en tecnologías de vanguardia en la web moderna:

*   **Núcleo**: [React 19](https://react.dev/) y [TypeScript 5](https://www.typescriptlang.org/) para interfaces declarativas tipadas y seguras.
*   **Estilos y Maquetación**: [Tailwind CSS v4.x](https://tailwindcss.com/) (configuración a nivel de CSS a través de `@import` y `@theme`) con variante personalizada `@custom-variant dark (&:where(.dark, .dark *))` para el soporte nativo de modo oscuro mediante clases.
*   **Animaciones**:
    *   [Motion (Framer Motion v12)](https://motion.dev/) para transiciones de desvanecimiento fluidas al cambiar de pestañas.
    *   **requestAnimationFrame**: Micro-animación en React nativo para la carga de números estadísticos incrementales y progresivos en el Hero.
*   **Iconografía**: [Lucide React](https://lucide.dev/) para iconos de interfaz vectorizados y responsivos.
*   **Servidor de Emulación**: Express para servir y probar los layouts y sitemaps.

---

## Ejecución en Local

### Requisitos Previos:
*   [Node.js](https://nodejs.org/) (versión 18 o superior recomendada)

### Pasos para iniciar:

1.  **Instalar dependencias**:
    ```bash
    npm install
    ```

2.  **Configurar Variables de Entorno**:
    Crea un archivo `.env` o `.env.local` en la raíz si deseas configurar llaves de API o configuraciones locales (ej: `GEMINI_API_KEY`).

3.  **Iniciar Servidor de Desarrollo**:
    ```bash
    npm run dev
    ```
    El sitio estará disponible por defecto en `http://localhost:3000/`.

4.  **Compilar para Producción**:
    ```bash
    npm run build
    ```
    Esto generará los activos optimizados e imágenes comprimidas en la carpeta `dist/`.
