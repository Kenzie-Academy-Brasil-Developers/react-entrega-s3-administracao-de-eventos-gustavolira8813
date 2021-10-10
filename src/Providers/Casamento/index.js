import { createContext, useState } from "react";
import { toast } from "react-toastify";
export const CasamentoContext = createContext([]);

export const CasamentoProvider = ({ children }) => {
  const [casamento, setCasamento] = useState([]);

  function addToCasamento(drink) {
    const list = casamento.find((e) => e.id === drink.id);

    if (list) {
      toast.error("Cerveja já inserida no evento", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.success("Cerveja Inserida", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setCasamento([...casamento, drink]);
    }
  }
  function removeFromCasamento(drink) {
    const list = casamento.filter((e) => e.id !== drink.id);

    setCasamento(list);
  }

  return (
    <CasamentoContext.Provider
      value={{ casamento, addToCasamento, removeFromCasamento }}
    >
      {children}
    </CasamentoContext.Provider>
  );
};
