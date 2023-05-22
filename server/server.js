const movieList = require("./mocks/movielist.json");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/api/movies", (req, res) => {
  const { query } = req.query;
  console.log("🚀 ~ file: server.js:10 ~ app.get ~ query:", query);
  let responseData = "";
  if (query != "") {
    responseData = movieList.filter((item) =>
      item.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    );
    console.log("🚀 ~ file: server.js:17 ~ app.get ~ responseData:", responseData)
  } else {
    responseData = movieList;
  }
  res.json(responseData);
});

const PORT = 3006;
app.listen(PORT, () => console.log(`Server started in port ${PORT}`));
