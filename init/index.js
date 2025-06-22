const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");


let userId = [
    '685503f8321c14360c49e8c7',
    '68551d16b367ddaf63c0d7c4',
    '68551d37b367ddaf63c0d7cb',
    '68551d6ab367ddaf63c0d7d2',
    '68551d89b367ddaf63c0d7d9',
    '68551da7b367ddaf63c0d7e0'
];

const mongo_url = "mongodb://127.0.0.1:27017/moyo";
main()
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log(err);
    })

async function main() {
    await mongoose.connect(mongo_url);
}

const initDB = async () => {
    await Listing.deleteMany({});
    let i = 0;
    for (listing of initData.data) {
        if (i == 6) i = 0;
        listing.owner = userId[i];
        i++;
    }
    // console.log(initData.data);
    await Listing.insertMany(initData.data);
    console.log("Data was initialised");

}

initDB();