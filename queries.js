/* Fill out these functions using Mongoose queries*/
var mongoose=require('mongoose'),
    Listing=require('./ListingSchema.js'),
    config=require('./config.js');
mongoose.connect(config.db.uri);
var findLibraryWest = function() {
    Listing.find({name: 'Library West'}, function(err,data){
         if(err) throw err;
         console.log(data);
    });
};
var removeCable = function() {
  Listing.findOneAndRemove({code: 'CABL'}, function(err,data){
        if(err) throw err;
        console.log(data);
  });
};
var updatePhelpsLab = function() {
  Listing.findOneAndUpdate({name: "Phelps Laboratory"}, {address: "1953 Museum Road"}, {new:true}, function(err,data){
               if(err) throw err;
               console.log(data);
        });
};
var retrieveAllListings = function() {
  Listing.find({}, function(err,data){
        if(err) throw err;
        console.log(data);
  });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
