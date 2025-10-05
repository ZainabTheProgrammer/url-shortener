import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Boost from "./components/Boost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Shorten from "./components/Shorten";
import Statistic from "./components/Statistic";
import Login from "./pages/login/login";
import Signup from "./pages/register/register";
import Features from "./pages/features/features";
import Pricing from "./pages/pricing/pricing";
import Resources from "./pages/resources/resources";

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Shorten />
              <Statistic />
              <Boost />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
         <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
           <Route path="/resources" element={<Resources/>} />
        

      </Routes>
    </Router>
  );
};

export default App;
