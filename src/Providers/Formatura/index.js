import { createContext, useState } from "react";
import { toast } from "react-toastify";
export const FormaturaContext = createContext([]);

export const FormaturaProvider = ({ children }) => {
  const [formatura, setFormatura] = useState([]);

  const addToFormatura = (drink) => {
    const list = formatura.find((e) => e.id === drink.id);

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
      setFormatura([...formatura, drink]);
    }
  };
  const removeFromFormatura = (drink) => {
    const list = formatura.filter((e) => e.id !== drink.id);
    setFormatura(list);
  };

  return (
    <FormaturaContext.Provider
      value={{ formatura, addToFormatura, removeFromFormatura }}
    >
      {children}
    </FormaturaContext.Provider>
  );
};
