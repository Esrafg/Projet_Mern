import mongoose from 'mongoose';

import Genre from '../models/Genre.model.js';

export const getGenre = async (req, res) => { 
    try {
        const gr = await Genre.find();
                
        res.status(200).json(gr);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getGenreByID = async (req, res) => { 
    try {
        const gr = await Genre.findById(req.params.id);
        
        res.status(200).json(gr);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createGenre = async (req, res) => {
    const { genrefilm } = req.body;

    const newGenre = new Genre({ genrefilm:genrefilm })

    try {
        await newGenre.save();

        res.status(201).json(newGenre );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateGenre= async (req, res) => {
    const { id } = req.params;
    const { genrefilm } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de genre avec un id: ${id}`);

    const gr1 = { genrefilm:genrefilm};

    await Genre.findByIdAndUpdate(id, gr1);

    res.json(gr1);
}

export const deleteGenre = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de genre avec l'ID: ${id}`);

    await Genre.findByIdAndDelete(id);

    res.json({ message: "genre supprimé avec succès." });
}
