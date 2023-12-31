import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/product";
import Layout from "./components/layouts/Layout";
import Contact from "./pages/Contact";
import AddProduct from "./pages/AddProduct";
import FavouriteItems from './pages/FavouriteItems';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Routes>
      <Route path='' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/product' element={<Product/>}></Route>
      <Route path='/product/add' element={<AddProduct/>}></Route>
      <Route path='/product/favourite' element={<FavouriteItems />}></Route>

      </Routes>
    </Layout>
  );
}

export default App;
