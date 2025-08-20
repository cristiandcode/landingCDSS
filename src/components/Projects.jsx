import Coffe from "../assets/coffe.png";
import AgroCorp from "../assets/agrocorp.png";
import abogado from "../assets/abogado.png";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Sitio Web Corporativo",
      description: "Diseño moderno y responsivo para empresas.",
      image: AgroCorp,
    },
    {
      id: 2,
      title: "E-commerce",
      description: "Tienda online optimizada para ventas.",
      image: Coffe,
    },
    {
      id: 3,
      title: "Landing Page",
      description: "Página enfocada en captar clientes.",
      image: abogado,
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white" id="projects">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          Algunos de nuestros trabajos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 border border-gray-700"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-yellow-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
