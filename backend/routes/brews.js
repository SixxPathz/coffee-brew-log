
const express = require("express");
const router = express.Router();
const brewsController = require("../controllers/brewsController");

// GET /api/brews
router.get("/", brewsController.getAllBrews);

// GET /api/brews/:id
router.get("/:id", brewsController.getBrewById);

// POST /api/brews
router.post("/", brewsController.createBrew);

// PUT /api/brews/:id
router.put("/:id", brewsController.updateBrew);

// DELETE /api/brews/:id
router.delete("/:id", brewsController.deleteBrew);

module.exports = router;
