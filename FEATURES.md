# Documentación de Características - Sal Arrecife Landing Page

## 🎨 Sistema de Diseño

### Colores Principales

```css
/* Colores de marca */
--navy: #004A77      /* Azul Marino - Color principal de confianza */
--cyan: #00B4D8      /* Azul Cian - Color de acento dinámico */
--coral: #EF4444     /* Rojo Coral - Color de llamadas a la acción */
```

### Tipografía

- **Fuente Principal**: Inter (Google Fonts)
- **Pesos utilizados**: 400 (Regular), 600 (Semi-Bold), 700 (Bold)
- **Sistema de escalado responsive**:
  - Móvil: Base 16px
  - Tablet: Base 18px
  - Desktop: Base 20px

## 🎭 Efectos y Animaciones

### Animaciones CSS Personalizadas

#### fadeInUp

```css
/* Entrada desde abajo con opacidad */
from: opacity 0, translateY(30px)
to: opacity 1, translateY(0)
duration: 0.6s
easing: ease-out
```

#### fadeInDown

```css
/* Entrada desde arriba con opacidad */
from: opacity 0, translateY(-30px)
to: opacity 1, translateY(0)
duration: 0.6s
easing: ease-out
```

#### scaleIn

```css
/* Entrada con escala */
from: opacity 0, scale(0.9)
to: opacity 1, scale(1)
duration: 0.5s
easing: ease-out
```

#### float

```css
/* Flotación continua */
0%, 100%: translateY(0px)
50%: translateY(-20px)
duration: 3s
easing: ease-in-out
iteration: infinite
```

### Efectos de Scroll

#### Intersection Observer

Usado para activar animaciones cuando los elementos entran en el viewport:

- Threshold: 0.1 (10% visible)
- Animaciones escalonadas con delays
- Transiciones suaves de 700ms

#### Parallax Effect

Implementado en el Hero:

- Factor de velocidad: 0.5x
- Aplicado al overlay de gradiente
- Crea profundidad visual

### Efectos Hover

#### Tarjetas de Beneficios

- Elevación con `translateY(-8px)`
- Sombra expandida
- Cambio de color de borde
- Barra de progreso animada en la base
- Duración: 500ms

#### Botones

- Scale: 1.05
- Sombra con color de marca
- Overlay con transformación en X
- Duración: 300ms

#### Tarjetas de Features

- Gradiente de fondo animado
- Efecto de brillo deslizante
- Rotación de icono
- Scale: 1.05

## 📱 Responsive Design

### Breakpoints

```css
/* Tailwind CSS v4 Breakpoints */
sm: 640px   /* Tablets pequeñas */
md: 768px   /* Tablets */
lg: 1024px  /* Desktop pequeño */
xl: 1280px  /* Desktop grande */
2xl: 1536px /* Pantallas extra grandes */
```

### Estrategia Mobile-First

1. **Base (< 640px)**: Diseño móvil

   - Texto más pequeño
   - Columnas simples
   - Padding reducido
   - Imágenes full-width

2. **Tablet (640px - 1024px)**: Layout intermedio

   - 2 columnas en grids
   - Padding medio
   - Texto medio

3. **Desktop (> 1024px)**: Experiencia completa
   - 3 columnas en grids
   - Padding generoso
   - Texto grande
   - Efectos hover completos

## 🧩 Componentes

### Hero Section

**Características**:

- Background con gradiente animado
- 3 círculos flotantes con blur
- Efecto parallax en overlay
- Indicador de scroll animado
- Olas decorativas en SVG

**Estructura**:

```
Hero
├── Background (gradiente)
├── Animated Circles (x3)
├── Parallax Overlay
├── Content
│   ├── Title
│   ├── Subtitle
│   └── CTA Button
├── Scroll Indicator
└── Wave Decoration
```

### Benefits Section

**Características**:

- Grid responsive (1-2-3 columnas)
- 6 tarjetas de beneficios
- Animaciones escalonadas
- Efectos hover avanzados
- Icons decorativos

**Grid Layout**:

- Móvil: 1 columna
- Tablet: 2 columnas
- Desktop: 3 columnas

### Features Section

**Características**:

- Layout alternado izquierda/derecha
- Tarjetas con gradientes personalizados
- Efecto de brillo deslizante
- Contenido detallado
- Icons grandes animados

**Alternancia**:

```
Feature 1: [Icon] | [Content]
Feature 2: [Content] | [Icon]
Feature 3: [Icon] | [Content]
```

### Testimonials Section

**Características**:

