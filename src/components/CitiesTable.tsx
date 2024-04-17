import React, { useEffect, useState } from "react";
import { fetchCitiesData } from "../services/citiesApi";
import InfiniteScroll from "react-infinite-scroll-component";

interface Coordinates {
  lat: number;
  lon: number;
}

interface City {
  name: string;
  cou_name_en: string;
  timezone: string;
  coordinates: Coordinates;
}

const CitiesTable = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetchCitiesData();
      console.log(response);
      const citiesData = response.results;
      setCities((prevCities) => [...prevCities, ...citiesData]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching cities data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <InfiniteScroll
      dataLength={cities.length}
      next={fetchData}
      hasMore={true}
      loader={<p>Loading...</p>}
      endMessage={<p>No more data to load.</p>}
    >
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 text-zinc-700">City Name</th>
            <th className="px-4 py-2 text-zinc-700">Country</th>
            <th className="px-4 py-2 text-zinc-700">Timezone</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((city, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">
              {city.name}
              </td>
              <td className="border px-4 py-2">{city.cou_name_en}</td>
              <td className="border px-4 py-2">{city.timezone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </InfiniteScroll>
  );
};

export default CitiesTable;
