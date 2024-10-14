const app = require("./src/app")
const db = require("./db/connection");
const port = 3000;

//TODO: Create your GET Request Route Below: 
//create a new endpoint 

app.listen(port, () => {
    db.sync();
    console.log(`Listening at http://localhost:${port}/restaurants`);
})