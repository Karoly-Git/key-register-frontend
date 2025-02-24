import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import KeyRegister from './components/pages/KeyRegister';
import UserAuth from './components/pages/UserAuth';
import PageNotFound from './components/pages/PageNotFound';

import './styles/App.css';
import './styles/Navigations.css';
import './styles/Tables.css';
import './styles/Bars.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='*' element={<PageNotFound />} />
          <Route path='/' element={<KeyRegister />} />
          <Route path='/user/login' element={<UserAuth type='login' />} />
          <Route path='/user/register' element={<UserAuth type='register' />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}