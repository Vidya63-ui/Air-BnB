const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
  title :{ 
    type : String,
    required :true
  },
  dscrpt : String,
  img : {
    type : String,
    default :  "https://images.pexels.com/photos/240526/pexels-photo-240526.jpeg",
    set : (v) => v=== "" ? "https://images.pexels.com/photos/240526/pexels-photo-240526.jpeg"  : v ,
  },
  price :Number,
  location : String,
  country : String,
  reviews : [{
    type : Schema.Types.ObjectId,
    ref : "Review",
  },
  ],
  owner : {
    type : Schema.Types.ObjectId,
    ref : "User",
  }
});

listingSchema.post("findOneAndDelete", async(listing) => {
  if(listing){
    await Review.deleteMany({_id : {$in : listing.reviews}});
  }
});

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;