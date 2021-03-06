const express = require ("express"); 

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("../note-taker/Develop/public/assets/js/apiRoutes")(app);
require("./Develop/public/assets/js/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });