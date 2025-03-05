const addRecord = async (table, newRecord) => {
    try {
        const response = await fetch(`http://localhost:8000/${table}/add`, {
            method: "POST",
            body: JSON.stringify({
                ...newRecord,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            const responseJSON = await response.json();
            return responseJSON;
        } else {
            console.error('Failed to add record:', response.statusText);
        }
    } catch (error) {
        console.error("Error adding record:", error);
        throw error;
    }
};

export default addRecord;
