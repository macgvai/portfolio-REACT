import React from "react";
import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";
import About from "../pages/about/about";
import { GlobalStyle } from "./styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <About />
      <Footer />
    </>
  );
}

export default App;
