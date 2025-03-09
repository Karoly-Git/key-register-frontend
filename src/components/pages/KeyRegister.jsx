import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveTableName } from '../../redux/appSlice';
import Header from '../../layouts/Header';
import Main from '../../layouts/Main';
import Footer from '../../layouts/Footer';

export default function KeyRegister({ page }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setActiveTableName(page));
    }, [dispatch, page]);

    return (
        <div className='key-register'>
            <Header />
            <Main page={page} />
            <Footer page={page} />
        </div>
    );
}
