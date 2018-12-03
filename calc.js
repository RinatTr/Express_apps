const express = require('express');
const app = express();
// console.log(app);

app.get('/:oper/:num1/:num2', (req,res) => {
  let num1 = parseInt(req.params.num1);
  let num2 = parseInt(req.params.num2);

  if (isNaN(num1) || isNaN(num2)) {
    res.send("numbers only");
  }

  switch (req.params.oper) {
    case "add":
      delete req.params.oper
      req.params.result = num1 + num2;
      res.json(req.params); //json sends it.
      break;
    case "div":
      delete req.params.oper
      req.params.result = num1/num2;
      res.json(req.params);
      break;
    case "mul":
      delete req.params.oper
      req.params.result = num1*num2;
      res.json(req.params);
      break;
    case "sub":
      delete req.params.oper
      req.params.result = num1 - num2;
      res.json(req.params);
    default:
      res.send("invalid response. try again: /operator/num1/num2. operators: add/sub/mul/div")
  }

})

// app.get("/*", (req,res) => {
//   res.status(404).sendFile(__dirname + '/404.html')
// })

app.listen(3000, () => {
  console.log("you are listening to port 3000")
})
