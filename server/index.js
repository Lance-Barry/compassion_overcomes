const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sqlite = require('sqlite3').verbose();
const PORT = 2048;
const dbFilename = "./compassion-overcomes2.sqlite"
 
// open database in memory
let db = new sqlite.Database(dbFilename, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log(`Connected to the ${dbFilename} database.`);
});

const app = express();

// We'll need this to parse json sent in a POST request from React/Client
app.use(bodyParser.json());
app.use(cors());

// www.google.com/ => render a page
// localhost:3000/ => sending a message/string that says "Hello, Lance"

app.get("/", (req, res) => {
  res.send("Hello, Lance");
})

// when we go to localhost:${PORT}/opportunities = localhost:2048/opportunities
// send the array of opportunities
app.get("/opportunities", (req, res) => {
  // Run query to get all the opportunites from the database
  let query = "SELECT * FROM Opportunities"

  db.all(query, [], (err, rows) => {
   if (err) {
     throw err;
   }
   
   res.send(rows)
  })
})

app.post('/opportunities', (req, res) => {
  console.log("\npost request received\n")
  const opp = req.body;
  const query = `INSERT INTO Opportunities("Organizations", "Disaster", "isActive", "RallyPoint", "Details")
                 VALUES (?, ?, ?, ?, ?)`
  
  db.run(query, [opp.Organizations, opp.Disaster, opp.isActive, opp.RallyPoint, opp.Details], (err) => {
    if (err) {
      return console.log(err.message);
    }
    // get the last insert id
    console.log(`A row has been inserted`);
  });

  console.log(req.body)
  res.send(opp)
})

// 5. Set up post route to receive opportunity data from React
// app.post("/opportunities", (req, res) => {
//   res.send("Received POST request")
// })

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));