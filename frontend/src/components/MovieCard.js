import React from "react";

const MovieCard = ({ title }) => {
    return (
        <div className="border p-4 rounded shadow-md bg-white">
            <h3 className="text-lg font-bold">{title}</h3>
        </div>
    );
};

export default MovieCard;
