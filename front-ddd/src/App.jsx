import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Produto from "./pages/Produto";
import Pagamento from "./pages/Pagamento";
import Download from "./pages/Download";
import Login from "./pages/Login";
import ReLogin from "./pages/ReLogin";
import ProtectedRoute from "./ProtectedRoute";
import Avaliacao from "./pages/Avaliacao"; //
import Questoes from "./pages/Questoes";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/produto" />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/relogin" element={<ReLogin />} />
        <Route path="/avaliacao" element={<Avaliacao />} />
        <Route path="/questoes" element={<Questoes />} />

        {/* Rota protegida para pagamento */}

        <Route
          path="/pagamento"
          element={
            <ProtectedRoute>
              <Pagamento />
            </ProtectedRoute>
          }
        />
        <Route path="/download" element={<Download />} />
      </Routes>
    </Router>
  );
};

export default App;