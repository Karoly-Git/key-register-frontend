import { apiUrl } from "../../app.config";

const getSiteIdByName = async (siteName) => {
    const URL = apiUrl.isLocalServer ? apiUrl.dev : apiUrl.prod;

    try {
        const response = await fetch(`${URL}/sites/id/${encodeURIComponent(siteName)}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            const data = await response.json();
            return data.data.id;
        } else {
            console.error("Failed to fetch site ID:", response.statusText);
            return null;
        }
    } catch (error) {
        console.error("Error fetching site ID:", error);
        throw error;
    }
};

export default getSiteIdByName;
