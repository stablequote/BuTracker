const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { auth } = require('express-openid-connect');
require('dotenv').config();
const app = express();

// const config = require('../config/config')

// importing routes
const userRoutes = require('./routes/user.routes');
const issueRoutes = require('./routes/issue.routes');
const projectRoutes = require('./routes/project.routes');

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/projects', projectRoutes);
app.use('/issue', issueRoutes);
app.use('/user', userRoutes);
app.use(
    auth({
      authRequired: false,
      auth0Logout: true,
      issuerBaseURL: process.env.ISSUER_BASE_URL,
      baseURL: process.env.BASE_URL,
      clientID: process.env.CLIENT_ID,
      secret: process.env.SECRET,
      idpLogout: true,
    })
);

// mongoose connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('Conncted to DB!');
})
.catch(err => {
    console.log('Could not connect to the database');
    console.log(err);
})

// routes
app.get('/', (req, res) => {
    res.send('Back end')
})

// auth
app.get('/private', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : res.redirect('/login'));
});

app.listen(5002, () => {
    console.log('Server running on port 5002');
})