// import the express module
const express = require('express');   

// create a new express instance that you can assign to a variable
const app = express();  

const pokemon_data = {
    "pokemon" : ["bulbasaur", "charmander", "squirtle"]
}

// lets create a get function that returns a list of users
app.get('/api/pokemon', (req, res) => {
    res.json(pokemon_data);
   });

   //if we enter invalid url
   app.get('/*', (req,res)=>{
    res.status(404).send({erroe : "please, enter the valid url"});
  })

   // set our app to listening to port 8006 and creates a callback function..
app.listen(8006, () => {
 console.log("Server running on port 8006");
});