var characters = require("../data/characters");

module.exports= function(app) {

	app.get("/api/characters", function(req,res){
		res.json(characters);
	});

	app.post("/api/characters", function(req, res){


	var bestMatch ={

		name:"",
		photo:"",
		friendDifference: 1000

	};


	var userData = req.body;
	var userScores = userData.scores;


	var totalDifference = 0;

	for (var i=0; i< characters.length; i++){
		console.log(characters[i].name);
		totalDifference=0;

		for (var j = 0; j < characters[i].scores[j]; j++){

			totalDifference = Math.abs(parseInt(userScores[j])- parseInt(characters[i].scores[j]));
			
			if(totalDifference<= bestMatch.friendDifference)
			{
				bestMatch.name = characters[i].name;
				bestMatch.photo = characters[i].photo;
				bestMatch.friendDifference = totalDifference;
			}	
	

		}
	}

	characters.push(userData);

	res.json(bestMatch);



});

};





