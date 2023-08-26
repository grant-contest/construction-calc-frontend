import React from "react";
import Topbar from "./mocks/topbar";
import Header from "./mocks/header";
import Footer from "./mocks/footer";
import Page0 from "./components/pages/page-0/page-0";
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div>
      <Topbar/>
      <Header/>

      <Navbar/>

      <Routes>
        <Route path="/" element={<Page0/>}/>
        <Route path="/page-1" element={<p>Page 1</p>}/>
        <Route path="/page-2" element={<p>Page 2</p>}/>
        <Route path="/page-3" element={<p>Page 3</p>}/>
        <Route path="/page-4" element={<p>Page 4</p>}/>
        <Route path="/page-5" element={<p>Page 5</p>}/>
        <Route path="/page-6" element={<p>Page 6</p>}/>
        <Route path="/page-7" element={<p>Page 7</p>}/>
        <Route path="/page-8" element={<p>Page 8</p>}/>
        <Route path="/page-9" element={<p>Page 9</p>}/>
        <Route path="/result" element={<p>Итог</p>}/>
      </Routes>

      <Footer/>
    </div>
  )
    ;
}

export default App;
