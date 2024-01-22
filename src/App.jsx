import {Routes, Route} from "react-router-dom"; 
import { useState } from 'react';
import Header from './components/Header';
import StorePage from '../src/pages/products/storePage';
import ShowProduct from '../src/pages/products/index';
import Favorites from '../src/pages/products/favorites';
import '../src/components/App/App.css';
import { ProductContext } from './data/ProductContext';
const userId = "Q8KUdVWawQSa7z";

function App() {
const { Provider: ProductData} = ProductContext;
const [state, setState] = useState({});
  return (
    <>
       <div className="App">
        <ProductData value={{state, setState}}>
        <Header/>
          <Routes>
            <Route path="/favorites" element={<Favorites />}/>
            <Route path="/" element={<StorePage />} />
            <Route path="/products/:id" element={<ShowProduct  current_user={userId}/>} />
          </Routes>
        </ProductData>
      </div>
    </>
  );
}

export default App;
