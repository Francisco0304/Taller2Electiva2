// models/Users.mjs
import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  book: {
    type: Schema.Types.ObjectId,
    ref: 'book'
  }
});

const User = mongoose.model('user', userSchema);

export default User;
