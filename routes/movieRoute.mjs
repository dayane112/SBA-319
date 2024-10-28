import express from 'express';
import Movie from '../models/movieSchema.mjs';

const router = express.Router();


// Create
router.post('/', async (req, res) => {
    try {

        let movie = new Movie(req.body);

        await movie.save();

        res.status(201).json(movie);

    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server error'});
    }
});


// Read
router.get('/', async (req, res) => {
    try {
        let movies = await Movie.find({});

        res.json(movies);

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