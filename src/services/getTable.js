import { apiUrl } from "../../url.config";

const getTable = async (table) => {
    const URL = apiUrl.isLocalServer ? apiUrl.dev : apiUrl.prod;

    try {
        const response = await fetch(`${URL}/${table}/get/table`);

        if (response.ok) {
            const responseJSON = await response.json();
            return responseJSON.data;
        } else {
            console.error("Failed to fetch records:", response.statusText);
        }
    } catch (error) {
        console.error("Error fetching records:", error);
        throw error;
    }
};

export default getTable;
