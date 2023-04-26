const mongoose = require("mongoose")
const quotesSchema = mongoose.Schema({
    quotes_type: String,
    quotes_text: {type:String,length:15},
    quotes_year: {type:Number,min:1000,max:10000}
})
module.exports = mongoose.model("quotes",quotesSchema)