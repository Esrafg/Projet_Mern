import mongoose from 'mongoose';
import Film from '../models/Film.model.js';
export const getFilms = async (req, res) => {
 try {
 const film = await Film.find()
 .populate('genre')
 .populate('titre')
 .populate('description');
 res.status(200).json(film);
 } catch (error) {
 res.status(404).json({ message: error.message });
 }
}
export const getFilmByID = async (req, res) => {
 try {
 const film = await Film.findById(req.params.id)
 .populate('genre')
 .populate('titre')
 .populate('description');
 res.status(200).json(film);
 } catch (error) {
 res.status(404).json({ message: error.message });
 }
}
export const createFilm = async (req, res) => {
 const {
isbn,annedition,prix,affichage,couverture,genre,titre,description } =
req.body;

 const newFilm = new Film({
isbn:isbn,titre:titre,annedition:annedition,prix:prix,affichage:affichage,
couverture:couverture,genre:genre,titre:titre, description:description})
 try {
 await newFilm.save();
 res.status(201).json(newFilm );
 } catch (error) {
 res.status(409).json({ message: error.message });
 }
}
export const updateFilm= async (req, res) => {
 const { id } = req.params;
 const {
isbn,annedition,prix,affichage,couverture,genre ,titre,description} =
req.body;
 if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas
de film avec un id: ${id}`);
 const f1 = {
isbn:isbn,annedition:annedition,prix:prix,affichage:affichage,couverture:couverture,genre:genre,titre:titre,description:description, _id: id
};
 await Film.findByIdAndUpdate(id, f1);
 res.json(f1);
}
export const deleteFilm = async (req, res) => {
 const { id } = req.params;
 if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas
de film avec l'ID: ${id}`);
 await Film.findByIdAndDelete(id);
 res.json({ message: "film supprimé avec succès." });
};