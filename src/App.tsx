import Header from "./components/header";
import CustomButton from "./components/customButton";
import Hero from "./sections/hero";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      {/* <Empresas /> */}
      {/* Sección de demostración de botones */}
      <section className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Demostración de Botones
          </h2>

          {/* Botones en fondo claro */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Botones en Fondo Claro
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <CustomButton type="principal" size="lg">
                Principal
              </CustomButton>
              <CustomButton type="outline" size="lg">
                Outline
              </CustomButton>
              <CustomButton type="secondary" size="md">
                Secondary (MD)
              </CustomButton>
              <CustomButton type="principal" size="sm">
                Principal (SM)
              </CustomButton>
            </div>
          </div>

          {/* Botones en fondo oscuro */}
          <div className="bg-black p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Botones en Fondo Oscuro
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <CustomButton type="secondary" size="lg">
                Secondary
              </CustomButton>
              <CustomButton type="outlineSecondary" size="lg">
                Outline Secondary
              </CustomButton>
              <CustomButton type="principal" size="md">
                Principal (MD)
              </CustomButton>
              <CustomButton type="outlineSecondary" size="sm">
                Outline Secondary (SM)
              </CustomButton>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contacto</h2>
          <p className="text-lg text-gray-600">
            Más contenido para demostrar el scroll
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
