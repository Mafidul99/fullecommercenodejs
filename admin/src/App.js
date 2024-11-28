
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import React, { createContext, useEffect, useState } from 'react';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Products from './pages/Products';
import ProductsDetails from './pages/ProductsDetails';
import ProductUpload from './pages/ProductUpload';
import CategoryAdd from './pages/CategoryAdd';
import Category from './pages/Category';

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import LoadingBar from 'react-top-loading-bar'


const MyContext = createContext();

function App() {

  const [isToggleSidebar, setIsToggleSidbar] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isHideSidebarAndHeader, setIsHideSidebarAndHeader] = useState(false);
  const [themeMode, setThemeMode] = useState(true);

  const [progress, setProgress] = useState(0);

  const [alertBox, setAlertBox] = useState({
    msg: '',
    error:false,
    open: false
  });


  useEffect(() => {

    const theme_Mode = localStorage.getitem('themeMode');

    if (themeMode === true) {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      localStorage.setItem('themeMode', 'light');
    }
    else {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      localStorage.setItem('themeMode', 'dark');
    }
  }, [themeMode]);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlertBox({
      open: false
    });
  };


  const values = {
    setIsToggleSidbar,
    isToggleSidebar,
    isLogin,
    setIsLogin,
    isHideSidebarAndHeader,
    setIsHideSidebarAndHeader,
    themeMode,
    setThemeMode,
    alertBox,
    setAlertBox,
    setProgress

  }

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>

        <LoadingBar
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
          className='topLoadingBar'
        />

        <Snackbar open={alertBox.open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity={alertBox.error === false ? "success" : "error"}
            variant="filled"
            sx={{ width: '100%' }}
          >
            {alertBox.msg}
          </Alert>
        </Snackbar>

        {
          isHideSidebarAndHeader !== true &&
          <Header />
        }
        <div className='main d-flex'>
          {
            isHideSidebarAndHeader !== true &&
            <div className={`sidebarWrapper ${isToggleSidebar === true ? 'toggle' : ''}`}>
              <Sidebar />
            </div>
          }
          <div className={`content ${isHideSidebarAndHeader === true && 'full'} ${isToggleSidebar === true ? 'toggle' : ''}`}>
            <Routes>
              <Route path="/" exact={true} element={<Dashboard />} />
              <Route path="/dashboard" exact={true} element={<Dashboard />} />
              <Route path="/login" exact={true} element={<Login />} />
              <Route path="/signUp" exact={true} element={<SignUp />} />
              <Route path="/products" exact={true} element={<Products />} />
              <Route path="/product/details" exact={true} element={<ProductsDetails />} />
              <Route path="/product/add" exact={true} element={<ProductUpload />} />
              <Route path="/category" exact={true} element={<Category />} />
              <Route path="/category/add" exact={true} element={<CategoryAdd />} />
            </Routes>
          </div>
        </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext }
