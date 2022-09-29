import './App.css';
import Page from "./pages/Page"
import Menu from "./pages/Menu";
import React from "react";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Contact from "./pages/Contact";
import { CartProvider} from "react-use-cart";
import ProductCard from "./pages/CartItems";
import Image from "./pages/Image";



function App() {

  return (
     <div>
      <Menu/>
      <Header/>
      <Page/>
      <Image/>
      <Contact/>
      <Footer/>
     </div>
  );
}

export default App;
