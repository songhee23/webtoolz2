import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Calculator from "./pages/Calculator";

function App() {
  return (
    <Router>
      <div className="body">
        <Header />
        <div className="inner-wrapper">
          <Sidebar />
          <section className="content-body">
            <Routes>
              <Route path="/" element={<h2>홈페이지</h2>} />
              <Route path="/calculator" element={<Calculator />} />
            </Routes>
          </section>
        </div>
      </div>
    </Router>
  );
}

export default App;
