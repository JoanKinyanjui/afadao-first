const { default: mongoose } = require('mongoose')

const Schema = require('mongoose').Schema


const businessSchema = new Schema({
    company_name:{
        type:String,
        required:[true,"Please Enter Business Name"]
    },
    tag_line:{
        type:String,
        required:[true,"Please Enter business motto"]
    },
    target:{
        type: Number,
        required:[true,"Estimated Target"]
    },
    valuation:{
     type:Number,
    },
    days_left:{
        type:Number,
    },
    investors:{
      type:Number,
    },
    background_image:{
        type:String,
    },
    profile_image:{
        type:String,
    },
    raised_amount:{
        type:Number,
        required:true,
    },
    min_anvest:{
        type:Number,
    }
})



module.exports = mongoose.model("Business", businessSchema)