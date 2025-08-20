function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} CD Software Solutions. Todos los derechos reservados.
        </p>
        <div className="flex gap-4">
          <a
            href="#home"
            className="hover:text-white transition duration-300"
          >
            Inicio
          </a>
          <a
            href="#services"
            className="hover:text-white transition duration-300"
          >
            Servicios
          </a>
          <a
            href="#projects"
            className="hover:text-white transition duration-300"
          >
            Proyectos
          </a>
          <a
            href="#contact"
            className="hover:text-white transition duration-300"
          >
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
