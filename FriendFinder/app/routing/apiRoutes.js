friendsData = require("../data/friends.js")


module.exports = function (app) {
// Displays all Friends
app.get("/api/friends", function(res) {
    return res.json(friends);
  });
  
  
// Create New Characters - takes in JSON input
app.post("/api/friends", function(req, res) {

    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    const newFriend = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newFriend.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newFriend);
  
    characters.push(newFriend);
  
    res.json(newFriend);
  });
}