const express = require('express');
const app = express();

//middñewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use(requiere('./routes/index.js'))

app.listen(3000);
console.log('Server listening on port 3000');