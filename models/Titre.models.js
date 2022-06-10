import mongoose from "mongoose"
var titreSchema = mongoose.Schema({
nomfilm: String
})
const Titre = mongoose.model('Titre', titreSchema);
export default Titre