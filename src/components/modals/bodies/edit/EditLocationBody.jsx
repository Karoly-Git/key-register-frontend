// import { useContext, useState, useEffect } from 'react';
// import getRecordById from '../../../../actions/getRecordById';
// import { KeyRegisterContext } from '../../KeyRegister';

export default function EditLocationBody() {
    /*
    const { setBodyData, targetId } = useContext(KeyRegisterContext);
    const [inputValue, setInputValue] = useState('');
    const [siteId, setSiteId] = useState(null);

    useEffect(() => {
        getRecordById(targetId, 'locations')
            .then((result) => {
                setInputValue(result[0].name);
                setSiteId(result[0].site_id);
            });
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setInputValue(value);

        setBodyData(prevData => ({
            ...prevData,
            [name]: value,
            site_id: siteId
        }));
    }
    */

    return (
        <>
            <label htmlFor="inp">Edit the Location name:</label>
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
