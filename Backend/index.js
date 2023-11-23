const mongoose = require("mongoose");
const express = require("express");
const passport = require("passport");
const User = require("./models/User")
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

const app = express();

const port = 8050;

// connection of mongoose
mongoose
.connect(
  `mongodb+srv://curiousrachit26:${process.env.Mongo_Password}@cluster0.uhehn5r.mongodb.net/?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)

// setup of passport 

let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
opts.issuer = 'accounts.examplesoft.com';
opts.audience = 'yoursite.net';
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));




.then(() => {
  console.log("Connected to MongoDB!");
})
.catch((err) => {
  console.error("Error while connecting to MongoDB:", err);
});
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
