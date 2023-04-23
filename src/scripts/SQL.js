const sql = require("mysql");
require('dotenv').config()

const config = {
  host: process.env.SQL_HOST,
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DATABASE,
};

async function getAllUsers() {
  const connection = sql.createConnection(config);

  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM users", (error, results, fields) => {
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

async function updateUser(ID) {
  // try {
  //   const result = await updateUser(ID, updatedData);
  //   console.log(`User with ID ${ID} has been updated successfully.`);
  //   return result;
  // } catch (error) {
  //   console.error(`Error updating user with ID ${ID}: ${error}`);
  // }
}

async function deleteUser(ID) {
  console.log(ID)
  // const connection = sql.createConnection(config);

  // return new Promise((resolve, reject) => {
  //   connection.query(`DELETE FROM users WHERE ID=${ID}`, (error, results, fields) => {
  //     if (error) {
  //       reject(error);
  //     } else {
  //       resolve(results);
  //     }
  //     connection.end();
  //   });
  // });
}

module.exports = {
  getAllUsers,
  updateUser,
  deleteUser,
};
