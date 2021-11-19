const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;
const taskRouter = require('./routes/todoRoute');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

// Routes
app.use('/tasks', taskRouter);

// Listen on PORT
app.listen(PORT, () => {
    console.log('listening on port', PORT);
});