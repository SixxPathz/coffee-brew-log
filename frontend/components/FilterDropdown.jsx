
import React from "react";

const FilterDropdown = ({ methods, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="mr-2 font-semibold">Filter by method:</label>
      <select
        className="border rounded px-3 py-2"
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