- Carrusel automático (5 segundos)
- Transiciones suaves
- Sistema de puntuación (estrellas)
- Indicadores de navegación
- Control manual

**Estados del Carrusel**:

- Activo: opacity 1, scale 1
- Previo: opacity 0, translateX(-100%)
- Siguiente: opacity 0, translateX(100%)

### CTA Section

**Características**:

- Background con gradiente y patrón
- Elementos flotantes decorativos
- Estadísticas destacadas
- Botones primario y secundario
- Cards con glassmorphism

**Stats Cards**:

- Background: rgba blanco con blur
- Border: rgba blanco
- Hover: incremento de opacidad

### Navbar

**Características**:

- Posición fixed
- Transparente en top
- Sólido con scroll
- Menú hamburguesa móvil
- Smooth scroll

**Estados**:

```css
/* Top */
background: transparent
text-color: white

/* Scrolled */
background: white/95
backdrop-blur: md
shadow: lg
text-color: navy
```

### Footer

**Características**:

- 4 columnas responsive
- Enlaces organizados
- Redes sociales
- Copyright
- Hover effects en links

**Layout Responsive**:

- Móvil: 1 columna
- Tablet: 2 columnas
- Desktop: 4 columnas

## 🚀 Optimizaciones

### Performance

1. **Lazy Loading**: Componentes cargan al scroll
2. **CSS Animations**: GPU-accelerated
3. **Image Optimization**: Next.js Image component
4. **Code Splitting**: Componentes modulares
5. **Intersection Observer**: Activación eficiente

### SEO

1. **Meta Tags**: Configurados en layout.tsx
2. **Semantic HTML**: Uso correcto de etiquetas
3. **Alt Text**: En todas las imágenes
4. **Headings**: Jerarquía correcta (h1-h6)
5. **Lang Attribute**: Español configurado

### Accesibilidad

1. **ARIA Labels**: En botones y controles
2. **Keyboard Navigation**: Totalmente funcional
3. **Color Contrast**: WCAG AA compliant
4. **Focus Indicators**: Visibles y claros
5. **Responsive Text**: Legible en todos los tamaños

## 🎯 Mejores Prácticas Implementadas

1. **Mobile-First**: Diseño desde móvil hacia desktop
2. **Progressive Enhancement**: Funcionalidad básica garantizada
3. **Modular Architecture**: Componentes reutilizables
4. **Clean Code**: TypeScript para type safety
5. **Modern CSS**: Tailwind v4 con utilities
6. **Smooth UX**: Transiciones y animaciones coherentes
7. **Loading States**: Feedback visual claro
8. **Error Handling**: Manejo de edge cases

## 📊 Métricas de Rendimiento

### Target Metrics

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

### Lighthouse Score Goals

- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: > 95

## 🔧 Configuración Técnica

### Next.js Config

```typescript
// next.config.ts
- App Router habilitado
- Turbopack en desarrollo
- React Compiler plugin
- Image optimization
```

### Tailwind Config

```css
// globals.css
- Custom animations
- Theme variables
- Gradient utilities
- Custom fonts
```

### TypeScript Config

```json
// tsconfig.json
- Strict mode: true
- Path aliases: @/*
- JSX: preserve
- Module: ESNext
```

## 🎨 Sistema de Gradientes

### Gradientes Principales

```css
/* Navy to Cyan */
bg-linear-to-br from-[#004A77] to-[#00B4D8]

/* Cyan to Coral */
bg-linear-to-br from-[#00B4D8] to-[#EF4444]

/* Coral to Navy */
bg-linear-to-br from-[#EF4444] to-[#004A77]

/* Triple gradient */
bg-linear-to-br from-[#004A77] via-[#00B4D8] to-[#004A77]
```

## 📱 Testing Checklist

### Dispositivos

- [ ] iPhone SE (375px)
- [ ] iPhone 12/13 Pro (390px)
- [ ] iPhone 14 Pro Max (430px)
- [ ] iPad Mini (768px)
- [ ] iPad Pro (1024px)
- [ ] Desktop HD (1920px)
- [ ] Desktop 4K (2560px)

### Navegadores

- [ ] Chrome (últimas 2 versiones)
- [ ] Firefox (últimas 2 versiones)
- [ ] Safari (últimas 2 versiones)
- [ ] Edge (últimas 2 versiones)

### Funcionalidades

- [ ] Navegación suave
- [ ] Animaciones de scroll
- [ ] Carrusel de testimonios
- [ ] Menú móvil
- [ ] Enlaces internos
- [ ] Botones hover
- [ ] Responsive images
- [ ] Loading states
