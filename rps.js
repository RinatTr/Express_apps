const express = require('express');
const app = express();
// console.log(app);

app.get('/:choice', (req,res) => {
  let randomIdx = Math.floor(Math.random()*3);

  let rocks = [{"user":"rock","ai":"rock","result":"tie"},
  {"user":"rock","ai":"paper","result":"lose"},
  {"user":"rock","ai":"scissors","result":"win"}]

  let papers = [{"user":"paper","ai":"rock","result":"lose"},
  {"user":"paper","ai":"paper","result":"tie"},
  {"user":"paper","ai":"scissors","result":"win"}]

  let scissors = [{"user":"scissors","ai":"rock","result":"lose"},
  {"user":"scissors","ai":"paper","result":"win"},
  {"user":"scissors","ai":"scissors","result":"tie"}]

  switch (req.params.choice) {
    case "rock":
      res.json(rocks[randomIdx]); //json sends it.
      break;
    case "paper":
      res.json(papers[randomIdx]);
      break;
    case "scissors":
      res.json(scissors[randomIdx]);
      break;
    default:
      res.json("invalid response. try again")
  }

})

// app.get("/*", (req,res) => {
//   res.status(404).sendFile(__dirname + '/404.html')
// })

app.listen(3000, () => {
  console.log("you are listening to port 3000")
})
