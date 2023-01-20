// import logo from './logo.svg';
import './App.css';
import   Header  from './components/Header';
import { ProductDetail } from './components/ProductDetail';
import { ProductListing } from './components/ProductListing';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<ProductListing/>}></Route>
        <Route path="/product/:productId" element={<ProductDetail/>}></Route>
        <Route>404 Not Found!</Route>
      </Routes>
    </div>
  );
}

export default App;
