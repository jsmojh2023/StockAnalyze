"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/stockvalue", ctrl.output.stockvalue);
router.get("/searchstock_pc", ctrl.output.searchstock_pc);
router.get("/searchstock_mobile", ctrl.output.searchstock_mobile);
router.get("/stockvalueview", ctrl.output.stockvalueview);

router.post("/stockvalue", ctrl.process.stockvalue);
router.post("/searchstock_pc", ctrl.process.searchstock_pc);
router.post("/searchstock_mobile", ctrl.process.searchstock_mobile);
router.post("/stockvalueview", ctrl.process.stockvalueview);

module.exports = router;