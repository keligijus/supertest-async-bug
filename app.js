const express = require("express");
const app = express();
const router = express.Router();

const db = require("./db");
require("./routes")({ router, db });

app.use(router);

app.listen(process.env.PORT, () =>
  console.log(`App ready at http://locahost:${process.env.PORT}!`)
);
