var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", (req, res) => {
	burger.get(function(data){
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	})
});

router.post("/:name", (req,res)=>{
	burger.create(req.params.name, function(){
		res.redirect("/");
	});
});

router.put("/:id/:newName", (req,res)=>{
	burger.rename(req.params.id, req.params.newName, function(){
		res.redirect("/");
	});
});

router.delete("/:id", (req, res)=>{
	burger.eat(req.params.id, function(){
		res.redirect("/");
	});
});

module.exports = router;