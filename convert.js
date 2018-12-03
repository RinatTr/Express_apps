const express = require('express');
const app = express();
// console.log(app);

app.get('/:num/:base', (req,res) => {
  let num = req.params.num;
  let base = req.params.base;
  let result = {};

  if (isNaN(num)) {
    res.send("numbers only");
  }

  switch (base) {
    case "bin":
      let bin = num;
      //convert from bin to decimal
      let dec = parseInt(bin, 2);
      //convert from bin to dec to hex
      let hex = dec.toString(16);
      result.original.value = num;
      result.original.base = 2;
      result.conversions.decimal = dec;
      result.conversions.binary = bin;
      result.conversions.hex = hex;
      res.json(result); //json sends it.
      break;
    case "dec":
      //convert from decimal to hex
      //convert from decimal to binary
      //store original + conversions in object
      delete req.params.oper
      req.params.result = num1/num2;
      res.json(req.params);
      break;
    case "hex":
      //convert from hex to decimal
      //convert from hex to binary
      //store original + conversions in object
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

// 10 - decimal , // 2 - binary, // 16 - hex
