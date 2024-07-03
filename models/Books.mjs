// models/Books.mjs
import mongoose from 'mongoose';

const { Schema } = mongoose;

const bookSchema = new Schema({
  year: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    unique: true,
    required: true
  },
  pages: {
    type: Number,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    required: true,
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'user'
    }
  ]
});

const Book = mongoose.model('book', bookSchema);

export default Book;
