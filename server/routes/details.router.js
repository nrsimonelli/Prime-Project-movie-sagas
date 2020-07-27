const express = require('express');
const router = express.Router();
const pool = require("../modules/pool");

router.get('/', (req, res) => {
    const queryText = 
    `SELECT title, array_agg(name)
    FROM movies
    JOIN movie_genre ON movie_genre.movie_id = movies.id
    JOIN genres ON movie_genre.genre_id = genres.id
    GROUP BY movies.id;`;
    pool
        .query(queryText)
        .then((result) => {
            console.log("in /details GET");
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});

router.put("/", (req, res) => {
        console.log("req.body is", req.body);
        const queryText = `UPDATE "movies" SET "title"=$1, "description"=$2 WHERE "id"=$3;`;
        const queryValues = [req.body.title, req.body.description, req.body.id];
        pool
            .query(queryText, queryValues)
            .then((result) => {
                console.log("in /api/details GET");
                res.send(result.rows);
            })
            .catch((error) => {
                console.log(`PUT error:`, error);
                res.sendStatus(500);
            });
});

module.exports = router;