import { createContext, useState } from "react";
import { toast } from "react-toastify";
export const ConfraContext = createContext([]);

export const ConfraProvider = ({ children }) => {
  const [confra, setConfra] = useState([]);

  function addToConfra(drink) {
    const list = confra.find((e) => e.id === drink.id);

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
      setConfra([...confra, drink]);
    }
  }
  function removeFromConfra(drink) {
    const list = confra.filter((e) => e.id !== drink.id);
    setConfra(list);
  }
  return (
    <ConfraContext.Provider value={{ confra, addToConfra, removeFromConfra }}>
      {children}
    </ConfraContext.Provider>
  );
};
