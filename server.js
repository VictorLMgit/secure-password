const app = require("./src/app.js");
const PORT = 3060;

app.listen(PORT, () => {
    console.log("Listen at localhost:"+PORT);
})