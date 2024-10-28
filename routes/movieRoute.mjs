import express from 'express';
import Movie from '../models/movieSchema.mjs';

const router = express.Router();


// Create
router.post('/', async (req, res) => {
    try {

        let newMovie = new Movie(req.body);

        await newMovie.save();

        res.status(201).json(newMovie);

    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server error'});
    }
});


// Read
router.get('/', async (req, res) => {
    try {
        let allMovies = await Movie.find({});

        res.json(allMovies);

    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server error'});
    }
});


// Read by ID
router.get('/:id', async (req, res) => {
    try {
        let movie = await Movie.findById(req.params.id);

        res.json(movie);

    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server error'});
    }
});


// Update
router.patch('/:id', async (req, res) => {
    try {

        let updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.json(updatedMovie);

    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server error'});
    }
});


// Delete
router.delete('/:id', async (req, res) => {
    try {

        let deleteMovie = await Movie.findByIdAndDelete(req.params.id);

        res.json(deleteMovie);

    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server error'});
    }
});


export default router;