import React, { useState } from "react";
import { getRecommendations } from "../services/api";
import MovieCard from "../components/MovieCard";

const Recommendations = () => {
    const [movie, setMovie] = useState("");
    const [recommendations, setRecommendations] = useState([]);

    const handleSearch = async () => {
        const results = await getRecommendations(movie);
        setRecommendations(results);
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Movie Recommendations</h2>
            <input
                type="text"
                value={movie}
                onChange={(e) => setMovie(e.target.value)}
                className="border p-2 rounded"
                placeholder="Enter a movie name"
            />
            <button onClick={handleSearch} className="ml-2 p-2 bg-blue-500 text-white rounded">
                Get Recommendations
            </button>

            <div className="grid grid-cols-3 gap-4 mt-4">
                {recommendations.map((title, index) => (
                    <MovieCard key={index} title={title} />
                ))}
            </div>
        </div>
    );
};

export default Recommendations;
