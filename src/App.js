import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import { Route, Routes } from 'react-router-dom'
import Cart from './components/Cart';
import Footer from './components/Footer';
function App() {

  return (
    <>
      <div className="App">
        <Header className="hdr" />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
