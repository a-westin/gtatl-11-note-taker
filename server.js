// Requiring dependencies
const express = require("express");
const fs = require("fs");
const path = require("path");

// Creating a port, setting up express
const app = express();
const PORT = process.env.PORT || 8080;
