//import { useContext } from 'react';

//import { KeyRegisterContext } from '../../KeyRegister';

export default function AddSiteBody() {
    /*
    const { bodyData, setBodyData } = useContext(KeyRegisterContext);

    const handleBodyChange = (event) => {
        const { name, value } = event.target;
        setBodyData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }
    */

    return (
        <div className='modal-body'>
            <label htmlFor="inp">Name the Site:</label>
            <input
                id='inp'
                required
                type="text"
                name="name"
                placeholder='Add a site name'
            //value={bodyData.name || ''}
            //onChange={handleBodyChange}
            />
        </div >
    );
}
