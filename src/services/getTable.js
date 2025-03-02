const getTable = async (table) => {
    try {
        const response = await fetch(`https://www.transferstation.co.uk/${table}`);

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
