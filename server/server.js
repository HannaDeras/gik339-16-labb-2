//console.log("Vår första node-server");

const express = require("express"); //detta gör att man kan hämta det man behöver från node_modules mappen och få tillgång till de verktyg som ligger i "express".

const server = express(); // denna rad innehåller en webbserver

const sqlite3 = require("sqlite3").verbose();

server
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");

    next();
  });

server.use(express.json()).use(express.urlencoded({ extended: false }));

server.get("/users", (req, res) => {
  // dett ger oss allt vi behöver för att kunna hantera en förfrågan. Allt som skrivs här inne är det som ska hända.
  const method = req.method;
  const url = req.url;

  const db = new sqlite3.Database("./gik339-labb2.db");
  const sql = "SELECT* FROM users"; //förberedar för att kunna ställa en fråga till databasen.

  db.all(sql, (err, rows) => {
    //här ställer vi en fråga till databasen
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(rows);
    }
  });

  //res.send(`Du gjorde en ${method}-förfrågan till ${url}`);
});

server.post("/users", (req, res) => {
  const body = req.body;
  res.send(body);
});

server.listen(3000, () => console.log("Server is running")); //gör det möjligt att göra anrop till servern
