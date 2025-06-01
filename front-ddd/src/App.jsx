import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Produto from "./pages/Produto";
import Pagamento from "./pages/Pagamento";
import Download from "./pages/Download";
import Login from "./pages/Login";
import ReLogin from "./pages/ReLogin";
import Cadastro from "./pages/Cadastro";
import ProtectedRoute from "./ProtectedRoute";
import Avaliacao from "./pages/Avaliacao";
import Questoes from "./pages/Questoes";
import Resultado from "./pages/Resultado";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/produto" />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/relogin" element={<ReLogin />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/avaliacao" element={<Avaliacao />} />
        <Route path="/questoes" element={<Questoes />} />
        <Route path="/resultado" element={<Resultado />} />

        <Route
          path="/pagamento"
          element={
            <ProtectedRoute>
              <Pagamento />
            </ProtectedRoute>
          }
        />
        <Route
          path="/download"
          element={
            <ProtectedRoute>
              <Download />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;