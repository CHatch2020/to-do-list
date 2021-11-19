const express = require('express');
const taskRouter = express.Router();
const pool = require('../modules/pool');


// POST router
taskRouter.post('/', (req, res) => {
    console.log('POST /tasks');
    console.log('req.body', req.body);
    const newTask = req.body;
    const sqlText = `
    INSERT INTO "tasks"
    ("task_name", "completion")
VALUES
    ($1, $2);
    `;
    const sqlValues = [
        newTask.task,
        newTask.completion
    ];
    pool.query(sqlText, sqlValues)
    .then((dbRes) => {
        console.log('insert succeded');
        res.sendStatus(201);
    });
}); // end POST router


// GET router




// PUT router




// DELETE router


module.exports = taskRouter;