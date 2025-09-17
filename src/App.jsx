import './App.css';
import { useEffect, useState } from 'react';
import ProductList from './components/ProductList'
import SearchBar from "./components/SearchBar"
import ProductDetails from './components/ProductDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const API_URL = "http://localhost:8080/products";

function App() {

    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    

  useEffect(() => {
   fetchProducts();
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await fetch(API_URL) 
      const data = await response.json();
      if(data) setProducts(data);

    } catch (error) {
      console.log(error)
    }
  }

  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="app">
            <SearchBar setSearchTerm={setSearchTerm} />
            <ProductList products={filteredProducts} />
          </div>
        } />
        <Route path="/details" element={<ProductDetails />} />
        <Route path="/details/:name" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

