const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const db = require("../db/connection");

//TODO: Create your GET Request Route Below: 
app.get("/restaurants", async (req, res) => {
    let allRestaurants = await Restaurant.findAll({})       //use { } to get all info stored in the restuarants object
    res.json(allRestaurants)
})  
    
    
    // async function getRestaurants(){
    //     let res
    //     res = await Restaurant.findAll()
    //     console.log(res)

    //     let data = await res.json
    //     console.log(data)
    //     return data
    // }
    




module.exports = app;