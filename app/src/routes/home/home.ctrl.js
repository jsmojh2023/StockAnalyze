"use strict";

const logger = require("../../config/logger");
const User = require("../../models/User");

const mysql = require("mysql");
const pool = require("../../config/db");
const UserStorage = require("../../models/UserStorage");
const app = require("../../../app");

const output = {
  home: (req, res) => {
    logger.info(`GET / 304 "홈 화면으로 이동"`);
    res.render("home/index");
  },

  stockvalue: (req, res) => {
    logger.info(`GET /stockvalue 304 "StockValue 화면으로 이동"`);
    res.render("home/stockvalue");
  },

  searchstock_pc: (req, res) => {
    logger.info(`GET /searchstock_pc 304 "SearchStock 화면으로 이동"`);
    
    var sql = 'SELECT * FROM searchcondition;' // stockvalue의 모든 데이터 불러오기
    pool.query(sql, function(err, contents, fields){
      if(err){
        console.log(err);
        res.status(500).send('Internal Server Error')
      }
        res.render("home/searchstock_pc", { contents: contents }); //contents라는 배열안에 JSON형식으로 데이터들이 담겨있음. contents라는 변수에 데이터를 담아 view.ejs로 넘겨준다.
    });
  },

  searchstock_mobile: (req, res) => {
    logger.info(`GET /searchstock_mobile 304 "SearchStock 화면으로 이동"`);
    
    var sql = 'SELECT * FROM searchcondition;' // stockvalue의 모든 데이터 불러오기
    pool.query(sql, function(err, contents, fields){
      if(err){
        console.log(err);
        res.status(500).send('Internal Server Error')
      }
        res.render("home/searchstock_mobile", { contents: contents }); //contents라는 배열안에 JSON형식으로 데이터들이 담겨있음. contents라는 변수에 데이터를 담아 view.ejs로 넘겨준다.
    });
  },

  stockvalueview: (req, res) => {
    logger.info(`GET /view 304 "view 화면으로 이동"`);
    
    var sql = 'SELECT * FROM stockvalue where codename =?;' // stockvalue의 모든 데이터 불러오기
    pool.query(sql, [req.query.codename], function(err, contents, fields){
      if(err){
        console.log(err);
        res.status(500).send('Internal Server Error')
      }
        res.render("home/stockvalueview", { contents: contents }); //contents라는 배열안에 JSON형식으로 데이터들이 담겨있음. contents라는 변수에 데이터를 담아 view.ejs로 넘겨준다.
    });
  },
};

const process = {
  stockvalue: async (req, res) => {
    const user = new User(req.body);
    const response = await user.stockvalue();

    const url = {
      method: "POST",
      path: "/stockvalue",
      status: response.err ? 400 : 200,
    };

    log(response, url);
    return res.status(url.status).json(response);
  },

  searchstock_pc: async (req, res) => {
    const user = new User(req.body);
    const response = await user.searchstock_pc();

    const url = {
      method: "POST",
      path: "/searchstock_pc",
      status: response.err ? 400 : 200,
    };

    log(response, url);
    return res.status(url.status).json(response);
  },

  searchstock_mobile: async (req, res) => {
    const user = new User(req.body);
    const response = await user.searchstock_mobile();

    const url = {
      method: "POST",
      path: "/searchstock_mobile",
      status: response.err ? 400 : 200,
    };

    log(response, url);
    return res.status(url.status).json(response);
  },

  stockvalueview: async (req, res) => {
    const user = new User(req.body);
    const response = await user.stockvalueview();

    const url = {
      method: "POST",
      path: "/stockvalueview",
      status: response.err ? 400 : 200,
    };

    log(response, url);
    return res.status(url.status).json(response);
  },
};

module.exports = {
  output,
  process,
};

const log = (response, url) => {
  if (response.err) {
    logger.error(
      `${url.method} ${url.path} ${url.status} Response: ${response.success} ${response.err}`
    );
  } else {
    logger.info(
      `${url.method} ${url.path} ${url.status} Response: ${response.success} ${
        response.msg || ""
      }`
    );
  }
};
