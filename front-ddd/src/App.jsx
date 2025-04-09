import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Produto from "./pages/Produto";
import Pagamento from "./pages/Pagamento";
import Download from "./pages/Download";
import Login from "./pages/Login";
import { useState } from "react";

const App = () => {
  const [pagamentoAprovado, setPagamentoAprovado] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/produto" />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/pagamento" element={
          <Pagamento
            onAprovar={() => setPagamentoAprovado(true)}
          />
        } />
        <Route path="/download" element={
          pagamentoAprovado ? <Download /> : <p>Acesso não autorizado</p>
        } />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
