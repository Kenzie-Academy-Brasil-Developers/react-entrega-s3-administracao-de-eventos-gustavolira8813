import "./App.css";
import Menu from "./components/Menu";
import Routes from "./routes";
import GlobalStyle from "./Styles/global";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GlobalStyle />
        <Menu />
        <Routes />
      </header>
    </div>
  );
}

export default App;
