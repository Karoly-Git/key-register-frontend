const deleteRecordById = async (table, id) => {
    try {
        const response = await fetch(`http://localhost:8000/${table}/delete/${id}`, {
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

