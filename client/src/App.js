
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Listing from './pages/Listing';
import ProductDetails from './pages/ProductDetails';
import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const MyContext = createContext();

function App() {

  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  const [isOpenProductModal, setIsOpenProductModal]= useState(false);
  const [isHeaderFooterShow, setIsHeaderFooterShow]= useState(true);
  const [isLogin, setLogin]= useState(false);


  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getCountry = async (url) => {
    const responsive = await axios.get(url).then((res) => {
      setCountryList(res.data.data)
      console.log(res.data.data)
    })
  }

  const values = {
    countryList,
    setSelectedCountry,
    selectedCountry,
    setIsOpenProductModal,
    isOpenProductModal,
    isHeaderFooterShow,
    setIsHeaderFooterShow,
    isLogin,
    setLogin
  }

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        {
          isHeaderFooterShow === true && <Header />
        }
        
          <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <Route path="/cat/:id" exact={true} element={<Listing />} />
            <Route path="/product/:id" exact={true} element={<ProductDetails />} />
            <Route path="/cart" exact={true} element={<Cart />} />
            <Route path="/login" exact={true} element={<SignIn />} />
            <Route path="/register" exact={true} element={<SignUp />} />
          </Routes>
         
          {
          isHeaderFooterShow === true && <Footer />
          }
        

            {
                isOpenProductModal===true && <ProductModal />
            }
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext }
