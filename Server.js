const express = require("express");
const app = express();
app.use(express.json());
app.get( '/reveiws/:reveiwid' , (req,res) => {
    
    res.send(req.query.reviewid);
    
});

app.get('https://server/review/:n/:stars', (req,res) => {
    
    res.send(req.query.stars);
});
app.get('https://server/review/:n/:from_date/:to_date', (req,res) => {
    
    res.send(req.query.to_date);
});
app.post('https://server/review/:reviewid');
app.put('https://server/review/:reviewid');
app.delete('https://server/review/:reviewid');

const port = process.env.PORT || 8080;
app.listen(port);
console.log('Listening on port 8080..');