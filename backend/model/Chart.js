const mongoose = require('mongoose');


const ChartSchema = new mongoose.Schema({

    chartType: {
        type: String,
        required: true,
        enum : ['line', 'pie']
    },
    
    labels:[String],

    datasets:[{
        label: {
            type: String,
            required: true
        },
        data: [Number],
        fill: {
            type: Boolean,
            required: true  
        },
        backgroundColor: {
            type: String,
            required: true
        },
        borderColor: {
            type: String,
            required: true
        },
        borderWidth: {
            type: Number,
            required: true
        },
        tension: {
            type: Number,
            required: true
        }
    }]
});

module.exports = mongoose.model('Chart', ChartSchema);