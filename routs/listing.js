const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing");
const ExpressError = require("../utils/ExpressError.js");
const {listingSchema} = require("../schema.js");
const {isLoggedin} = require("../middleware.js");

const validateListing = (req,res,next) => {
  let {error} = listingSchema.validate(req.body);
  if(error){
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400,errMsg);
  }else next();
}

//Index Route
router.get("/", wrapAsync(async (req,res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs",{allListings});
}));

//new Listing
router.get("/new", isLoggedin ,wrapAsync(async (req,res) => {
  res.render("listings/newListing.ejs");
}));

//Show Listing
router.get("/:id", wrapAsync(async (req,res) => {
  const {id} =  req.params;
  const listing = await Listing.findById(id).populate("reviews").populate("owner");
  if(!listing){
    req.flash("error","Listing You requested for does not exist!");
    res.redirect("/listings");
  }
  res.render("listings/show.ejs",{listing});
}));

//Edit Listing
router.get("/:id/edit", isLoggedin,wrapAsync(async (req,res) => {
  const {id} =  req.params;
  const listing = await Listing.findById(id);
  if(!listing){
    req.flash("error","Listing You requested for does not exist!");
    res.redirect("/listings");
  }
  res.render("listings/edit.ejs",{listing});
}));

//Add new Lsting
router.post("/", isLoggedin, validateListing, wrapAsync( async (req, res) => {
  const newListing = new Listing(req.body.listing);
await newListing.save();
req.flash("success","New Listing Created!!");
res.redirect("listings");
}));

//Update the existing listing
router.put("/:id", isLoggedin, validateListing,wrapAsync(async (req, res) => {
  const { id } = req.params;
  console.log(req.body.listing);
  await Listing.findByIdAndUpdate(id, req.body.listing);
  console.log("This is Edited..");
  req.flash("success","Listing Updated!!");
  res.redirect(`/listings/${id}`);
}));
//Delete Listing
router.delete("/:id", isLoggedin, wrapAsync(async (req,res) => {
  const {id} = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success","Listing Deleted!");
  res.redirect("/listings");
}));

module.exports = router;