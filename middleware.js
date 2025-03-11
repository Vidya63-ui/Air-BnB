module.exports.isLoggedin = (req,res,next) =>{
  if(!req.isAuthenticated()){
    req.session.returnTo = req.originalUrl;
    req.flash("error","User must be logged in!");
    return res.redirect("/login");
  }
  next();
}

module.exports.savedirectUrl = (req,res,next) => {
  if(req.session.returnTo){
    res.locals.returnTo = req.session.returnTo;
  }
  next();
}