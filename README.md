# 🌊 Sal Arrecife - Landing Page

Landing page moderno y responsive para Sal Arrecife, diseñado con Next.js 16, React 19 y Tailwind CSS v4.

## ✨ Características

- **Diseño Moderno**: Landing page con efectos visuales avanzados y animaciones suaves
- **100% Responsive**: Optimizado para todos los dispositivos (móvil, tablet, desktop)
- **Efectos de Scroll**: Animaciones activadas por scroll con Intersection Observer
- **Parallax Effect**: Efectos de parallax en la sección hero
- **Componentes Modulares**: Arquitectura basada en componentes reutilizables
- **Tipografía Inter**: Fuente moderna y legible de Google Fonts
- **Paleta de Colores Personalizada**:
  - Azul Marino: `#004A77`
  - Azul Cian: `#00B4D8`
  - Rojo Coral: `#EF4444`

## 🚀 Inicio Rápido

1. **Instalar dependencias**:

```bash
npm install
```

2. **Ejecutar servidor de desarrollo**:

```bash
npm run dev
```

3. **Abrir en el navegador**:

```
http://localhost:3000
```

## 📁 Estructura del Proyecto

```
sal_arrecife/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Layout principal con fuente Inter
│   │   ├── page.tsx          # Página principal
│   │   └── globals.css       # Estilos globales y animaciones
│   └── components/
│       ├── Navbar.tsx        # Navegación con scroll effect
│       ├── Hero.tsx          # Sección hero con parallax
│       ├── Benefits.tsx      # Beneficios con scroll reveal
│       ├── Features.tsx      # Características con animaciones
│       ├── Testimonials.tsx  # Carrusel de testimonios
│       ├── CTA.tsx           # Call to action
│       └── Footer.tsx        # Footer con enlaces
├── public/                   # Archivos estáticos
└── package.json
```

## 🎨 Componentes

### Navbar

- Navegación fija con efecto de transparencia
- Cambia de estilo al hacer scroll
- Menú responsive para móviles
- Enlaces de navegación suave

### Hero

- Gradiente animado de fondo
- Efectos de parallax
- Elementos flotantes decorativos
- Indicador de scroll animado

### Benefits

- 6 tarjetas con beneficios clave
- Animaciones de entrada escalonadas
- Efectos hover con transformaciones
- Icons decorativos

### Features

- Layout alternado (izquierda/derecha)
- Tarjetas con gradientes personalizados
- Efectos de brillo animados
- Contenido detallado

### Testimonials

- Carrusel automático de testimonios
- Transiciones suaves entre slides
- Sistema de puntuación con estrellas
- Indicadores de navegación

### CTA

- Diseño impactante con gradiente
- Estadísticas destacadas
- Botones con efectos hover
- Elementos decorativos flotantes

### Footer

- 4 columnas de información
- Enlaces a redes sociales
- Diseño responsive
- Copyright y políticas

## 🎭 Animaciones Personalizadas

El proyecto incluye animaciones CSS personalizadas:

- `fadeInUp`: Entrada desde abajo con fade
- `fadeInDown`: Entrada desde arriba con fade
- `scaleIn`: Entrada con escala
- `float`: Flotación continua
- **Efectos de gradiente**: Transiciones suaves de color
- **Glassmorphism**: Efectos de vidrio esmerilado

## 🛠️ Tecnologías

- **Next.js 16**: Framework de React con App Router
- **React 19**: Biblioteca de UI
- **Tailwind CSS v4**: Framework de utilidades CSS
- **TypeScript**: Tipado estático
- **Inter Font**: Tipografía de Google Fonts

## 📱 Responsive Design

El diseño se adapta perfectamente a:

- 📱 Móviles (< 640px)
- 📱 Tablets (640px - 1024px)
- 💻 Desktop (> 1024px)

## 🎨 Paleta de Colores

```css
--navy: #004A77     /* Azul Marino */
--cyan: #00B4D8     /* Azul Cian */
--coral: #EF4444    /* Rojo Coral */
```

## 📦 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Ejecutar ESLint
```

## 🚀 Despliegue

El proyecto está listo para desplegarse en:

- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- Cualquier hosting que soporte Next.js

## 📄 Licencia

© 2025 Sal Arrecife. Todos los derechos reservados.
