import mongoose from "mongoose"
var genreSchema = mongoose.Schema({
    genrefilm: String
    
});
const Genre = mongoose.model('Genre', genreSchema);
export default Genre
