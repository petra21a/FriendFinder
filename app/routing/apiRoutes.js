const friendsData = require("../data/friends.js")


module.exports = function (app) {
  // Displays all Friends
  app.get("/api/friends", function (_, res) {
    return res.json(friendsData.friends);
  });


  // Create New Characters - takes in JSON input
  app.post("/api/friends", function (req, res) {

    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    const newFriend = req.body;

    //Friend Math:

    //homework instructions method
    let bestFriend = {};
    let min = 50;
    totalDifference = 0;
    for (const n of friendsData.friends) {
      diffArr = [];
      for (i = 0; i < newFriend.scores.length; i++) {

        diffArr.push(Math.abs(parseInt(newFriend.scores[i], 10) - parseInt(n.scores[i], 10)));
      }
      totalDifference = diffArr.reduce((total, amount) => total + amount)
      if (totalDifference < min) {
        min = totalDifference;
        bestFriend = n;
      }
    }
    friendsData.friends.push(newFriend);
    res.json(bestFriend);
  });
}