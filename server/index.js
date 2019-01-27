const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sqlite = require('sqlite3').verbose();
const PORT = 2048;

// 1. Make a compassion_overcomes database
// 2. Insert default data into database
const defaultOpportunities = [{
    id: 23782,
    organization: "Bethel Church",
    disaster: "Carr Fire",
    isActive: true,
    is18Up: true,
    rallyPoint: "Bethel’s College View campus to the Salvation Army building at 2691 Larkspur Ln, Redding, CA 96002",
    details: "As of Saturday, August 11, 2018, the Salvation Army Distribution Center has moved from Bethel’s College View campus. All donations and picking up of needed items by Carr Fire victims are now at that address. Visit https://www.bethel.com/carrfire/#resources for local resources and volunteer opportunities.",
  },
  {
    id: 332,
    organization: "Samaritan's Purse",
    disaster: "Hurricane Michael",
    isActive: true,
    is18Up: true,
    rallyPoint: "City Hall, 1st Ave and Main St., every morning at 8 a.m.",
    details: "Ongoing clean-up for local residents needed. Eye protection, gloves and work boots required.",
  },
  {
    id: 9121,
    organization: "Red Cross",
    disaster: "Spencer SD Tornado",
    isActive: false,
    is18Up: true,
    rallyPoint: "Red Cross Tent, located on high school football field every morning at 8 a.m. ",
    details: "F5 tornado struck city of Spencer causing catastrophic damage. Search and rescue efforts on-going. Eye protection, gloves and work boots required",
  },
]

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
  // const query = "SELECT * FROM opportunities"

  // db.all(query, (err, opps) => {
  //   if (err) throw err;
  //   else {
  //     // 4. send the data to the client/react
  //     res.send(opps);
  //   }
  // })

  res.send(defaultOpportunities)
})

// 5. Set up post route to receive opportunity data from React
// app.post("/opportunities", (req, res) => {
//   res.send("Received POST request")
// })

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));