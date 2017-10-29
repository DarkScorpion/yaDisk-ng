
var passport = require('passport');
var YandexStrategy = require('passport-yandex').Strategy;

var yaConfig = require('../../config.js').yaPassport;

passport.use(new YandexStrategy({
    clientID: yaConfig.clientId,
    clientSecret: yaConfig.secret,
    callbackUrl: yaConfig.callbackUrl
  }, (accessToken, refreshToken, profile, done) => {
    process.nextTick( () => {
      var userData = {
        accToken: accessToken,
        refToken: refreshToken,
        profile: profile
      };

      return done(null, userData);
    });
  }
));

passport.serializeUser( (user, done) => {
  done(null, user);
});

passport.deserializeUser( (obj, done) => {
  done(null, obj);
});

module.exports = passport;
