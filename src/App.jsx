import {Routes, Route} from "react-router-dom"; 
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import StorePage from '../src/pages/products/storePage';
import ShowProduct from '../src/pages/products/index';
// import MyProfile from "./components/MyProfile/showUser";
import Favorites from '../src/pages/products/favorites';
import Edit from '../src/pages/products/editFavorite';

import '../src/components/App/App.css';



import { ProductContext } from './data/ProductContext';

function App() {
const { Provider: ProductData, Consumer} = ProductContext;
const [state, setState] = useState({});
  return (
    <>
       <div className="App">
        <ProductData value={{state, setState}}>
        <Header/>
          <Routes>
            <Route path="/favorites" element={<Favorites />}/>
            <Route path="/favorites/:id/edit" element={<Edit />} />
            {/* <Route path="/users/:id" element={<MyProfile />}>My Profile</Route> */}
            <Route path="/" element={<StorePage />} />
            <Route path="/products/:id" element={<ShowProduct />} />
          </Routes>
          <Footer />
        </ProductData>
      </div>
    </>
  );
}

export default App;
