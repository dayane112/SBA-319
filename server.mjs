// Import
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './db/conn.mjs';
import showRoute from './routes/showRoute.mjs';
import movieRoute from './routes/movieRoute.mjs';
import cartoonRoute from './routes/cartoonRoute.mjs';
import { shows } from './data/showData.mjs';
import { movies } from './data/moviesData.mjs';
import { cartoons } from './data/cartoonData.mjs';
import Show from './models/showSchema.mjs';
import Movie from './models/movieSchema.mjs';
import Cartoon from './models/cartoonSchema.mjs';


// setup
const app = express();
dotenv.config();
let PORT = process.env.PORT || 3001


// DB connection
connectDB();


// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));


// routes
app.use('/shows', showRoute);
app.use('/movies', movieRoute);
app.use('/cartoons', cartoonRoute);

// Seeding
app.get('/seed/shows', async (req, res) => {
    await Show.deleteMany({});

    await Show.create(shows);

    res.send('Seeding database: show');
    
});

app.get('/seed/movies', async (req, res) => {
    await Movie.deleteMany({});

    await Movie.create(movies);

    res.send('Seeding database: movies');
});

app.get('/seed/cartoons', async (req, res) => {

    await Cartoon.deleteMany({});

    await Cartoon.create(cartoons);

    res.send('Seeding database: cartoons');
});


// listener
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});