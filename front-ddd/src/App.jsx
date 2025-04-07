import { useState } from "react";
import Produto from "./pages/Produto";
import Pagamento from "./pages/Pagamento";
import Download from "./pages/Download";

const App = () => {
  const [pagina, setPagina] = useState("produto");
  const [pagamentoAprovado, setPagamentoAprovado] = useState(false);

  if (pagina === "produto") {
    return <Produto onComprar={() => setPagina("pagamento")} />;
  }

  if (pagina === "pagamento") {
    return (
      <Pagamento
        onAprovar={() => {
          setPagamentoAprovado(true);
          setPagina("download");
        }}
        onCancelar={() => setPagina("produto")}
      />
    );
  }

  if (pagina === "download") {
    return pagamentoAprovado ? <Download /> : <p>Acesso não autorizado</p>;
  }

  return <Produto onComprar={() => setPagina("pagamento")} />;
};

export default App;
