// graphql/resolvers.mjs
import User from '../models/Users.mjs';
import Book from '../models/Books.mjs';

const resolvers = {
  Query: {
    users: async () => await User.find().populate('book'),
    user: async (_, { id }) => await User.findById(id).populate('book'),
    books: async () => await Book.find().populate('users'),
    book: async (_, { id }) => await Book.findById(id).populate('users'),
    findBookByName: async (_, { name }) => {
      return await Book.findOne({ name }).populate('users');
    },
  },
  Mutation: {
    createUser: async (_, { name, email, bookId }) => {
      const book = await Book.findById(bookId);
      if (!book) throw new Error('Libro no encontrado');

      const user = new User({ name, email, book: bookId });
      await user.save();

      book.users.push(user._id.toString());
      await book.save();

      return {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        book: {
          id: book._id.toString(),
          name: book.name
        }
      };
    },
    updateUser: async (_, { id, name, email }) => {
      const user = await User.findByIdAndUpdate(id, { name, email }, { new: true });
      if (!user) throw new Error('Usuario no encontrado');
      return user;
    },
    deleteUser: async (_, { id }) => {
      const user = await User.findByIdAndDelete(id);
      if (!user) throw new Error('Usuario no encontrado');

      await Book.findOneAndUpdate({ users: id }, { $pull: { users: id } });

      return user;
    },
    createBook: async (_, { year, name, pages, author, status }) => {
      const book = new Book({ year, name, pages, author, status });
      return await book.save();
    },
    updateBook: async (_, { id, year, name, pages, author, status }) => {
      const book = await Book.findByIdAndUpdate(id, { year, name, pages, author, status }, { new: true });
      if (!book) throw new Error('Libro no encontrado');
      return book;
    },
    deleteBook: async (_, { id }) => {
      const book = await Book.findByIdAndDelete(id);
      if (!book) throw new Error('Libro no encontrado');
      return book;
    }
  }
};

export default resolvers;
