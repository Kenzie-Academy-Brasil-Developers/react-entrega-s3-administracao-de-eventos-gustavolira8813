import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react/cjs/react.development";
import { BeersContext } from "../../Providers/BeerList";
import { ConfraContext } from "../../Providers/Confra";
import { FormaturaContext } from "../../Providers/Formatura";
import { CasamentoContext } from "../../Providers/Casamento";
import BeerCard from "../BeerCard";

function BeerList({ type }) {
  const { beers, setBeers } = useContext(BeersContext);
  const { formatura, addToFormatura, removeFromFormatura } =
    useContext(FormaturaContext);
  const { confra, addToConfra, removeFromConfra } = useContext(ConfraContext);
  const { casamento, addToCasamento, removeFromCasamento } =
    useContext(CasamentoContext);
  useEffect(() => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((response) => setBeers(response.data));
  }, []);

  return (
    <ul>
      {type === "home" &&
        beers.map((e) => (
          <BeerCard
            addToCasamento={addToCasamento}
            addToConfra={addToConfra}
            addToFormatura={addToFormatura}
            type={type}
            key={e.id}
            beer={e}
          />
        ))}

      {type === "casamento" &&
        casamento.map((e) => (
          <BeerCard
            removeFromCasamento={removeFromCasamento}
            type={type}
            key={e.id}
            beer={e}
          />
        ))}

      {type === "confra" &&
        confra.map((e) => (
          <BeerCard
            removeFromConfra={removeFromConfra}
            type={type}
            key={e.id}
            beer={e}
          />
        ))}

      {type === "formatura" &&
        formatura.map((e) => (
          <BeerCard
            removeFromFormatura={removeFromFormatura}
            type={type}
            key={e.id}
            beer={e}
          />
        ))}
    </ul>
  );
}

export default BeerList;
