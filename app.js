import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';
import genreRouter from "./routes/genre.route.js"
import titreRouter from "./routes/titre.route.js";
import descriptionRouter from "./routes/description.route.js";
import filmRouter from "./routes/film.route.js";
//import userRouter from "./routes/user.route.js"
import clientRouter from "./routes/client.route.js";
import commandeRouter from "./routes/commande.route.js";
import lignecommandeRouter from "./routes/lignecommande.route.js"; 
const app = express();

dotenv.config();

app.use(express.json());

app.use(cors());

// Connexion à la base données
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(() => {console.log("Connexion à la base de données réussie");
   }).catch(err => {
    console.log('Impossible de se connecter à la base de données', err);
    process.exit();
   });

app.use('/api/genres', genreRouter);
app.use('/api/titres', titreRouter);
app.use('/api/descriptions', descriptionRouter);
app.use('/api/films', filmRouter);
//app.use('/api/users', userRouter); 
app.use('/api/users', clientRouter);
app.use('/api/commandes', commandeRouter);
app.use('/api/commandes', lignecommandeRouter); 
app.get("/",(req,res)=>{
res.send("Films");
});

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`); });
