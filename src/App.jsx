import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './components/pages/Home';
import BookNStock from './components/pages/BookNStock';
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
  const activeModalName = useSelector(state => state.app.activeModal.name);

  return (
    <BrowserRouter>
      <div className='App'>
        {activeModalName && <Modal />}
        <Routes>
          <Route path='*' element={<PageNotFound />} />

          <Route path='/' element={<Home />} />

          <Route path='/key-register/keys' element={<KeyRegister page='keys' />} />
          <Route path='/key-register/accesses' element={<KeyRegister page='accesses' />} />
          <Route path='/key-register/cabinets' element={<KeyRegister page='cabinets' />} />
          <Route path='/key-register/locations' element={<KeyRegister page='locations' />} />
          <Route path='/key-register/sites' element={<KeyRegister page='sites' />} />

          <Route path='/book-n-stock' element={<BookNStock />} />

          <Route path='/login' element={<UserAuth type='login' />} />
          <Route path='/register' element={<UserAuth type='register' />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}