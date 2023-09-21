import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/product";
import Layout from "../components/layouts/Layout";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Routes>
      <Route path='' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/product' element={<Product/>}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
