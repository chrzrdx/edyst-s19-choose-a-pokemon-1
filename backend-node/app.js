// import the express module
var express = require("express");   

// create a new express instance that you can assign to a variable
var app = express();                       

// lets create a get function that returns a list of users
app.get("/api/pokemon", (req, res, next) => {
    res.json(["bulbasaur","charmander", "squirtle"  ]);
   });

   // set our app to listening to port 8006 and creates a callback function..
app.listen(8006, () => {
 console.log("Server running on port 8006");
});