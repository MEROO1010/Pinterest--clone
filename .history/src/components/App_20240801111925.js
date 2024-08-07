import React, { useEffect, useState } from "react";
import "../css/App.css";
import Header from "../js/Header";
import MainBoard from "../js/Mainboard";
import unsplash from "../api/unsplash.js";

function App() {
  const [pins, setPins] = useState([]);
  const getData = async (term) => {
    unsplash
      .get("https://api.unsplash.com/search/photos", {
        params: {
          query: term,
          client_id: "VOe8m0UMgCTy5IBDiViPJgbM_aMCyyaXYA0jQt0OdGg",
          per_page: 30,
        },
      })
      .then((res) => {
        let results = res.data.results;

        // let newPins = [...results, ...pins];

        // results.sort(function (a, b) {
        //   return 0.5 - Math.random();
        // });

        setPins(results);
      });
  };

  useEffect(() => {
    getData("bali");
  }, []);

  return (
    <div className="App">
      <Header getData={getData} />
      <MainBoard pins={pins} />
    </div>
  );
}

export default App;