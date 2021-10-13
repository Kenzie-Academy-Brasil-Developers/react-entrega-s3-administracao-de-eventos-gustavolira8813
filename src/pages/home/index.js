import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BeerList from "../../components/BeerList";

const Home = () => {
  return (
    <>
      <div>
        <h2>List of beers</h2>

        <BeerList type="home" />
      </div>
    </>
  );
};
export default Home;
