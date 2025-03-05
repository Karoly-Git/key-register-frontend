//import { useContext, useState, useEffect } from 'react';
//import getRecordById from '../../../../actions/getRecordById';
//import getRecords from '../../../../actions/getRecords';
//import { KeyRegisterContext } from '../../KeyRegister';

export default function EditKeyBody() {
    /*
    const { setBodyData, targetId } = useContext(KeyRegisterContext);
    const [accesses, setAccesses] = useState([]);

    useEffect(() => {
        getRecordById(targetId, 'keys')
            .then((result) => {
                const cId = result[0].cabinet_id;

                setBodyData(prevData => ({
                    ...prevData,
                    hook_number: result[0].hook_number,
                    cabinet_id: result[0].cabinet_id,
                    access_id: result[0].access_id
                }));

                getRecordById(cId, 'cabinets')
                    .then((result) => {
                        const lId = result[0].location_id;

                        getRecordById(lId, 'locations')
                            .then((result) => {
                                const sId = result[0].site_id;

                                getRecords('accesses')
                                    .then((result) => {
                                        const accesses = result.filter(a => a.site_id === sId);
                                        setAccesses(accesses);
                                    });
                            });
                    });
            });
    }, []);

    const handleSelectChange = (event) => {
        const { value } = event.target;

        setBodyData(prevData => ({
            ...prevData,
            access_id: value,
        }));
    }
    */

    return (
        <>
            <label htmlFor="inp">Edit the Location name:</label>

            <label htmlFor="inp">Choose an Access:</label >

            <select
            //onChange={handleSelectChange} 
            >
                {/*accesses.map((access) => (
                    <option key={access.id + 'ac'} value={access.id}>
                        to {access.name} - (aId: {access.id})  - (sId: {access.site_id})
                    </option>
                ))*/}
                <option value="">Option-1</option>
                <option value="">Option-2</option>
                <option value="">Option-3</option>
            </select>

        </>
    );
}
