import axios from "axios";
import { createContext, useState } from "react";
import { useEffect } from "react";

export const BeersContext = createContext([]);

export const BeersProvider = ({ children }) => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((response) => setBeers(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <BeersContext.Provider value={{ beers, setBeers }}>
      {children}
    </BeersContext.Provider>
  );
};
