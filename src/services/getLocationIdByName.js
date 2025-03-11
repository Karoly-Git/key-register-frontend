import { apiUrl } from "../../app.config";

const getLocationIdByName = async (locationName) => {
    const URL = apiUrl.isLocalServer ? apiUrl.dev : apiUrl.prod;

    try {
        const response = await fetch(`${URL}/locations/id/${encodeURIComponent(locationName)}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            const data = await response.json();
            return data.data.id;
        } else {
            console.error("Failed to fetch location ID:", response.statusText);
            return null;
        }
    } catch (error) {
        console.error("Error fetching location ID:", error);
        throw error;
    }
};

export default getLocationIdByName;
