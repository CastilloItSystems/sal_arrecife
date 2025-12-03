export default function Footer() {
  return (
    <footer
      id="contacto"
      className="bg-[#004A77] text-white py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 bg-linear-to-r from-white to-[#00B4D8] bg-clip-text text-transparent">
              Sal Arrecife
            </h3>
            <p className="text-white/80 mb-4 leading-relaxed">
              Sal marina natural del Caribe, cosechada artesanalmente para
              preservar todos sus minerales y propiedades.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#00B4D8] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <span className="text-xl">📘</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#00B4D8] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <span className="text-xl">📷</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#00B4D8] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <span className="text-xl">🐦</span>
              </a>
            </div>
          </div>

          {/* Enlaces */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#00B4D8]">
              Productos
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#00B4D8] transition-colors duration-300"
                >
                  Sal Fina
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#00B4D8] transition-colors duration-300"
                >
                  Sal Gruesa
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#00B4D8] transition-colors duration-300"
                >
                  Sal en Escamas
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#00B4D8] transition-colors duration-300"
                >
                  Especias
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#00B4D8]">
              Contacto
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#00B4D8] transition-colors duration-300"
                >
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#00B4D8] transition-colors duration-300"
                >
                  Distribuidores
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#00B4D8] transition-colors duration-300"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#00B4D8] transition-colors duration-300"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/20 mb-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
          <p>© 2025 Sal Arrecife. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-[#00B4D8] transition-colors duration-300"
            >
              Política de Privacidad
            </a>
            <a
              href="#"
              className="hover:text-[#00B4D8] transition-colors duration-300"
            >
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
