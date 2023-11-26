const mongoose = require('mongoose');
const Listing = require("../models/listing.js");
const initData = require("./data.js");

const MONGO ="mongodb://127.0.0.1:27017/wanderlust";

main()
.then( (res)=> console.log(res))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "65599c5c333c259753a78594"}));
    await Listing.insertMany( initData.data);
    console.log("Data was initialised");
};

initDB();