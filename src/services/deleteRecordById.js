import { apiUrl } from "../../app.config";

const deleteRecordById = async (table, id) => {
    const URL = apiUrl.isLocalServer ? apiUrl.dev : apiUrl.prod;

    try {
        const response = await fetch(`${URL}/${table}/delete/${id}`, {
            method: "DELETE"
        });

        if (response.ok) {
            const responseJSON = await response.json();
            return responseJSON;
        } else {
            console.error('Failed to delete record:', response.statusText);
        }
    } catch (error) {
        console.error("Error deleting record:", error);
        throw error;
    }
};

export default deleteRecordById;

