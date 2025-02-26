import React, { useContext, useEffect, useState } from 'react';
import getRecords from '../../../../actions/getRecords';
import getCabinetsWithSiteInfo from '../../../../actions/getCabinetsWithSiteInfo';
import getHooksByCabinetId from '../../../../actions/getHooksByCabinetId';
import { KeyRegisterContext } from '../../KeyRegister';

export default function AddKeyBody() {
    const { bodyData, setBodyData } = useContext(KeyRegisterContext);
    const [sites, setSites] = useState([]);
    const [cabinets, setCabinets] = useState([]);
    const [accesses, setAccesses] = useState([]);
    const [hooks, setHooks] = useState([]);

    const [selectedCabinet, setSelectedCabinet] = useState('');
    const [selectedAccess, setSelectedAccess] = useState('');
    const [selectedHook, setSelectedHook] = useState('');

    const hookCapacity = 20;

    const updateBodyData = (data) => {
        setBodyData(prevData => ({
            ...prevData,
            ...data
        }));
    };

    useEffect(() => {
        getRecords('sites')
            .then(result => {
                const sites = [...result];
                //////console.log(result);
                setSites(result);

                let sId = sites[0].id;
                getCabinetsWithSiteInfo()
                    .then(result => {
                        //////console.log(result);
                        const cabinets = [...result].filter(c => c.site_id === sId);
                        ////console.log(cabinets);

                        setSelectedCabinet(cabinets[0].id);
                        setCabinets(cabinets);

                        const location_id = cabinets[0].location_id;
                        updateBodyData({ location_id });

                        ////console.log(location_id);


                        //let sId = cabinets[0].site_id;
                        getRecords('accesses')
                            .then(result => {
                                //console.log(result);
                                const accesses = [...result].filter(a => a.site_id == sId);
                                setAccesses(accesses);

                                const access_id = accesses[0].id;
                                updateBodyData({ access_id });
                                setSelectedAccess(access_id);
                            })

                        let cId = cabinets[0].id;
                        updateBodyData({ cabinet_id: cId });

                        //////console.log('cId:', cId);

                        getHooksByCabinetId(cId)
                            .then(result => {
                                const hooks = [...result].map(e => e.hook_number);
                                //////console.log(hooks);
                                const freeHooks = new Array(hookCapacity)
                                    .fill(null)
                                    .map((e, i) => hooks.includes(i + 1) ? null : i + 1)
                                    .filter(e => e);

                                //////console.log('Free Hooks:\n', freeHooks);

                                const hook_number = freeHooks[0];
                                updateBodyData({ hook_number });

                                setSelectedHook(hook_number);

                                setHooks(freeHooks);
                            });
                    });
            });

    }, []);

    const handleSiteChange = (event) => {
        const { value } = event.target;

        const sId = parseInt(value);

        //////console.log('sId:', sId);

        getCabinetsWithSiteInfo()
            .then(result => {
                //////console.log(result);
                const cabinets = [...result].filter(c => c.site_id === sId);
                //////console.log('Cabinets:\n', cabinets);

                setSelectedCabinet(cabinets[0].id);
                setCabinets(cabinets);

                const location_id = cabinets[0].location_id;
                updateBodyData({ location_id });


                //let sId = cabinets[0].site_id;
                getRecords('accesses')
                    .then(result => {
                        //////console.log(result);
                        const accesses = [...result].filter(a => a.site_id == sId);
                        setAccesses(accesses);

                        const access_id = accesses[0].id;
                        updateBodyData({ access_id });
                        setSelectedAccess(accesses[0].id)
                    })

                let cId = cabinets[0].id;
                updateBodyData({ cabinet_id: cId });

                ////console.log('cId:', cId);

                getHooksByCabinetId(cId)
                    .then(result => {
                        const hooks = [...result].map(e => e.hook_number);
                        ////console.log(hooks);
                        const freeHooks = new Array(hookCapacity)
                            .fill(null)
                            .map((e, i) => hooks.includes(i + 1) ? null : i + 1)
                            .filter(e => e);

                        //////console.log('Free Hooks:\n', freeHooks);

                        const hook_number = freeHooks[0];
                        updateBodyData({ hook_number });

                        setSelectedHook(hook_number);

                        setHooks(freeHooks);
                    });
            });

    };

    const handleCabinetChange = (event) => {
        const { value } = event.target;
        const cId = parseInt(value);

        setSelectedCabinet(cId);

        updateBodyData({ cabinet_id: cId });

        getHooksByCabinetId(cId)
            .then(result => {
                const hooks = [...result].map(e => e.hook_number);
                ////console.log(hooks);
                const freeHooks = new Array(hookCapacity)
                    .fill(null)
                    .map((e, i) => hooks.includes(i + 1) ? null : i + 1)
                    .filter(e => e);

                ////console.log('Free Hooks:\n', freeHooks);

                const hook_number = freeHooks[0];
                updateBodyData({ hook_number });

                setSelectedHook(hook_number);

                setHooks(freeHooks);
            });


    };

    const handleAccessChange = (event) => {
        const { value } = event.target;
        const access_id = parseInt(value);

        setSelectedAccess(access_id);

        ////console.log({ access_id })

        updateBodyData({ access_id });
    };

    const handleHookChange = (event) => {
        const { value } = event.target;
        const hook_number = parseInt(value);

        ////console.log({ hook_number })

        setSelectedHook(hook_number);

        updateBodyData({ hook_number });
    };

    return (
        <div className='modal-body'>
            <label htmlFor="inp">Choose a Site:</label>
            <select onChange={handleSiteChange} >
                {sites.map((site, index) => (
                    <option key={index + 'si'} value={site.id}>
                        {site.name} - (sId: {site.id})
                    </option>
                ))}
            </select>


            <label htmlFor="inp">Choose a Cabinet:</label>
            <select value={selectedCabinet} onChange={handleCabinetChange} >
                {cabinets.map((cabinet, index) => (
                    <option key={index + 'ca'} value={cabinet.id}>
                        {cabinet.name} - (cId: {cabinet.id}) - (sId: {cabinet.site_id})
                    </option>
                ))}
            </select>


            <label htmlFor="inp">Choose an Access:</label >
            <select value={selectedAccess} onChange={handleAccessChange} >
                {accesses.map((access, index) => (
                    <option key={index + 'ac'} value={access.id}>
                        to {access.name} - (aId: {access.id})  - (sId: {access.site_id})
                    </option>
                ))}
            </select>

            <label htmlFor="inp">Choose a Hook:</label >
            <select value={selectedHook} onChange={handleHookChange} >
                {hooks.map((hook, index) => (
                    <option key={index + 'ho'} value={hook}>
                        Number: {hook}
                    </option>
                ))}
            </select>

            <div onClick={() => console.log(bodyData)}>Show Data Body</div>

        </div >
    );
}
