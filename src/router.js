const express = require('express');

const router = express.Router();

// const  {} = require('./controller')
const getData = require('./database/queries/getData');

router.get('/', (req, res) => {
    console.log(getData , "123");
});

// router.use(clientError);
// router.use(serverError);

module.exports = router;
