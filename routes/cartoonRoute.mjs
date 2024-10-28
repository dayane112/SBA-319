import express from 'express';
import Cartoon from '../models/cartoonSchema.mjs';

const router = express.Router();


// Create
router.post('/', async (req, res) => {
    try {

        let newCartoon = new Cartoon(req.body);

        await newCartoon.save();

        res.status(200).json(newCartoon);

    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server error'});
    }
});


// Read
router.get('/', async (req, res) => {
    try {

        let allCartoons = await Cartoon.find({});

        res.json(allCartoons);

    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server error'});
    }
});


// Read by ID
router.get('/:id', async (req, res) => {
    try {

        let oneCartoon = await Cartoon.findById(req.params.id);

        res.json(oneCartoon);

    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server error'});
    }
});


// Update
router.patch('/:id', async (req, res) => {
    try {

        let updatedCartoon = await Cartoon.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.json(updatedCartoon);

    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server error'});
    }
});


// Delete
router.delete('/:id', async (req, res) => {
    try {

        let deleteCartoon = await Cartoon.findByIdAndDelete(req.params.id);
        
        res.json(deleteCartoon);

    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server error'});
    }
});


export default router;