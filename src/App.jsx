import { useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home";

import "./App.css";


import Theme from "./components/Themes/Theme";
import { ThemeProvider } from "./contexts/ThemeContext";


function App() {


  return (
    <>
     <ThemeProvider>
      <Header />
      <Home />
      <Footer />
      <Theme />
      </ThemeProvider>
    </>
  );
}

export default App;
