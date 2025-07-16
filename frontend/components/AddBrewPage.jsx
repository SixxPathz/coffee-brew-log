
import React from "react";
import { useNavigate } from "react-router-dom";
import BrewForm from "./BrewForm";

const AddBrewPage = () => {
  const navigate = useNavigate();

  const handleSave = async (brew) => {
    await fetch("/api/brews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(brew),
    });
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Add a Brew</h2>
        <button
          className="text-2xl font-bold text-gray-500 hover:text-black"
          onClick={() => navigate("/")}
          aria-label="Close"
        >
          ×
        </button>
      </div>
      <BrewForm onSave={handleSave} />
    </div>
  );
};

export default AddBrewPage;
