const express = require('express');
const taskRouter = express.Router();
const pool = require('../modules/pool');


// POST router
taskRouter.post('/', (req, res) => {
    console.log('POST /tasks');
    console.log('req.body', req.body);
    const newTask = req.body;
    const sqlText = `
    
    `
})


// GET router




// PUT router




// DELETE router


module.exports = taskRouter;