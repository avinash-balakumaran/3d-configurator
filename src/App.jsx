import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import Configurator from "./pages/Configurator";
import SofaConfigurator from "./pages/SofaConfigurator";
import ChairConfigurator from "./pages/chairConfigurator";

function App() {
  return (
    <>
      <div class="title-container">
        <h1 class="title">Ziffity Product Configurator</h1>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/configurator" element={<Configurator />} />
          <Route path="/sofa-configurator" element={<SofaConfigurator />} />

          <Route path="chair-configurator" element={<ChairConfigurator />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
