const app = require("./src/server/api.js");
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { 
     console.log("Server running on port " + PORT);
});