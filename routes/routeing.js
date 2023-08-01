const express = require("express");
const router = express.Router();
const path = require("path");

// Serve static files from the 'public' directory
router.use(express.static(path.join(__dirname, "../public")));

router.route("/").get(
    (req, res) => {
        res.sendFile(path.join(__dirname, "../public", "index.html"));
    }
);

router.route("/test").get(
    (req, res) => {
        res.sendFile(path.join(__dirname, "../public", "test.html"));
    }
);

module.exports = router;
