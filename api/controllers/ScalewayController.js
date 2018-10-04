/**
 * ScalewayController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */



module.exports = {

var Api = require('scaleway'),
client = new Api({token: '7948ef19-ae03-4efc-bd51-0920017db194'});

var data = {
  name: 'Routing_Server',
  image: '<IMAGE_ID>',
  tags: ['test', 'demo']
};

client.post('/servers', data, function(err, res) {
  console.log(res.server);
});
  

};

