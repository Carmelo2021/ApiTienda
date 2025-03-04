const mongoose = require('mongoose');
require('dotenv').config();

const URI =`mongodb+srv://superAdso:uBy0r5CbOmr3i9ZY@clusteradsi.nzwbkjo.mongodb.net/${process.env.BD}`

mongoose.connect(URI);

module.exports = mongoose;



