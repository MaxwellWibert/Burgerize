var express = require("express");
var db = require("../models")

var router = express.Router();

router.get("/api", (req, res) => {
	db.Burger.findAll().then(dbBurger=> {res.json(dbBurger)});
});

router.post("/api", (req, res)=>{
	db.Burger.create(req.body).then(dbBurger=>{
		res.redirect("/");
	});
});

router.put("/api/:id", (req, res) =>{

	db.Burger.update(req.body , {
		where: {
			id: req.params.id
		}
	}).then(dbBurger => res.redirect("/"));
});
console.log("++++++++++++++++++++++++");
router.delete("/api/:id", (req, res)=>{
	db.Burger.destroy({
		where: {
			id: req.params.id
		}
	}).then(dbBurger => res.redirect("/"));
});

router.get("/", (req, res)=>{

	db.Burger.findAll({}).then(dbBurger=>{
		var hbsObject = {
			burgers: dbBurger
		};
		res.render("index", hbsObject);
	});
});

module.exports = router;