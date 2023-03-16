const DiscordStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const User = require("../models/Users");

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    if (user) done(null, user);
});

passport.use(
    new DiscordStrategy(
        {
            clientID: process.env.GOOGLEID,
            clientSecret: process.env.GOOGLESECRET,
            callbackURL: "/google/callback",
            scope: ["profile"],
        },
        async (acessToken, refreshToken, profile, done) => {
            try {
                console.log(profile)
                const user = await User.findOne({ googleId: profile.id });
                if (user) {
                    await user.updateOne({
                        avatar: profile._json.picture,
                        username: profile._json.given_name,
                        name: profile._json.name,
                        tag: `${profile._json.given_name}#${user.discriminator}`,
                    });
                    done(null, user);
                } else {
                    var discriminator =
                    Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
                    const newUser = await User.create({
                        googleId: profile.id,
                        name: profile._json.name,
                        avatar: profile._json.picture,
                        username: profile._json.given_name,
                        tag: `${profile._json.given_name}#${profile.discriminator}`,
                        discriminator,
                    });
                    const saveUser = await newUser.save();
                    done(null, saveUser);
                }
            } catch (err) {
                console.log(err);
                done(err, null);
            }
        }
    )
);
