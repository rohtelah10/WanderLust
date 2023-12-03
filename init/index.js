const mongoose = require('mongoose');
const Listing = require("../models/listing.js");
const initData = require("./data.js");

const MONGO ="mongodb://127.0.0.1:27017/wanderlust";
const dbUrl = "mongodb+srv://rohtelah10:CVl3gEvSpQ6EDhwk@cluster0.124vfju.mongodb.net/?retryWrites=true&w=majority";

main()
.then( (res)=> console.log(res))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "6562f53cc31aadf8650810e8"}));
    await Listing.insertMany( initData.data);
    console.log("Data was initialised");
};

initDB();