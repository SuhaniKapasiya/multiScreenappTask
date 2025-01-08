const mongoose = require('mongoose');


const CarousalSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    unique: true,
  },
});

module.exports = mongoose.model('Carousal', CarousalSchema);