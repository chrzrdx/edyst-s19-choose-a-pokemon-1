var express = require("express");          
var app = express();                       

app.get("/url", (req, res, next) => {
    res.json(["bulbasaur","charmander", "squirtle"  ]);
   });
app.listen(8006, () => {
 console.log("Server running on port 8006");
});