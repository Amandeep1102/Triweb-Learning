"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const user_1 = require("../controllers/user");
const router = express.Router();
router.post('/register', user_1.registerUser);
exports.default = router;
