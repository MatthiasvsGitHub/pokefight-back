const express = require("express");
const app = express();
const port = 3002;
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
const cors = require('cors')
app.use(cors())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const pokemonRouting = require("./routes/pokemon");
app.use("/pokemon/", pokemonRouting);

app.get('/', (req, res) => {
    res.send('Welcome to our API :)')
})


app.listen(process.env.PORT || port, console.log(`Server is running on port ${port}`));
