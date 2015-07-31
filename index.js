(function() {

  var zendesk = require('node-zendesk');

  var client = zendesk.createClient({
    username:  's@cognits.co',
    token:     'WRSeQ0RomdSaWko4jv2I9XimGokh2EvKPHGHi5ct',
    remoteUri: 'https://remote.zendesk.com/api/v2',
    oauth: true
  });


  module.exports = function(robot) {
    robot.hear(/new task/i, function(res) {

      var welcomeMessages = ["Creating new task for your awesomeness"];

      return res.send(res.random(welcomeMessages));
    });


  };

}).call(this);
