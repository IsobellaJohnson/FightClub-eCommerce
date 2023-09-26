import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Products from './pages/Products/Products';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import "./App.scss"

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products/:id" element={<Products />} />
          <Route path="product/:id" element={<Product />} />
        </Routes>
        <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
