import Header from "./components/header";
import Hero from "./sections/hero";
import Empresas from "./sections/empresas";
import Video from "./sections/video";
import Ubicacion from "./sections/ubicacion";
import Contacto from "./sections/contacto";
import Footer from "./sections/footer";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Empresas />
      <Video />
      <Ubicacion />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
