const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const googlebookSchema = new Schema({
    id: { type: String, required: true },
    authors: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true }, 
    link: { type: String, required: true }, 
    title: { type: String, required: true }
});

const Googlebook = mongoose.model("Googlebook", googlebookSchema);
module.exports = Googlebook;