const express = require('express');
const PORT = 2048;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Lance");
})

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));