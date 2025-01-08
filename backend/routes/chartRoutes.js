const { Router } = require("express");

const {
  createChart,
  getChart,
} = require("../controllers/chartController");

const router = Router();

router.post("/createChart", createChart);
router.get("/getChart", getChart);

module.exports = router;