const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { savedirectUrl } = require("../middleware.js");

router.get("/signup",(req,res) => {
  res.render("users/signup.ejs");
});

router.post("/signup",wrapAsync(async (req,res) => {
  try{
    let {email,username,password} =req.body;
  const newUser = new User({email,username});
  let registeredUser = await User.register(newUser,password);
  console.log(registeredUser);
  req.login(registeredUser,(err) => {
    if(err) return next(err);
    req.flash("success","Welcome to Air_bnb!!!");
    res.redirect("/listings");
  });
  }catch(e){
    req.flash("error",e.message);
    res.redirect("/signup");
  }
}));

router.get("/login",(req,res) => {
  res.render("users/login.ejs");
});

router.post("/login",savedirectUrl, passport.authenticate( "local" , { failureRedirect: "/login" , failureFlash:true}) ,async (req,res) => {
  req.flash("success", "Welcome back to AirBnB!!!");
  res.redirect(res.locals.returnTo || "/listings");
});

router.get("/logout",(req,res,next) => {
  req.logout((err) => {
    if(err) return next(err);
    req.flash("success","Logged Out Successfully!!");
    res.redirect("/listings");
  });
})

module.exports = router;