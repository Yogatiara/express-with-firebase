const firebase = require("firebase/app");
const config = require('../../config');

const db = firebase(config.firebaseConfig);

exports.defaults = db;