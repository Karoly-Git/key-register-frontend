//import { useContext, useState, useEffect } from 'react';
//import getRecordById from '../../../../actions/getRecordById';
//import { KeyRegisterContext } from '../../KeyRegister';

export default function EditSiteBody() {
    /*
    const { setBodyData, targetId } = useContext(KeyRegisterContext);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        getRecordById(targetId, 'sites')
            .then((result) => {
                setInputValue(result[0].name);
            });
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setInputValue(value);

        setBodyData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }
    */

    return (
        <div className='modal-body'>
            <label htmlFor="inp">Edit the Site name:</label>
            <input
                id='inp'
                required
                type="text"
                name="name"
            //value={inputValue || ''}
            //onChange={handleInputChange}
            />
        </div >
    );
}
