import { useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import "animate.css";
import WOW from 'wowjs';

import "./App.css";

import Theme from "./components/Themes/Theme";
import { ThemeContextProvider } from "./contexts/themecontext";


function App() {
  useEffect(() => {
    new WOW.WOW().init();
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
