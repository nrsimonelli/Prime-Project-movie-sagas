const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

router.get("/", (req, res) => {

  const queryText = `SELECT * FROM movies ORDER BY title ASC`;
  pool
    .query(queryText)
    .then((result) => {
      console.log("in /movies GET");
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

module.exports = router;
