import express from 'express';
const router = express.Router();
import { getFilms, getFilmByID, createFilm, updateFilm, deleteFilm } from
'../controllers/film.controller.js';
import {auth} from "../middleware/auth.js";

/**
 * @route GET /api/films
 * @desc Get All films
 * @access Public
 */
router.get('/',getFilms);
/**
 * @route POST /api/films
 * @desc Ajouter un films
 * @access Public
 */
router.post('/', createFilm);
/**
 * @route GET /api/films/:id
 * @desc Renvoyer un films
 * @access Public
 */
router.get('/:id', getFilmByID);
/**
 * @route PUT /api/films/:id
 * @desc Modifier un films
 * @access Public
 */
router.put('/:id', updateFilm);
/**
 * @route DELETE /api/films/:id
 * @desc Supprimer un films
 * @access Public
 */
router.delete('/:id', deleteFilm);
export default router; 