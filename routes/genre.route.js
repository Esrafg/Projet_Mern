import express from 'express';
const router = express.Router();

import { getGenre, getGenreByID, createGenre, updateGenre, deleteGenre } from '../controllers/genre.controller.js';

/**
 * @route   GET /api/genres
 * @desc    Get All genres
 * @access  Public
 */
router.get('/', getGenre);

/**
 * @route   POST /api/genres
 * @desc    Ajouter un genres
 * @access  Public
 */
router.post('/', createGenre);

/**
 * @route   GET /api/genres/:id
 * @desc    
 * @access  Public
 */
router.get('/:id', getGenreByID);

/**
 * @route   PUT /api/genres/:id
 * @desc    
 * @access  Public
 */
router.put('/:id', updateGenre);

/**
 * @route  DELETE /api/genres/:id
 * @desc    
 * @access  Public
 */
router.delete('/:id', deleteGenre);

export default router;
