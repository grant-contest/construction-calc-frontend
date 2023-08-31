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
import FinalPage from "./components/pages/final/final-page";
import Page4 from "./components/pages/page-4/page-4";
import Page5 from "./components/pages/page-5/page-5";
import Page9 from "./components/pages/page-9/page-9";
import Page6 from "./components/pages/page-6/page-6";
import Page7 from "./components/pages/page-7/page-7";
import Page8 from "./components/pages/page-8/page-8";


function App() {
  const [recommendation, setRecommendation] = useState();
  const [pageCost, setPageCost] = useState();

  return (
    <div>
      <Topbar/>
      <Header/>

      <Navbar/>

      <Routes>
        <Route path="/" element={<Page0 setRec={setRecommendation}/>}/>
        <Route path="/page-1" element={<Page1 rec={recommendation} setRec={setRecommendation}/>}/>
        <Route path="/page-2" element={<Page2 rec={recommendation} setRec={setRecommendation}/>}/>
        <Route path="/page-3" element={<Page3 rec={recommendation} setRec={setRecommendation}/>}/>
        <Route path="/page-4" element={<Page4 rec={recommendation} setRec={setRecommendation}/>}/>
        <Route path="/page-5" element={<Page5 rec={recommendation} setRec={setRecommendation}/>}/>
        <Route path="/page-6" element={<Page6 rec={recommendation} setRec={setRecommendation}/>}/>
        <Route path="/page-7" element={<Page7 rec={recommendation} setRec={setRecommendation}/>}/>
        <Route path="/page-8" element={<Page8 rec={recommendation} setRec={setRecommendation}/>}/>
        <Route path="/page-9" element={<Page9 rec={recommendation} setRec={setRecommendation}/>}/>
        <Route path="/result" element={<FinalPage rec={recommendation} setRec={setRecommendation} page9CostParam={pageCost}/>}/>
      </Routes>

      <Footer/>
    </div>
  )
    ;
}

export default App;
