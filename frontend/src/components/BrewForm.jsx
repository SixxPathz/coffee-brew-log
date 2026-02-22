import React, { useState } from "react";

const BrewForm = ({ initialData = {}, onSave, onDelete }) => {
  const [beans, setBeans] = useState(initialData.beans || "");
  const [method, setMethod] = useState(initialData.method || "");
  const [coffeeGrams, setCoffeeGrams] = useState(
    typeof initialData.coffeeGrams === "number" ? initialData.coffeeGrams : initialData.coffeeGrams ? parseFloat(initialData.coffeeGrams) : ""
  );
  const [waterGrams, setWaterGrams] = useState(
    typeof initialData.waterGrams === "number" ? initialData.waterGrams : initialData.waterGrams ? parseFloat(initialData.waterGrams) : ""
  );
  const [rating, setRating] = useState(initialData.rating || "");
  const [tastingNotes, setTastingNotes] = useState(initialData.tastingNotes || "");
  const [submitted, setSubmitted] = useState(false);

  const isValid =
    beans && 
    method && 
    coffeeGrams !== "" &&
    waterGrams !== "" &&
    typeof coffeeGrams === "number" &&
    typeof waterGrams === "number" &&
    !isNaN(coffeeGrams) &&
    !isNaN(waterGrams) &&
    coffeeGrams > 0 &&
    waterGrams > 0 &&
    rating &&
    tastingNotes;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (!isValid) {
      return;
    }
    onSave({
      beans,
      method,
      coffeeGrams,
      waterGrams,
      rating,
      tastingNotes
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5 bg-black rounded-xl p-4 sm:p-8">
      <div>
        <label className="font-semibold text-white text-base sm:text-lg">Beans</label>
        <input
          className="rounded border border-gray-700 px-3 sm:px-4 py-2 w-full mt-1 bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-base sm:text-lg placeholder:text-gray-400"
          value={beans}
          onChange={(e) => setBeans(e.target.value)}
          placeholder="Type of beans"
        />
        {submitted && !beans && (
          <div className="text-red-400 text-sm font-medium mt-1">Please enter the type of beans.</div>
        )}
      </div>
      <div>
        <label className="font-semibold text-white text-base sm:text-lg">Method</label>
        <select
          className="rounded border border-gray-700 px-3 sm:px-4 py-2 w-full mt-1 bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-base sm:text-lg"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        >
          <option value="">Select a method</option>
          <option value="Aeropress">Aeropress</option>
          <option value="Pour Over">Pour Over</option>
          <option value="French Press">French Press</option>
          <option value="Drip Coffee">Drip Coffee</option>
          <option value="V60">V60</option>
        </select>
        {submitted && !method && (
          <div className="text-red-400 text-sm font-medium mt-1">Please select a brew method.</div>
        )}
      </div>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <div className="flex-1">
          <label className="font-semibold text-white text-base sm:text-lg">Coffee Grams</label>
          <input
            type="number"
            step="0.01"
            min="0"
            className="rounded border border-gray-700 px-3 sm:px-4 py-2 w-full mt-1 bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-base sm:text-lg placeholder:text-gray-400"
            value={coffeeGrams}
            onChange={e => {
              const val = e.target.value;
              setCoffeeGrams(val === "" ? "" : parseFloat(val));
            }}
            placeholder="e.g. 18.5"
            required
          />
          {submitted && (coffeeGrams === "" || isNaN(coffeeGrams) || coffeeGrams <= 0) && (
            <div className="text-red-400 text-sm font-medium mt-1">Please enter a valid coffee grams value greater than 0.</div>
          )}
        </div>
        <div className="flex-1">
          <label className="font-semibold text-white text-base sm:text-lg">Water Grams</label>
          <input
            type="number"
            step="0.01"
            min="0"
            className="rounded border border-gray-700 px-3 sm:px-4 py-2 w-full mt-1 bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-base sm:text-lg placeholder:text-gray-400"
            value={waterGrams}
            onChange={e => {
              const val = e.target.value;
              setWaterGrams(val === "" ? "" : parseFloat(val));
            }}
            placeholder="e.g. 250"
            required
          />
          {submitted && (waterGrams === "" || isNaN(waterGrams) || waterGrams <= 0) && (
            <div className="text-red-400 text-sm font-medium mt-1">Please enter a valid water grams value greater than 0.</div>
          )}
        </div>
      </div>
      <div>
        <label className="font-semibold text-white text-base sm:text-lg">Rating (Out of 5)</label>
        <select
          className="rounded border border-gray-700 px-3 sm:px-4 py-2 w-full mt-1 bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-base sm:text-lg"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="">Select Rating</option>
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
        {submitted && !rating && (
          <div className="text-red-400 text-sm font-medium mt-1">Please select a rating.</div>
        )}
      </div>
      <div>
        <label className="font-semibold text-white text-base sm:text-lg">Tasting Notes</label>
        <textarea
          className="rounded border border-gray-700 px-3 sm:px-4 py-2 w-full mt-1 bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-base sm:text-lg placeholder:text-gray-400"
          value={tastingNotes}
          onChange={(e) => setTastingNotes(e.target.value)}
          placeholder="Describe the taste..."
        />
        {submitted && !tastingNotes && (
          <div className="text-red-400 text-sm font-medium mt-1">Please enter tasting notes.</div>
        )}
      </div>
      <div className={`flex ${onDelete ? 'flex-row' : 'flex-col'} sm:flex-row gap-2 mt-4`}>
        {onDelete && (
          <button
            type="button"
            onClick={onDelete}
            className="rounded bg-red-600 hover:bg-red-500 text-white px-6 py-2 font-semibold transition w-full sm:w-auto"
          >
            Delete
          </button>
        )}
        <button
          type="submit"
          className="rounded bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 font-semibold transition w-full sm:w-auto"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default BrewForm;
