function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-gray-900 to-black opacity-30 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl font-bold mb-6 tracking-wide">Hablemos de tu proyecto</h2>
        <p className="text-gray-400 mb-10 text-lg">
          Contanos tu idea y te ayudamos a llevar tu negocio al mundo digital.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            href="https://wa.me/5493813474072"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-10 py-4 rounded-full font-semibold text-white border border-green-400 hover:border-green-300 transition duration-300
              before:absolute before:inset-0 before:rounded-full before:bg-green-500 before:opacity-10 before:blur-lg before:transition before:duration-300 hover:before:opacity-20"
          >
            WhatsApp Directo
          </a>

          <a
            href="mailto:diazcristian0210@gmail.com"
            className="relative px-10 py-4 rounded-full font-semibold text-white border border-blue-500 hover:border-blue-400 transition duration-300
              before:absolute before:inset-0 before:rounded-full before:bg-blue-600 before:opacity-10 before:blur-lg before:transition before:duration-300 hover:before:opacity-20"
          >
            Enviar Email
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
