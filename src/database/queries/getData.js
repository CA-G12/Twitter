const connection = require('../config/connection');

const getData = () => connection.query('select * from tweets');
module.exports = getData;
