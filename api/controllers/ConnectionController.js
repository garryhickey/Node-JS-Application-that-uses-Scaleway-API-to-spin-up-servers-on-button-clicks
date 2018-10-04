/**
 * ConnectionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
  

    test :  function(req, res) {

      var request = require('request');

          var form = {
                'organization': '<organisation id>',
                'name': 'API_Server_test',
                'image': '<image_id>',
                'commercial_type': 'VC1S'
              };

            
          request({
            headers: {
              'X-Auth-Token': '<set in Scaleway UI>',
              'Content-Type': 'application/json'
            }, 	
            url: 'https://cp-ams1.scaleway.com/servers',
              body: form,
              json: true,
              method: 'POST'
            }, function (err, res, body) {
              console.log(body);

          
              request({
                headers: {
                  'X-Auth-Token': '<set in Scaleway UI>',
                  'Content-Type': 'application/json'
                }, 	

                url: 'https://cp-ams1.scaleway.com/servers/'+body.server.id+'/action',
                body: { 'action': 'poweron'},
                json: true,
                method: 'POST'
              }, function (err, res, body) {
                console.log(body);

        

              })


              while (body.server.state != 'running'){
                  
                ipService.getIPAddress(body.server.id);

                }
                  
                var ip_address = body.server.public_ip.address;
                console.log("The IP Address returned is : " + ip_address);
                res.status(200);
                res.send('All Good');

          }); 
 
    },

    test3 : function(req, res) {

      ipService.getIPAddress('<unique server id');

    }


    

};

