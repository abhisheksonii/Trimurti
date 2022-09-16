const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const port = 3001
const deatil  = require('./query/detail/detail')

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json());

app.use(deatil)

// app.use(getkuser)

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/', (req, res) => { res.send("Asdasd") })


// app.listen(process.env.PORT || 7000, () => {
//   console.log("server up and running");
// });

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`)).keepAliveTimeout = 61 * 1000;