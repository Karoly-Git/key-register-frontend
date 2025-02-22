import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './layouts/Header';
import Footer from './layouts/Footer';
import KeyRegister from './components/pages/KeyRegister';

import './styles/App.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />

        <Routes>
          <Route path='/' element={<KeyRegister />} />
          <Route path='/user/register' element={<KeyRegister />} />
          <Route path='/user/login' element={<KeyRegister />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}