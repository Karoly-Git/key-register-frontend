const getTable = async (table) => {
    try {
        const response = await fetch(`http://91.214.112.230:8000/${table}`);

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
