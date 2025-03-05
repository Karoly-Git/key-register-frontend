//import { useContext, useState, useEffect } from 'react';
//import getRecordById from '../../../../actions/getRecordById';
//import { KeyRegisterContext } from '../../KeyRegister';

export default function EditCabinetBody() {
    /*
    const { setBodyData, targetId } = useContext(KeyRegisterContext);
    const [inputValue, setInputValue] = useState('');
    const [locationId, setLocationId] = useState(null);

    useEffect(() => {
        getRecordById(targetId, 'cabinets')
            .then((result) => {
                setInputValue(result[0].name);
                setLocationId(result[0].location_id);
            });
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setInputValue(value);

        setBodyData(prevData => ({
            ...prevData,
            [name]: value,
            location_id: locationId
        }));
    }
    */

    return (
        <>
            <label htmlFor="inp">Edit the Cabinet name:</label>
            <input
                id='inp'
                required
                type="text"
                name="name"
            //value={inputValue || ''}
            //onChange={handleInputChange}
            />
        </>
    );
}
