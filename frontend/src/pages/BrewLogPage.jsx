import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FilterDropdown from "../components/FilterDropdown";
import { PencilSquareIcon } from "@heroicons/react/24/solid";

const BrewLogPage = () => {
  const [brews, setBrews] = useState([]);
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.title = `Brews: ${brews.length}`;
  }, [brews.length]);

  useEffect(() => {
    let url = `${process.env.REACT_APP_API_URL || ""}/api/brews`;
    if (filter) url += `?method=${encodeURIComponent(filter)}`;
    fetch(url)
      .then((res) => res.json())
      .then(setBrews);
  }, [filter, location]);

  // List all possible methods for the filter dropdown
  const allMethods = [
    "Aeropress",
    "Pour Over",
    "French Press",
    "Drip Coffee",
    "V60"
  ];

  // Helper to get rating badge color (minimal, blue accent)
  const getRatingBadgeClasses = (rating) => {
    switch (Number(rating)) {
      case 5:
        return 'border-green-500 bg-black text-green-400';
      case 4:
        return 'border-blue-400 bg-black text-blue-300';
      case 3:
        return 'border-gray-700 bg-black text-gray-300';
      case 2:
        return 'border-yellow-600 bg-black text-yellow-300';
      case 1:
      default:
        return 'border-red-600 bg-black text-red-400';
    }
  };

  return (
    <div className="min-h-screen bg-black px-2 sm:px-4 pb-16">
      {/* Header */}
      <header className="flex flex-row items-center justify-between gap-4 py-6 sm:py-8 max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">Brew Log</h1>
        <button
          className="rounded bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 sm:px-6 sm:py-3 flex items-center justify-center transition-all duration-200 text-base sm:text-lg font-semibold border-none w-auto"
          onClick={() => navigate("/add")}
          aria-label="Add Brew"
        >
          + Add
        </button>
      </header>

      {/* Filter */}
      <div className="max-w-2xl mx-auto mb-4 sm:mb-6">
        <FilterDropdown
          methods={allMethods}
          value={filter}
          onChange={setFilter}
        />
      </div>

      {/* Brew List */}
      <div className="flex flex-col gap-4 sm:gap-6 max-w-2xl mx-auto">
        {brews.map((brew) => (
          <div
            key={brew.id}
            className="flex flex-row items-center rounded-xl p-4 sm:p-6 border border-gray-900 bg-white/5 transition group relative"
          >
            {/* Rating badge */}
            <div className="flex-shrink-0 mr-4 sm:mr-6">
              <div className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full border-2 font-extrabold text-xl sm:text-2xl ${getRatingBadgeClasses(brew.rating)}`}>
                {brew.rating}
              </div>
            </div>

            {/* Brew details */}
            <div className="flex-1 w-full">
              <div className="font-bold mb-1 text-lg sm:text-2xl text-white font-serif">
                {brew.beans}
              </div>
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="rounded bg-gray-900 text-gray-200 px-3 py-1 text-xs font-medium border border-gray-900">
                  {brew.method}
                </span>
                <span className="rounded bg-gray-900 text-gray-200 px-3 py-1 text-xs font-medium border border-gray-900">
                  <span role="img" aria-label="coffee">☕</span> {brew.coffeeGrams}g
                </span>
                <span className="rounded bg-gray-900 text-gray-200 px-3 py-1 text-xs font-medium border border-gray-900">
                  <span role="img" aria-label="water">💧</span> {brew.waterGrams}g
                </span>
              </div>
              {/* Tasting notes */}
              {brew.tastingNotes && (
                <div className="mt-3 text-sm text-gray-300">
                  {brew.tastingNotes}
                </div>
              )}
            </div>

            {/* Edit button */}
            <button
              className="ml-4 sm:ml-4 rounded bg-gray-900 border-none px-4 py-2 text-sm text-white hover:bg-blue-600 transition flex items-center gap-1 w-auto justify-center"
              onClick={() => navigate(`/edit/${brew.id}`)}
            >
              <PencilSquareIcon className="w-5 h-5" />
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrewLogPage;
