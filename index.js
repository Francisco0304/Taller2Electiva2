import express from 'express';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { db } from './config/db.mjs'; 
import typeDefs from './graphql/schema.mjs';
import resolvers from './graphql/resolvers.mjs';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Creación del servidor Apollo
const server = new ApolloServer({
    typeDefs,
    resolvers
});

// Inicio del servidor
async function startServer() {
    const { url } = await startStandaloneServer(server, {
        listen: { port: 3600 }
    });

    console.log(`🚀 Servidor listo en ${url}`);
}



startServer().catch(error => {
    console.error('Error al iniciar el servidor:', error);
});


  
