var express = require("express");
var router = express.Router();
var axios = require("axios");

router.get("/", function (req, res, next) {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(function (response) {
        res.json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});



module.exports = router;
