import { PropertyProps } from "@/interfaces";

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{property.name}</h3>
        <p className="text-sm text-gray-500">
          {property.address.city}, {property.address.country}
        </p>
        <div className="text-yellow-500">⭐ {property.rating}</div>
        <div className="text-blue-600 font-bold">${property.price} / night</div>
      </div>
    </div>
  );
};

export default PropertyCard;
