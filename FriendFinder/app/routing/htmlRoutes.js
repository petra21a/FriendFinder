const path = require("path");


module.exports = function (app) {
  // Basic route that sends the user first to the Home Page
  app.get("/survey", function (_, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  app.use(function (_, res) {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
}