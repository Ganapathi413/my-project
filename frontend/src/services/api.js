import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export const getRecommendations = async (movie) => {
    try {
        const response = await axios.get(`${API_URL}/recommend/${movie}`);
        return response.data.recommendations;
    } catch (error) {
        console.error("Error fetching recommendations", error);
        return [];
    }
};
