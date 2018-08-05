const friendsData = require("../data/friends.js")


module.exports = function (app) {
  // Displays all Friends
  app.get("/api/friends", function (res) {
    return res.json(friends);
  });


  // Create New Characters - takes in JSON input
  app.post("/api/friends", function (req, res) {

    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    const newFriend = req.body;
    
    //Friend Math:
    const min = Math.abs(friendsData.friends[0].scores.reduce((total, amount) => parseInt(total, 10) + parseInt(amount, 10)) - newFriend.scores.reduce((total, amount) => parseInt(total, 10) + parseInt(amount, 10)))
  let bestFriend = friendsData.friends[0];
    // console.log(newFriend,min)
    for (const n of friendsData.friends) {
      let delta = Math.abs(n.scores.reduce((total, amount) => parseInt(total, 10) + parseInt(amount, 10)) - newFriend.scores.reduce((total, amount) => parseInt(total, 10) + parseInt(amount, 10)))
      // console.log(delta)
      if (delta < min) {
        bestFriend = n;
      }
    }
    // console.log(bestFriend)
    friendsData.friends.push(newFriend);
    res.json(bestFriend);
  });
}