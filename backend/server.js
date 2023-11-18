const express = require('express');
const app = express();
const poke_list = require('../mockDB/pokemon_list.js');
// console.log(poke_list);

const cors = require('cors');
app.use(cors());



app.listen(3000, () => {
  console.log('Server started!');
});

app.get('/pokemons', (req, res) => {
  res.json(poke_list);
});

app.get('/pokemon', (req, res) => {
  console.log("this is the query: ", req.query);
  let poke_name = req.query.pname;
  let poke = poke_list.find(p => p.name.english === poke_name);
  res.json(poke);
});