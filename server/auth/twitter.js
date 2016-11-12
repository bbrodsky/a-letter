var express = require('express');
var router = express.Router();
const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
module.exports = router;

passport.use(new TwitterStrategy({
    consumerKey: 'VoVBBZDfGAKkxDThOPP8VdH3L',
    consumerSecret: 'Ho7emXdX3TMNGr4272dHOUmlC9bdYPTkI7FFJCdrexjwmDr17T',
    callbackURL: "/"
  }
  ,
  function(token, tokenSecret, profile, done) {
    console.log(profile)
  //   User.findOrCreate(..., function(err, user) {
  //     if (err) { return done(err); }
  //     done(null, user);
    // });
  }
));

router.get('/auth/twitter', passport.authenticate('twitter'));
router.get('/auth/twitter/callback',
  passport.authenticate('twitter'));
