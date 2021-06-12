const mongoCollections = require('./config/mongoCollections');
const bands = mongoCollections.bands;

let exportedMethods = {
  getAllBands() {
    let bandCollection = await bands();
    return await bandCollection.find({}).toArray(); 
 },
  getBandByName(id) {
    if (!id) throw "No ID provided";
        let bandCollection = await bands();
        let band = await bandCollection.findOne({_id: id});
        if (!band) throw "band not found";
        return band; }
,

addBand(bandName, bandMembers, yearFormed, genres, recordLabel) {
    
  },
  removeBand(id) {
    if(!id) throw "No id provided";
        
    let bandCollection = await bands();
    let info = bandCollection.deleteOne({_id: id});
    if(info.deletedCount === 0) {
        throw `Could not delete band with id of ${id}`;
    } else {
        return {deleted: "okay"};
    }
  },
  searchBandByName(bandName) {
    }



}
module.exports = exportedMethods;