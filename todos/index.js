const express = require('express');
const router = express.Router();
const db = require('../database.js');

const get_all_todos =
`
  SELECT *
  FROM todos;
`;

const get_todo_by_id =
`
  SELECT *
  FROM todos
  WHERE id = ?;
`;

router.get('/', (req, res) => {
  db.all(get_all_todos, [], (err, rows) => {
    if (err) {
      res.json({success: false, error: err.message});
      return;
    }
    res.json({success: true, data: rows});
  });
});

router.get('/:id', (req, res) => {
  db.get(get_todo_by_id, [req.params.id], (err, row) => {
    if (err) {
      res.json({success: false, error: err.message});
    }
    res.json({success: true, data: row});
  });
});

module.exports = router;

