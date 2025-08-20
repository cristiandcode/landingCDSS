function Hero() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white px-6 relative overflow-hidden">
      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-white/5 to-transparent pointer-events-none"></div>

      <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-center tracking-tight">
        CD Software Solutions 🚀
      </h1>

      <p className="text-lg md:text-xl max-w-2xl text-gray-300 mb-8 text-center">
        Creamos <span className="text-yellow-500 font-semibold">landing pages</span>, <span className="text-yellow-500 font-semibold">tiendas online</span> y <span className="text-yellow-500 font-semibold">sistemas a medida</span> para potenciar tu negocio digital.
      </p>

      <a
        href="#contact"
        className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg shadow-md hover:bg-yellow-400 transition duration-300"
      >
        Pedí tu presupuesto
      </a>
    </section>
  );
}

export default Hero;
