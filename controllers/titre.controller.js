import mongoose from 'mongoose';
import Titre from '../models/Titre.models.js';
export const getTitres = async (req, res) => {
try {
const t = await Titre.find();

res.status(200).json(t);
} catch (error) {
res.status(404).json({ message: error.message });
}
}
export const getTitreByID = async (req, res) => {
try {
const t = await Titre.findById(req.params.id);
res.status(200).json(t);
} catch (error) {
res.status(404).json({ message: error.message });
}
}
export const createTitre = async (req, res) => {
const { nomfilm } = req.body;
const newTitre = new Titre({ nomfilm:nomfilm })
try {
await newTitre.save();
res.status(201).json(newTitre );
} catch (error) {
res.status(409).json({ message: error.message });
}
}
export const updateTitre= async (req, res) => {
const { id } = req.params;
const { nomfilm } = req.body;
if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de titre avec un id: ${id}`);
const t1 = { nomfilm:nomfilm};
await Titre.findByIdAndUpdate(id, t1);
res.json(t1);
}
export const deleteTitre = async (req, res) => {
const { id } = req.params;
if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de titre avec l'ID: ${id}`);
await Titre.findByIdAndDelete(id);
res.json({ message: "titre supprimé avec succès." });
}