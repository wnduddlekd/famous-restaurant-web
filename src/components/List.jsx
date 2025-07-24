import React, { useEffect, useState } from "react";
import { fetchPlaces } from "../api/placesApi";
import Card from "./Card";

export default function List() {
  const [loading, setLoading] = useState(true);
  const [places, setPlaces] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchPlaces();
        setPlaces(data);
        setError(null);
      } catch (err) {
        if (err.message === "404") {
          setError("요청하신 데이터를 찾을 수 없습니다 404");
        } else {
          setError("데이터를 불러오는 중 오류가 발생했습니다");
        }
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (error) return <p className="text-2xl font-bold text-gray-500">{error}</p>;

  return (
    <div className="w-[1270px] p-10">
      <h1 className="p-4 w-full">맛집 목록</h1>
      {loading ? (
        <p className="text-center">맛집 정보를 불러오는 중입니다...</p>
      ) : (
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
      )}
    </div>
  );
}
