import React from "react";
import Topbar from "./mocks/topbar";
import Header from "./mocks/header";
import Footer from "./mocks/footer";
import Range from "./components/UI/range";
import HomeParameters from "./components/pages/page-0/homeParameters";
import Page0 from "./components/pages/page-0/page-0";

function App() {
  return (
    <div>
      <Topbar/>
      <Header/>
      <Page0/>
      <Footer/>
    </div>
  );
}

export default App;
