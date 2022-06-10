import express from 'express';
const router = express.Router();

import { getDescription, getDescriptionByID, createDescription, updateDescription, deleteDescription } from '../controllers/description.controller.js';

/**
 * @route   GET /api/
 * @desc    Get All 
 * @access  Public
 */
router.get('/', getDescription);

/**
 * @route   POST /api/
 * @desc    Ajouter 
 * @access  Public
 */
router.post('/', createDescription);

/**
 * @route   GET /api//:id
 * @desc    
 * @access  Public
 */
router.get('/:id', getDescriptionByID);

/**
 * @route   PUT /api//:id
 * @desc    
 * @access  Public
 */
router.put('/:id', updateDescription);

/**
 * @route  DELETE /api//:id
 * @desc    
 * @access  Public
 */
router.delete('/:id', deleteDescription);

export default router;
