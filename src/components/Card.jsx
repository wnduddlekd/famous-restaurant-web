import { BASE_URL } from "../api/placesApi";

BASE_URL;
export default function RestaurantCard({ title, image, description }) {
  return (
    <div className="w-[280px] m-2 rounded-md overflow-hidden shadow-md border border-gray-300">
      <img
        src={`${BASE_URL}/${image.src}`}
        alt={`${image.src}`}
        className="w-full h-48 object-cover bg-slate-200"
        border
        border-gray-300
      />
      <div className="p-2">
        <h2 className="w-full font-semibold text-gray-800 p-1">{title}</h2>
        <p className="text-sm text-gray-500 p-1">{description}</p>
      </div>
    </div>
  );
}
