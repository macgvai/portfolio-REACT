import React from "react";
import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";
import Main from "../layout/main/main";
import { GlobalStyle } from "./styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
