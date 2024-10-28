import express from 'express';
import Show from '../models/showSchema.mjs'

const router = express.Router();


// Create
router.post('/', async (req, res) => {
    try {

        let show = new Show(req.body);

        await show.save();

        res.status(201).json(show);

    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server error'});
    };
});


// Read
router.get('/', async (req, res) => {
    try {

        let shows = await Show.find({});

        res.json(shows);

    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server error'});
    };
});


// Update
router.patch('/:id', async (req, res) => {
    try {

        let updatedShow = await Show.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.json(updatedShow);

    } catch (err) {
        rconsole.error(err);
        res.status(500).json({msg: 'Server error'});
    };
});


// Delete
router.delete('/:id', async (req, res) => {
    try {
       
        let deleteShow = await Song.findByIdAndDelete(req.params.id);

        res.json(deleteShow); 
        
    } catch (err) {
        console.error(err)
        res.status(500).json({msg: 'Server error'})
    }
})


export default router;