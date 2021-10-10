import axios from "axios";
import { createContext, useState } from "react";

export const BeersContext = createContext([]);

export const BeersProvider = ({ children }) => {
  const [beers, setBeers] = useState([]);

  return (
    <BeersContext.Provider value={{ beers, setBeers }}>
      {children}
    </BeersContext.Provider>
  );
};
