const getHooksByCabinetId = async (id) => {
    try {
        const response = await fetch(`http://91.214.112.230:8000/keys/get/hooks-by-cabinet-id/${id}`);
        const responseJSON = await response.json();

        if (response.ok) {
            return responseJSON.data;
        } else {
            //const responseJSON = await response.json();
            console.error('Failed to fetch data:', response);
            return responseJSON.data;
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

export default getHooksByCabinetId;