// import
import mongoose from 'mongoose';

const cartoonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    genre: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true
    },
    seasons: {
        type: Number,
        required: true
    }
});

showSchema.index({ seasons: -1 })

export default mongoose.model('Cartoon', cartoonSchema);