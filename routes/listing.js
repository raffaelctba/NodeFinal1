var Course = require('../models/listing');

var express = require('express');
var router = express.Router();



/* GET courses listing. */
router.get('/', function (req, res, next) {
    console.log("adding to list");
    var vm = { title: 'Add to List' };
    res.render('index', vm);
});

router.get('/listing', function (req, res, next) {
    var vm = { title: 'Listing' };
    res.render('listing', vm);
});

///REST API
router.get('/api/listing', function (req, res, next) {
    console.log("Received a request for /api/listing");
    Listing.find({}, function (err, listing) {
        if (err) {
            return next(err);
        }
        console.log(listing.length);
        res.json(listing)
    });
});



router.post('/api/listing', function (req, res, next) {
    console.log(req.body);
    //var courseJSON = req.body;

    var listing = new Listing(req.body);


    if (!listing.name || !listing.address || !listing.description) {
        res.status(400);
        return res.json({ "status": 400, "message": "Missing input data" });
    }

    listing.save(function (err) {
        if (err) {
            return res.status(500).json({ error: "Failed to save the listing" });
        }
        else {
            return res.json({ "status": 200, "message": "Added new course" });
        }
    });

});

module.exports = router;