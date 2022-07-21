const {model, Schema} = require("mongoose")

const MessageSchema = new Schema({
    text: String,
    createdAt: String,
    createdBy: String,
});

module.exports  = model("Message", MessageSchema)