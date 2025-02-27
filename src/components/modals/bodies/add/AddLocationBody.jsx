//import { useContext, useEffect, useState } from 'react';
//import getRecords from '../../../../actions/getRecords';
//import { KeyRegisterContext } from '../../KeyRegister';

export default function AddLocationBody() {
    /*const { bodyData, setBodyData } = useContext(KeyRegisterContext);
    const [sites, setSites] = useState([]);

    useEffect(() => {
        getRecords('sites')
            .then(sites => {
                setSites(sites);

                setBodyData(prevData => ({
                    ...prevData,
                    site_id: sites[0].id
                }));
            });
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setBodyData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSiteSelectChange = (event) => {
        const { value } = event.target;
        setBodyData(prevData => ({
            ...prevData,
            site_id: value
        }));
    };
    */

    return (
        <div className='modal-body'>
            <label htmlFor="">Choose a Site:</label>
            <select
                name="site_id"
            //value={bodyData.site_id || ''}
            //onChange={handleSiteSelectChange}
            >
                {/*sites.map((site) => (
                    <option key={site.id} value={site.id}>
                        {site.name}
                    </option>
                ))*/}
                <option value="">Option-1</option>
                <option value="">Option-2</option>
                <option value="">Option-3</option>
            </select>
            <label htmlFor="inp">Name the Location:</label >
            <input
                id='inp'
                required
                type="text"
                placeholder='Add a location name'
                name="name"
            //value={bodyData.name || ''}
            //onChange={handleInputChange}
            />
        </div >
    );
}
