mongoose = require("mongoose");

const localURI = "mongodb://localhost/kiwi_db_v1";
const URI = process.env.MONGODB_URI || localURI;

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`MongoDB Connected to ${URI}`))
  .catch((err) => console.log(err));