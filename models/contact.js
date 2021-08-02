const mongoose = require("mongoose");
const { Schema } = mongoose;

const contactSchema = new Schema({
  firstname: { type: String, required: 'first name is required'}, // String is shorthand for {type: String}
  Lastname: { type: String, required: 'Lastname is required'},
  Email:   { type: String, required: 'Functional email is required'},
  PhoneNumber: { type: Number, required: 'Functional Phone Number is required'},
});

module.exports.Contact = mongoose.model('Contact', contactSchema);
  // ready to go