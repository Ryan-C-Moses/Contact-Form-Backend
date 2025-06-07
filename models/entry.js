import mongoose from "mongoose";

const {Schema} = mongoose;

const entrySchema = new Schema({
    timestamp: {type: Date, default: Date.now},
    firstName: String,
    lastName: String,
    email: String,
    generalEnquiry: Boolean,
    supportRequest: Boolean,
    message: String,
    consent: Boolean
});

const Entry = mongoose.model('Entry', entrySchema)

export default Entry;