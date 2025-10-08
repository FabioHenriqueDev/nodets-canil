import express  from "express";
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index.js'
import { fileURLToPath } from "url";


dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = express();

server.set('view engine', 'mustache'); //“Vou usar Mustache para renderizar meus HTMLs.”
server.set('views', path.join(__dirname, 'views')); // “Meus templates HTML estão na pasta views.”
server.engine('mustache', mustache()) // “Quando eu pedir para renderizar um .mustache, usa a função do Mustache para transformar isso em HTML com os dados que eu passar.”
server.use(express.static(path.join(__dirname, '../public')));
server.use(mainRoutes);
server.use((req, res) => {
    res.render('pages/404')
})

server.listen(process.env.PORT);