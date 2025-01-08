const Chart = require('../model/Chart');


const createChart = async (req, res) => {
    try {
        
        const newChart = new Chart(req.body);
        const savedChart = await newChart.save();
        res.status(201).json(savedChart);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


const getChart = async (req, res) => {
    try {
        const charts = await Chart.find();
        res.status(200).json(charts);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}


module.exports={createChart,getChart}