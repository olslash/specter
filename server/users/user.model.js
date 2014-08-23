// User model/schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// User collection
var UserSchema = new Schema({
  fbid: String,
  first_name: String,
  last_name: String,
  profile_photo: String,
  // username: {type: String, required: true, validate: /\S+/},
  staches_created: {type: [String], default: []},
  staches_discovered: {type: [String, Date], default: []}, // [stache, date]
  current_heatmap: [Number, Number, String, Date] // [lon, lat, color hex, date]
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
