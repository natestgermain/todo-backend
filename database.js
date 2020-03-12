const sqlite3 = require('sqlite3').verbose();

const create =
`
  CREATE TABLE todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    description TEXT,
    due DATE,
    is_checked INTEGER
  );
`;

const db = new sqlite3.Database(':memory:', err => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');

  console.log('Creating table to store todos');
  db.run(create, err => {
    if (err) {
      console.log('Table already exists');
    };
    console.log('Done');
  });
});

module.exports = db;

