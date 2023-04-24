const sql = require("mysql");
require("dotenv").config();

const dataType = {
  user: "users",
  ticket: "tickets",
};

const config = {
  host: process.env.SQL_HOST,
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DATABASE,
};

async function getAllData(dataType = "users") {
  const connection = sql.createConnection(config);

  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${dataType}`, (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        const users = results;
        const userCount = results.length;
        resolve({ users, userCount });
      }
      connection.end();
    });
  });
}

async function deleteData(ID) {
  const connection = sql.createConnection(config);

  return new Promise((resolve, reject) => {
    connection.query(
      `DELETE FROM users WHERE ID=${ID}`,
      (error, results, fields) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
        connection.end();
      }
    );
  });
}

async function updateData() {}

module.exports = {
  dataType,
  getAllData,
  deleteData,
  updateData,
};
