const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
const dbutil = require("./utils/dbutils");
dbutil.dbinit();

const userroute = require("./routes/user_routes");
app.use(express.json());

app.use("/", userroute);

app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
