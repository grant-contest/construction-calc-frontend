import React from "react";
import Topbar from "./mocks/topbar";
import Header from "./mocks/header";
import Footer from "./mocks/footer";
import Range from "./components/UI/range";

function App() {
  return (
    <div>
      <Topbar/>
      <Header/>
      <Range title={"Площадь дома, м2"} maxValue={1000}/>
      <Range title={"Площадь участка, сот"} maxValue={100}/>
      <Footer/>
    </div>
  );
}

export default App;
