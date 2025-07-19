import React from "react";
import { useNavigate } from "react-router-dom";
import BrewForm from "../components/BrewForm";

const AddBrewPage = () => {
  const navigate = useNavigate();

  const handleSave = async (brew) => {
    await fetch(`${process.env.REACT_APP_API_URL || ""}/api/brews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(brew),
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-2 sm:px-4 py-6 sm:py-8">
      <div className="w-full max-w-md sm:max-w-lg bg-black rounded-xl p-4 sm:p-8">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif">Add a Brew</h2>
          <button
            className="text-2xl sm:text-3xl font-bold text-blue-400 hover:text-blue-200 transition rounded-full px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => navigate("/")}
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <BrewForm onSave={handleSave} />
      </div>
    </div>
  );
};

export default AddBrewPage;
