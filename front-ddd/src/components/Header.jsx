import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [nomeUsuario, setNomeUsuario] = useState("");

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token") || sessionStorage.getItem("token");
      
      if (token) {
        try {
          const decoded = jwtDecode(token);
          setIsAuthenticated(true);
          
          // Extrai o nome do campo correto (unique_name)
          const nomeDoUsuario = decoded.unique_name || "Usuário";
          setNomeUsuario(nomeDoUsuario);
          
        } catch (error) {
          console.error("Token inválido:", error);
          handleCleanAuth();
        }
      } else {
        handleCleanAuth();
      }
    };
  
    checkAuth();
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  const handleCleanAuth = () => {
    setIsAuthenticated(false);
    setNomeUsuario("");
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
  };

  const handleLogout = () => {
    handleCleanAuth();
    navigate("/login");
  };

  return (
    <div className="product-page dark-theme">
      <header className="header">
        <div className="header-content">
          <div className="logo-button" onClick={() => navigate("/produto")}>
            seventec.
          </div>
          <nav className="nav-menu">
            {!isAuthenticated ? (
              <>
                <button className="nav-button" onClick={() => navigate("/login")}>
                  Login
                </button>
              </>
            ) : (
              <>
                <span className="nav-username">Bem-vindo, {nomeUsuario}</span>
                <button className="nav-button" onClick={handleLogout}>
                  Sair
                </button>
              </>
            )}
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;