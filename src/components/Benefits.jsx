function Benefits() {
  const benefits = [
    "Tu negocio visible en Google y redes sociales",
    "Más clientes sin depender solo del boca a boca",
    "Diseño moderno y adaptable a celulares",
    "Atención personalizada: soluciones hechas a medida",
  ];

  return (
    <section className="py-20 bg-gray-800 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">¿Por qué elegirnos?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 border border-gray-700 flex items-center gap-4"
            >
              <span className="text-green-400 text-2xl">✅</span>
              <p className="text-gray-300 text-left">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
