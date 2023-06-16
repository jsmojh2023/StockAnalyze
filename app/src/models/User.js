"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  async stockvalue() {
    const client = this.body;
    try {
      const user = await UserStorage.getUserInfo(client.codename);

      if (user) {
        if (user.codename === client.codename) {
          return { success: true };
        }
      }
      return { success: false, msg: "존재하지 않는 종목명입니다." };
    } catch (err) {
      return { success: false, err };
    }
  }

  async searchstock_pc() {
    const client = this.body;
    try {
      const user = await UserStorage.getUserInfo(client.codename);

      if (user) {
        if (user.codename === client.codename) {
          return { success: true };
        }
      }
      return { success: false, msg: "존재하지 않는 종목명입니다." };
    } catch (err) {
      return { success: false, err };
    }
  }

  async searchstock_mobile() {
    const client = this.body;
    try {
      const user = await UserStorage.getUserInfo(client.codename);

      if (user) {
        if (user.codename === client.codename) {
          return { success: true };
        }
      }
      return { success: false, msg: "존재하지 않는 종목명입니다." };
    } catch (err) {
      return { success: false, err };
    }
  }

  async view() {
    const client = this.body;
    try {
      const user = await UserStorage.getUserInfo(client.codename);
      const buruk$ = await UserStorage.getUserInfo(client.buruk); // 추가

      if (user) {
        if (user.codename === client.codename) {
          return { success: true };
        }
      }
      return { success: false, msg: "존재하지 않는 종목명입니다." };
    } catch (err) {
      return { success: false, err };
    }
  }
}

module.exports = User;