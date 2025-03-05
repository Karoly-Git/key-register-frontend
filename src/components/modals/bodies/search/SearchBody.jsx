//import { useContext, useState, useEffect } from 'react';
//import getRecordById from '../../../../actions/getRecordById';
//import { KeyRegisterContext } from '../../KeyRegister';

export default function SearchBody() {
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
        <>
            <input type="text" placeholder="Search" />
        </>
    );
}

