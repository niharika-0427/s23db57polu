const mongoose = require("mongoose")
const quotesSchema = mongoose.Schema({
quotes_type: String,
text: String,
year: Number
})
module.exports = mongoose.model("quotes",
quotesSchema)