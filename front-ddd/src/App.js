import React, { useState } from "react";
import Produto from "./pages/Produto";
import Pagamento from "./pages/Pagamento";
import Download from "./pages/Download";

function App() {
  const [pagina, setPagina] = useState("produto");
  const [pagamentoAprovado, setPagamentoAprovado] = useState(false);

  switch (pagina) {
    case "produto":
      return <Produto onComprar={() => setPagina("pagamento")} />;
    case "pagamento":
      return (
        <Pagamento
          onAprovar={() => {
            setPagamentoAprovado(true);
            setPagina("download");
          }}
          onCancelar={() => setPagina("produto")}
        />
      );
    case "download":
      return pagamentoAprovado ? <Download /> : <p>Acesso não autorizado</p>;
    default:
      return <Produto onComprar={() => setPagina("pagamento")} />;
  }
}

export default App;
