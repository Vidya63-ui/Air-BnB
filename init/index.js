const mongoose = require('mongoose');
const initData = require("./data.js");
const Listing = require("../models/listing.js");

let Mongo_URL = "mongodb://127.0.0.1:27017/Air_bnb";

main().then( () => {
  console.log("connected to DataBase");
}).catch((err)=>{
  console.log(err);
})

async function main() {
  await mongoose.connect(Mongo_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  const modifiedData = initData.data.map((obj) => ({ ...obj, owner: "67cde3e8d6524cb09fc4bf1e" }));
  await Listing.insertMany(modifiedData);
  console.log("data was initialized");
}

initDB();