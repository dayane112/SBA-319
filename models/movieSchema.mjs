// import
import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    genre: {
        type: [String],
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    minutes: {
        type: Number,
        required: true
    }
});

movieSchema.index({ genre: -1 })

export default mongoose.model('Movie', movieSchema);