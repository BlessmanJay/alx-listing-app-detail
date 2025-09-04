import React from "react";
import { CardProps } from "../../interfaces/index.ts/index.jsx";

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden w-full max-w-sm">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;
