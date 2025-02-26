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
import Modal from './components/modals/Modal';

export default function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Modal modalName='add' modalBody={<p>ADD MODAL BODY</p>} />
        <Modal modalName='delete' modalBody={<p>DELETE MODAL BODY</p>} />
        <Modal modalName='edit' modalBody={<p>EDIT MODAL BODY</p>} />
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