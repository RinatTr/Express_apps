const express = require('express');
const app = express();
// console.log(app);

app.get('/:num/:base', (req,res) => {
  let num = isNaN(parseInt(req.params.num)) ? req.params.num : parseInt(req.params.num);
  let base = req.params.base;

  let result = {  "original": {"value":num, "base":null},
                  "conversions": {"decimal":null, "binary":null, "hex":null}  };
  let dec, bin, hex;

  switch (base) {
    case "bin":
      bin = num;
      dec = parseInt(bin, 2);
      hex = dec.toString(16);
      result.original.base = 2;
      break;
    case "dec":
      dec = num;
      bin = dec.toString(2);
      hex = dec.toString(16);
      result.original.base = 10;
      break;
    case "hex":
      hex = num;
      dec = parseInt(hex, 16);
      bin = dec.toString(2);
      result.original.base = 16;
      break;
    default:
      res.send("invalid response. try again: /operator/num1/num2. operators: add/sub/mul/div")
  }
    result.conversions.decimal = dec;
    result.conversions.binary = bin;
    result.conversions.hex = hex;
    res.json(result);
})

app.get('/:num/',(req, res) => {
  let num = parseInt(req.params.num);

  let result = {  "original": {"value":num, "base":null},
                  "conversions": {"decimal":null, "binary":null, "hex":null}  };

  let dec = num;
  let bin = dec.toString(2);
  let hex = dec.toString(16);
  result.original.base = 10;

  result.conversions.decimal = dec;
  result.conversions.binary = bin;
  result.conversions.hex = hex;
  res.json(result);
})

// app.get("/*", (req,res) => {
//   res.status(404).sendFile(__dirname + '/404.html')
// })

app.listen(3000, () => {
  console.log("you are listening to port 3000")
})
