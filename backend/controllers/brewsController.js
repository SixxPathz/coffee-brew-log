
const { Brew } = require("../models");

// Get all brews, optional filter by method
exports.getAllBrews = async (req, res) => {
  try {
    const filter = {};
    if (req.query.method) {
      filter.method = req.query.method;
    }
    const brews = await Brew.findAll({ where: filter });
    res.status(200).json(brews);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get single brew by ID
exports.getBrewById = async (req, res) => {
  try {
    const brew = await Brew.findByPk(req.params.id);
    if (!brew) return res.status(404).json({ error: "Not found" });
    res.status(200).json(brew);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// Create new brew
exports.createBrew = async (req, res) => {
  console.log("Incoming POST body:", req.body);

  try {
    const newBrew = await Brew.create({
      beans: req.body.beans,
      method: req.body.method,
      coffeeGrams: req.body.coffeeGrams,
      waterGrams: req.body.waterGrams,
      rating: req.body.rating,
      tastingNotes: req.body.tastingNotes,
    });

    console.log("Saved Brew:", newBrew);
    res.status(201).json(newBrew);
  } catch (error) {
    console.error("Error saving brew:", error);
    res.status(400).json({ error: error.message });
  }
};

// Update brew
exports.updateBrew = async (req, res) => {
  const { beans, method, coffeeGrams, waterGrams, rating, tastingNotes } = req.body;
  if (!beans || !method || !coffeeGrams || !waterGrams || !rating || !tastingNotes) {
    return res.status(400).json({ error: "All fields required" });
  }
  try {
    const brew = await Brew.findByPk(req.params.id);
    if (!brew) return res.status(404).json({ error: "Not found" });
    await brew.update({ beans, method, coffeeGrams, waterGrams, rating, tastingNotes });
    res.status(200).json(brew);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// Delete brew
exports.deleteBrew = async (req, res) => {
  try {
    const brew = await Brew.findByPk(req.params.id);
    if (!brew) return res.status(404).json({ error: "Not found" });
    await brew.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
