var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", (req, res) => {
	burger.all(function(data){
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/", (req, res)=>{
	console.log(req.body.name);
	burger.create([
		"burger_name", "devoured"
	], [
		req.body.name, req.body.devoured
	], function(){
		res.redirect("/");
	});
});

router.put("/:id", (req, res) =>{
	var condition = "id = " + req.params.id;

	console.log("condition", condition);

	burger.update({
		devoured: req.body.devoured
	}, condition, function(){
		res.redirect("/");
	});
});

router.delete("/:id", (req, res)=>{
	var condition = "id = " + req.params.id;

	burger.delete(condition, function(){
		res.redirect("/");
	});
});

module.exports = router;