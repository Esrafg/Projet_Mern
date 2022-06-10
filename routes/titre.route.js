import express from 'express';
const router = express.Router();
import { getTitres, getTitreByID, createTitre, updateTitre,deleteTitre } from '../controllers/titre.controller.js';
/**
* @route GET /api/titre
* @desc Get All titre
* @access Public
*/
router.get('/', getTitres);
/**
* @route POST /api/titre
* @desc Ajouter un titre
* @access Public
*/
router.post('/', createTitre);
/**
* @route GET /api/titre/:id
* @desc Renvoyer un titre
* @access Public
*/
router.get('/:id', getTitreByID);
/**
* @route PUT /api/titre/:id
* @desc Modifier un titre
* @access Public
*/
router.put('/:id', updateTitre);
/**
* @route DELETE /api/titre/:id
* @desc Supprimer un titre
* @access Public
*/
router.delete('/:id', deleteTitre);
export default router;
