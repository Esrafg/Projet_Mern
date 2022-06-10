import mongoose from "mongoose"
var descriptionSchema = mongoose.Schema({
    descrpfilm: String
    
});
const Description = mongoose.model('Description', descriptionSchema);
export default Description
