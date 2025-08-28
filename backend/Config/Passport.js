require('dotenv').config();
const passport = require('passport');
const { Strategy: GoogleStrategy } = require('passport-google-oauth20');
const User = require('../Model/User');
const jwt = require('jsonwebtoken');

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${process.env.BACKEND_URL}/api/auth/oauth/google/callback`,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ email: profile.emails[0].value });

        if (!user) {
          user = await User.create({
            name: profile.displayName,
            email: profile.emails[0].value,
            password: 'oauth_placeholder',
            profilepic: profile.photos[0].value, // Get Google profile image
            role: 'user'
          });
        }

        const token = jwt.sign({ id: user._id,role:user.role }, process.env.JWT_SECRET, {
          expiresIn: '5h'
        });

        user.token = token;
        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);
