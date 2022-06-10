import mongoose from 'mongoose';

import Description from '../models/Description.model.js';

export const getDescription = async (req, res) => { 
    try {
        const desc = await Description.find();
                
        res.status(200).json(desc);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getDescriptionByID = async (req, res) => { 
    try {
        const desc = await Description.findById(req.params.id);
        
        res.status(200).json(desc);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createDescription= async (req, res) => {
    const { descrpfilm } = req.body;

    const newDescription = new Description({ descrpfilm:descrpfilm })

    try {
        await newDescription.save();

        res.status(201).json(newDescription );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateDescription= async (req, res) => {
    const { id } = req.params;
    const { descrpfilm } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de description avec un id: ${id}`);

    const d1 = { descrpfilm:descrpfilm};

    await Description.findByIdAndUpdate(id, d1);

    res.json(d1);
}

export const deleteDescription = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de description avec l'ID: ${id}`);

    await Description.findByIdAndDelete(id);

    res.json({ message: "description supprimé avec succès." });
}
