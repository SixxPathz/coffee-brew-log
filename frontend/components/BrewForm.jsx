
import React, { useState } from "react";

const BrewForm = ({ initialData = {}, onSave }) => {
  const [beans, setBeans] = useState(initialData.beans || "");
  const [method, setMethod] = useState(initialData.method || "");
  const [coffeeGrams, setCoffeeGrams] = useState(initialData.coffeeGrams || "");
  const [waterGrams, setWaterGrams] = useState(initialData.waterGrams || "");
  const [rating, setRating] = useState(initialData.rating || "");
  const [tastingNotes, setTastingNotes] = useState(initialData.tastingNotes || "");

  const isValid = beans && method && coffeeGrams && waterGrams && rating && tastingNotes;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    onSave({ beans, method, coffeeGrams, waterGrams, rating, tastingNotes });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 max-w-md mx-auto bg-white rounded shadow">
      <label className="font-semibold">Beans</label>
      <input
        className="border rounded px-3 py-2"
        value={beans}
        onChange={(e) => setBeans(e.target.value)}
        placeholder="Type of beans"
      />

      <label className="font-semibold">Method</label>
      <select
        className="border rounded px-3 py-2"
        value={method}
        onChange={(e) => setMethod(e.target.value)}
      >
        <option value="">Select a method</option>
        <option value="Aeropress">Aeropress</option>
        <option value="Pour Over">Pour Over</option>
        <option value="French Press">French Press</option>
      </select>

      <div className="flex gap-4">
        <div className="flex-1">
          <label className="font-semibold">Coffee Grams</label>
          <input
            type="number"
            className="border rounded px-3 py-2 w-full"
            value={coffeeGrams}
            onChange={(e) => setCoffeeGrams(e.target.value)}
            placeholder="e.g. 15"
          />
        </div>
        <div className="flex-1">
          <label className="font-semibold">Water Grams</label>
          <input
            type="number"
            className="border rounded px-3 py-2 w-full"
            value={waterGrams}
            onChange={(e) => setWaterGrams(e.target.value)}
            placeholder="e.g. 200"
          />
        </div>
      </div>

      <label className="font-semibold">Rating (Out of 5)</label>
      <select
        className="border rounded px-3 py-2"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      >
        <option value="">Select Rating</option>
        {[1, 2, 3, 4, 5].map((n) => (
          <option key={n} value={n}>{n}</option>
        ))}
      </select>

      <label className="font-semibold">Tasting Notes</label>
      <textarea
        className="border rounded px-3 py-2"
        value={tastingNotes}
        onChange={(e) => setTastingNotes(e.target.value)}
        placeholder="Describe the taste..."
      />

      <button
        type="submit"
        disabled={!isValid}
        className={`rounded bg-black text-white px-4 py-2 mt-2 transition-opacity ${isValid ? '' : 'opacity-50 cursor-not-allowed'}`}
      >
        Save
      </button>
    </form>
  );
};

export default BrewForm;
