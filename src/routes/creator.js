const router = require("express").Router();

function isAuthorized(req, res, next) {
    if (req.user) {
        res.redirect("/dashboard");
    } else {
        next();
    }
}

router.get("/", isAuthorized, (req, res) => {
    res.render("creator");
});

module.exports = router;
