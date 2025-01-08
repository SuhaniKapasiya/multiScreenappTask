

const { Router } = require("express");

const {createCarousal,getCarousal} = require('../controllers/carousalController')

const router = Router();


router.post("/createCarousal", createCarousal);
router.get('/getCarousal',getCarousal);


module.exports = router;