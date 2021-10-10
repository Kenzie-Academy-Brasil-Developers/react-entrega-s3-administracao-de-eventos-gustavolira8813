import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BeerList from "../../components/BeerList";

function Home() {
  return (
    <div>
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
      <h2>Lista de Cervejas</h2>
      <BeerList type="home" />
    </div>
  );
}
export default Home;
