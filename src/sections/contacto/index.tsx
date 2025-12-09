import React, { useState } from "react";
import CustomButton from "../../components/customButton";

const Contacto: React.FC = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contacto" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-5xl md:text-6xl font-bold text-[var(--color-text)] mb-6">
            Contacto
          </h2>
          <p className="text-xl text-[var(--color-muted)] mb-8">
            ¿Tienes preguntas o quieres colaborar? Envíanos un mensaje.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="text-2xl">📧</div>
              <div className="mt-3 font-semibold">Correo</div>
              <div className="text-gray-600">info@tamdgroup.com</div>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 rounded-3xl p-8 shadow-lg ring-1 ring-black/5"
        >
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombre
              </label>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="tucorreo@dominio.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mensaje
              </label>
              <textarea
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 h-36 resize-none focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Cuéntanos brevemente tu consulta"
              />
            </div>
            <div className="flex gap-4">
              <CustomButton type="principal" size="md">
                Enviar mensaje
              </CustomButton>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contacto;
