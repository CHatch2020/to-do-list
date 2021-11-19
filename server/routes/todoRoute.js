const express = require("express");
const taskRouter = express.Router();
const pool = require("../modules/pool");

// POST router
taskRouter.post("/", (req, res) => {
  console.log("POST /tasks");
  console.log("req.body", req.body);
  const newTask = req.body;
  const sqlText = `
    INSERT INTO "tasks"
    ("task_name", "completion")
VALUES
    ($1, $2);
    `;
  const sqlValues = [newTask.task_name, newTask.completion];
  pool
    .query(sqlText, sqlValues)
    .then((dbRes) => {
      console.log("insert succeded");
      res.sendStatus(201);
    })
    .catch((dbErr) => {
      res.sendStatus(500);
    });
}); // end POST router

// GET router
taskRouter.get("/", (req, res) => {
  console.log("GET /tasks");
  const sqlText = `
    SELECT * FROM "tasks";
    `;
  pool
    .query(sqlText)
    .then((dbRes) => {
      console.log("rows to send", dbRes.rows);
      res.send(dbRes.rows);
    })
    .catch((dbErr) => {
      res.sendStatus(500);
    });
}); // end GET router

// PUT router
taskRouter.put("/:id", (req, res) => {
  console.log("req.params", req.params);
  const update = req.params.id;
  const complete = "Done";
  const sqlText = `
    UPDATE "tasks"
    SET "completion"=$1
    WHERE "id"=$2;
    `;
  const sqlValues = [complete, update];
  pool
    .query(sqlText, sqlValues)
    .then((dbRes) => {
      res.sendStatus(201);
    })
    .catch((dbErr) => {
      res.sendStatus(500);
    });
}); // end PUT router

// DELETE router
taskRouter.delete("/:id", (req, res) => {
  const deleteThisTask = req.params.id;
  const sqlText = `
        DELETE FROM "tasks"
        WHERE "id"=$1;
    `;
  const sqlValues = [deleteThisTask];
  pool
    .query(sqlText, sqlValues)
    .then((dbRes) => {
      res.sendStatus(201);
    })
    .catch((dbErr) => {
      res.sendStatus(500);
    });
}); // end DELETE router

module.exports = taskRouter;
