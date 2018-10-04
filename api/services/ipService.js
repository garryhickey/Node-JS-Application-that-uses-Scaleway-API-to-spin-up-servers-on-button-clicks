// ipService.js - in api/services
exports.getIPAddress = function(server_id) {

    var request = require('request');

    var id = server_id;


    request({
      headers: {
        'X-Auth-Token': '<X-Auth-Token_se in Scaleway UI>',
        'Content-Type': 'application/json'
      }, 	

      url: 'https://cp-ams1.scaleway.com/servers/'+id,
      json: true,
      method: 'GET'
    }, function (err, res, body) {
      console.log(body);
      var ip_address = body.server.public_ip.address;
    
      console.log("The IP Address returned is : " + ip_address);
      
      
    })

    };