var db = require("../models")

var router = function(app){
	app.get("/api", (req, res) => {
		db.Burger.findAll().then(dbBurger=> {res.json(dbBurger)});
	});

	app.post("/api", (req, res)=>{
		db.Burger.create(req.body).then(dbBurger=>{
			res.redirect("/");
		});
	});

	app.put("/api/:id", (req, res) =>{

		db.Burger.update(req.body , {
			where: {
				id: req.params.id
			}
		}).then(dbBurger => res.redirect("/"));
	});
	console.log("++++++++++++++++++++++++");
	app.delete("/api/:id", (req, res)=>{
		db.Burger.destroy({
			where: {
				id: req.params.id
			}
		}).then(dbBurger => res.redirect("/"));
	});

	app.get("/", (req, res)=>{
		db.Burger.findAll().then(dbBurger=>{
			var hbsObject = {
				burgers: dbBurger
			};
			res.render("index", hbsObject);
		});
	});
}

module.exports = router;
