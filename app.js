
const express = require("express");

// Constants
const PORT = 80;

// // App
const app = express();
app.get('/', (req, res) => {
   res.send('Hello world\n Hello world\n Hello world\n cengiz alturk\n');
console.log(`tehere is q request`);   
});

app.listen(PORT);
console.log(`Running on Port:${PORT}`);
