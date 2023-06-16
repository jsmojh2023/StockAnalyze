"use strict";

const db = require("../config/db");

class UserStorage {
  static getUserInfo(codename) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM stockvalue WHERE codename = ?;";
      db.query(query, [codename], (err, data) => {
        if (err) reject(`${err}`);
        else resolve(data[0]);
      });
    });
  }
}

module.exports = UserStorage;
