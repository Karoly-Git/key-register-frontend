import { useState } from "react";

export default function AddSiteBody() {
    const [siteName, setSiteName] = useState({});

    const handleInputChange = (event) => {
        const { value } = event.target;

        setSiteName(value);
        console.log(value);
    };

    return (
        <>
            <label htmlFor="inp">Site Name:</label>
            <input
                id='inp'
                required
                type="text"
                name="site-name"
                placeholder='Enter Site Name'
                value={siteName}
                onChange={handleInputChange}
            />
        </>
    );
}
