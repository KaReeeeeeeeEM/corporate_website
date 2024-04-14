/* eslint-disable no-unused-vars */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { About, Blog, Contacts, Footer, Header, Hero, Pricing, Services, Teams, Testimonials, Works } from "./components";

const App = () => {
  return (
    <div className="App">
      <header id="header">
        <Header />
      </header>
      <main>
        <Hero />
        <About />
        <Services />
        <Works />
        <Testimonials />
        <Blog />
        <Pricing />
        <Contacts />
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
