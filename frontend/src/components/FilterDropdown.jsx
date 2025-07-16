import React from "react";

const FilterDropdown = ({ methods, value, onChange }) => {
  return (
    <div className="mb-4 flex items-center gap-1 sm:gap-2">
      <label className="font-semibold text-white text-base sm:text-lg">Filter by method:</label>
      <select
        className="rounded px-3 sm:px-4 py-2 bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-base sm:text-lg"
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        <option value="">All Methods</option>
        {methods.map((method) => (
          <option key={method} value={method}>{method}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;
