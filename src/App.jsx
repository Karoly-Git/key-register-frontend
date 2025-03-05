import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import KeyRegister from './components/pages/KeyRegister';
import Modal from './components/modals/Modal';
import UserAuth from './components/pages/UserAuth';
import PageNotFound from './components/pages/PageNotFound';

import './styles/App.css';
import './styles/Navigations.css';
import './styles/Tables.css';
import './styles/Bars.css';
import './styles/Modals.css';

export default function App() {
  const modalSlice = useSelector(state => state.modalSlice.activeModal);

  return (
    <BrowserRouter>
      <div className='App'>
        {modalSlice === 'add' && <Modal activeModal='add' modalBody={<p>ADD MODAL BODY</p>} />}
        {modalSlice === 'delete' && <Modal activeModal='delete' modalBody={<p>DELETE MODAL BODY</p>} />}
        {modalSlice === 'edit' && <Modal activeModal='edit' modalBody={<p>EDIT MODAL BODY</p>} />}
        {modalSlice === 'search' && <Modal activeModal='search' modalBody={<p>SEARCH MODAL BODY</p>} />}
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