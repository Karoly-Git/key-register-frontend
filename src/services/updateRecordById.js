import { apiUrl } from "../../app.config";

const updateRecordById = async (table, id, updatedRecord) => {
    const URL = apiUrl.isLocalServer ? apiUrl.dev : apiUrl.prod;

    try {
        const response = await fetch(`${URL}/${table}/update/${id}`, {
            method: "PUT",
            body: JSON.stringify({
                ...updatedRecord,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        }
        );
        if (response.ok) {
            const keysJSON = await response.json();
            return keysJSON;
        } else {
            console.error('Failed to update record:', response.statusText);
        }
    } catch (error) {
        console.error("Error updating record:", error);
        throw error;
    }
};

export default updateRecordById;
