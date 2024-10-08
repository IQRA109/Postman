const express = require('express');
const fs = require('fs');
const app = express();
const port = 5500;

app.use(express.json());

app.post('/save', (req, res) => {
    const { anime1, anime2 } = req.body;

    fs.writeFile('anime.txt', `Anime 1: ${anime1}, Anime 2: ${anime2}`, (err) => {
        if (err) {
            return res.status(500).send('Error saving the anime.');
        }
        res.send('Anime saved successfully.');
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
