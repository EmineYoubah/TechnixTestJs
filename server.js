const cors = require('cors');
// Enable CORS for all routes
const express = require('express');
const User = require('./models/user');
require('./config/cennect')
const app = express();
app.use(cors());
app.use(express.json());
const { userRouter, userAllRouter } = require('./route/userRoute');
app.use("/allusers/",userRouter);
app.use("/actifusers/",userAllRouter);

// Écrivez un serveur Node.js simple qui écoute 
// sur le port 3000 et répond avec "Hello, World!" 
// lorsqu'il est accédé. 

// reponce j'ai changer le port ver 3001 car le port 3000 ser pour Next/reacte :
app.listen( 3001, () => {
        console.log('server work');
});