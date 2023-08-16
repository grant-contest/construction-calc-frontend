import React from "react";
import Topbar from "./mocks/topbar";
import Header from "./mocks/header";
import Footer from "./mocks/footer";
import Page0 from "./components/pages/page-0/page-0";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div>
      <Topbar/>
      <Header/>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page0/>}/>
        </Routes>
      </BrowserRouter>

      <Footer/>
    </div>
  )
    ;
}

export default App;
