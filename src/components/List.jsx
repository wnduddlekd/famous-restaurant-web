import React, { useEffect, useState } from "react";
import { fetchPlaces } from "../api/placesApi";
import Card from "./Card";

export default function List() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    async function loadData() {
      const data = await fetchPlaces();
      setPlaces(data);
    }
    loadData();
  }, []);

  return (
    <div className="w-[1270px] p-10">
      <h1 className="p-4 w-full">맛집 목록</h1>
      <div className="flex flex-wrap">
        {places.map((place) => (
          <Card
            key={place.id}
            title={place.title}
            image={place.image}
            description={place.description}
          />
        ))}
      </div>
    </div>
  );
}
