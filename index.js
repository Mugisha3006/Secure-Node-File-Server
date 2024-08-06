import express from 'express';
import morgan from 'morgan';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 4000;

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

// serve static files from the public directory
app.use(express.static(join(__dirname, 'public')))

// hard coded password
const correctPassword = 'masjose12';

// basic route 
app.get('/', (req, res) => {
    res.send('Welcome to the Server <a href="/login.html">LogIn</a>');
})

// login route
app.post('/login', (req, res) => {
    const { password } = req.body;
    if (password === correctPassword) {
        res.redirect('/node-course.html');
    } else {
        res.status(401).send('Incorrect Password <a href="/login.html">Try Again</a>');
    }
})

// start the server
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
})