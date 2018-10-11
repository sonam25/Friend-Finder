var friends =require("../data/friends.js");
module.exports = function(app){
  app.get("/api/friends", function(req,res){
      res.json(friends);
  }); 
  
  app.post("/api/friends", function(req,res){
     
    var bestMatch = {
          name:"",
          photo:"",
          friendDifference: 1000
      };
      console.log(req.body);
   
       var scores =req.body.score;
       console.log(scores);
        var totalDiff = 0;
       for(var i = 0; i < friends.length; i++){
        console.log(friends[i]); 
         totalDiff = 0;
         for( var j = 0; j < scores[j]; j++) {
             totalDiff += Math.abs(parseInt(scores[j]) - parseInt(friends[i].scores[j]));
             console.log(totalDiff);          
             if(totalDiff <= bestMatch.friendDifference) {

                 bestMatch.name = friends[i].name;
                 bestMatch.photo = friends[i].photo;
                 bestMatch.friendDifference = totalDiff;
             }
         }

     }

     friends.push(req.body);
     res.json(bestMatch);
  });
};