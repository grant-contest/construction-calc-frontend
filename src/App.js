import React, {useState} from "react";
import Topbar from "./mocks/topbar";
import Header from "./mocks/header";
import Footer from "./mocks/footer";
import Page0 from "./components/pages/page-0/page-0";
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Page2 from "./components/pages/page-2/page-2";
import Page1 from "./components/pages/page-1/page-1";
import Page3 from "./components/pages/page-3/page-3";


function App() {
  const [recommendation, setRecommendation] = useState();

  return (
    <div>
      <Topbar/>
      <Header/>

      <Navbar/>

      <Routes>
        <Route path="/" element={<Page0 setRec={setRecommendation}/>}/>
        <Route path="/page-1" element={<Page1 rec={recommendation} setRec={setRecommendation}/>}/>
        <Route path="/page-2" element={<Page2 rec={recommendation} setRec={setRecommendation}/>}/>
        <Route path="/page-3" element={<Page3/>}/>
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
