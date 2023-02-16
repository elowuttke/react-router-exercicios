import { useNavigate } from "react-router-dom";
import { goToHomepage, goToProfile, goToProduct } from "../routes/coordinator";

export function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => goToHomepage(navigate)}>
        Ir para página inicial
      </button>
      <button onClick={() => goToProfile(navigate)}>
        Ir para página de perfil
      </button>
      <button onClick={() => goToProduct(navigate, "Pikachu")}>
        Ir para página de produto
      </button>
    </div>
  );
}
