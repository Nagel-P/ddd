import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Produto from "./pages/Produto";
import Pagamento from "./pages/Pagamento";
import Download from "./pages/Download";
import Login from "./pages/Login";
import ProtectedRoute from "./ProtectedRoute";

import { useState } from "react";

const App = () => {
  const [pagamentoAprovado, setPagamentoAprovado] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/produto" />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/login" element={<Login />} />

        {/* Rota protegida para pagamento */}
        <Route
          path="/pagamento"
          element={
            <ProtectedRoute>
              <Pagamento onAprovar={() => setPagamentoAprovado(true)} />
            </ProtectedRoute>
          }
        />

        {/* Rota protegida para download + verificação se pagou */}
        <Route
          path="/download"
          element={
            <ProtectedRoute>
              {pagamentoAprovado ? <Download /> : <p>Acesso não autorizado</p>}
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
