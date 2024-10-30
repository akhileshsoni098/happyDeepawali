const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const port = 3001;
  
app.use(express.json());
app.use(cors());  
       
app.use(express.static(path.join(__dirname)));
    
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "happyDeepawali.html"));
}); 

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
}); 
 