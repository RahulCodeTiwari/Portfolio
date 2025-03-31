import { useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home";

import "./App.css";
import WOW from 'wowjs'
import "animate.css"; 

import Theme from "./components/Themes/Theme";
import { ThemeContextProvider } from "./contexts/ThemeContext";


function App() {
  useEffect(() => {
    // Ensure window is available before initializing WOW.js
    if (typeof window !== "undefined") {
      const wow = new WOW.WOW();
wow.init();

    }
  }, []);

  return (
    <>
     <ThemeContextProvider>
      <Header />
      <Home />
      <Footer />
      <Theme />
      </ThemeContextProvider>
    </>
  );
}

export default App;
