var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
  
var ListingSchema = new Schema({
    name : String,
    type : String,
    address : String,
    brokerName : String,
    price : String,
    rentalAllowed : String,
    description: String
});

module.exports = mongoose.model('Listing', ListingSchema);