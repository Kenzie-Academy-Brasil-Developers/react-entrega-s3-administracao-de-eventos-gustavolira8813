import "./App.css";
import Menu from "./components/Menu";
import Routes from "./routes";
import GlobalStyle from "./Styles/global";
import { Switch, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/home";
import Casamento from "./pages/casamento";
import Confra from "./pages/confra";
import Formatura from "./pages/formatura";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Routes />

          <GlobalStyle />
          <Menu />
        </header>
      </div>
    </>
  );
}

export default App;
