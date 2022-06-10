import mongoose from "mongoose"
var FilmSchema = mongoose.Schema({
 isbn: String,
 annedition: Number,
 prix: Number,
 affichage : Number,
 couverture: String,
 genre: {
 type: mongoose.Schema.Types.ObjectId,
 ref: 'Genre'
 },
 titre: {
 type: mongoose.Schema.Types.ObjectId,
 ref: 'Titre'
 },
 description: [{
 type: mongoose.Schema.Types.ObjectId,
 ref: 'Description'
 }]
})
const Film = mongoose.model('Film', FilmSchema);
export default Film 
