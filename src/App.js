import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Home from "./pages/Home";
import  Products  from "./pages/Products";
import  Contact  from "./pages/Contact";
import PageNotFound  from "./pages/PageNotFound";
import './App.css'

import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
function App() {
  return (
   <Router>
   <Navbar/>
       <Routes>
           <Route path="/" element = {<Home />} />
           <Route path="/products" element = {<Products />} />
           <Route path="/contact" element = {<Contact />} />
       </Routes>
   <Footer/>
   </Router>
  );
}
export default App;