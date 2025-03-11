import React from "react";

const DestinationCard = ({ destination }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 w-80">
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-900">{destination.name}</h2>
        <h3 className="text-md text-gray-600">{destination.location}</h3>
        <p className="text-gray-700 mt-2 text-sm">{destination.description}</p>
        <p className="text-lg font-bold text-blue-500 mt-3">{destination.price}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
