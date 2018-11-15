const express = require("express");
const app = express();
const MongoClient = require("");

const url = 'mongodb: // omega.unasec.info amazon';

app.use(express.json());

MongoClient.connect(8080, url, function function(err,' https://anthony-proj-tonysamuel.c9users.io') {
    app.get( '/reveiws/:reveiwid' , (req,res) => {
    
    res.send(req.query.reviewid);
    
});

app.get('https://server/review/:n/:stars', (req,res) => {
    
    res.send(req.query.stars);
});
app.get('https://server/review/:n/:from_date/:to_date', (req,res) => {
    
    res.send(req.query.to_date);
});
app.post('https://server/review/:reviewid', (req,res) => {
    if(!req.body.reviewerID){
        req.status(400).send("Id is required")
    }
    const review = {
        id: review.id,
        reviewerID: req.body.reviewerID,
        asin: req.body.asin,
        reviewerName: req.body.reviewerName,
        reviewText: req.body.reviewText,
        summary: req.body.summary,
        reviewTime: req.body.reviewTime
    }
    reviewid.push(review);
    res.send(review);
});
app.put('https://server/review/:reviewid', (req,res) => {
    const review = review.find(r => r.id === parseInt(req.params.id));
    if(!review){
        res.status(404).send("The review ID was not found")
    }
});
app.delete('https://server/review/:reviewid', (req,res)=>{
        const review = review.find(r => r.id === parseInt(req.params.id));
    if(!review){
        res.status(404).send("The review ID was not found")
    }
    const index = review.indexOf(reviewid);
    review.splice(index, 1);
    
    res.send(review);
});

const port = process.env.PORT || 8080;
app.listen(port);
console.log('Listening on port 8080..');
}).close();
