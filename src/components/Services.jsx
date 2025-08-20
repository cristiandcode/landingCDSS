function Services() {
  const services = [
    {
      title: "Desarrollo Web",
      description: "Creamos sitios modernos, rápidos y adaptables a cualquier dispositivo.",
    },
    {
      title: "Diseño UI/UX",
      description: "Diseños centrados en el usuario para mejorar la experiencia digital.",
    },
    {
      title: "SEO & Marketing",
      description: "Optimización para buscadores y estrategias digitales efectivas.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Nuestros Servicios</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700 hover:border-blue-500 hover:shadow-lg hover:-translate-y-2 transform transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
