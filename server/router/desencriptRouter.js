const router = require('express').Router();
const desencriptV1 = require('../version/desencriptV1');

router.use("/v1", desencriptV1);

module.exports = router;