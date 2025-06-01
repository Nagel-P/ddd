import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style/Download.css";
import DDDescomplicaPDF from "../assets/DDDescomplica.pdf"; // Importe o arquivo PDF
import PaymentCard from "../components/PaymentCard";

const Download = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      jwtDecode(token);
    } catch (error) {
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
      navigate("/login");
    }
  }, [navigate]);

  const handleStartEvaluation = () => {
    navigate("/avaliacao");
  };

  return (
    <div className="download-container dark-theme">
      <Header />
      <main className="download-main">
        <div className="download-card">
          <h1>Obrigado pela compra!</h1>
          <p>Seu arquivo está pronto para download.</p>
          <a 
            href= '/Certificados/DDDescomplica.pdf'
            download="DDDescomplica.pdf" 
            className="download-link"
          >
            <button className="download-button">Baixar Arquivo</button>
          </a>
        </div>
        <PaymentCard />
      </main>
      <Footer />
    </div>
  );
};

export default Download;