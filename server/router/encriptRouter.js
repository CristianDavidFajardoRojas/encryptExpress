const router = require('express').Router();
const encriptV1 = require('../version/encriptV1');

router.use("/v1", encriptV1);

module.exports = router;