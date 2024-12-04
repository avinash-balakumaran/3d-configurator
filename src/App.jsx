import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import Configurator from "./pages/Configurator";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
