const mongoCollections = require('../config/mongoCollections');
const bands = mongoCollections.bands;

let exportedMethods = {
  getAllBands: async () => {
    const bandCollection = await bands();
    return await bandCollection.find().toArray();
  },
  getBandByName: async (id) => {
    if (id === undefined) throw 'Provide an ID';
    const bandCollection = await bands();
    const band = await bandCollection.findOne({ _id: id });
if(!band) {throw 'Could not find band with id of ' + id;
    }
    return band;
  }
  ,
  addBand(bandName, bandMembers, yearFormed, genres, recordLabel) {
    return bands().then(bandCollection => {
      let newBand = {
        bandName: bandName,
        bandMembers: bandMembers,
        yearFormed:yearFormed,
        genres:genres ,
        recordLabel: recordLabel
      };

      return bandCollection
        .insertOne(newBand)
        .then(newInsertInformation => {
          return newInsertInformation.insertedId;
        })
        .then(newId => {
          return this.getBandByName(newId);
        });
    });
  },
  removeBand(id) {
    return bands().then(bandCollection => {
      return bandCollection.removeOne({ _id: id }).then(deletionInfo => {
        if (deletionInfo.deletedCount === 0) {
          throw `Could not delete band with id of ${id}`;
        }
      });
    });
  },

  searchBandByName: async (search) => {
  if (!search) throw 'provide name';
  const bandCollection = await bands();
  return await bandCollection.find({ bandName: search }).toArray();
  },
  
  searchBandMemberFullName: async (firstName, lastName) => {
  if(!firstName && !lastName){    throw 'You must provide a name';}
  const bandCollection = await bands();
  return await bandCollection.find({ $and: [{ 'firstName': firstName }, { 'lastName': lastName }] }).toArray();
  },
  searchBandMember: async (name) => {
  if(!name){      throw 'You must provide a name';}
  const bandCollection = await bands();
  return await bandCollection.find({ $or: [{ 'firstName': name }, { 'lastName': name }] }).toArray();
      },
searchBandByGenre: async (genre) => {
  if (!genre) {throw 'You must provide a name';}
   const bandCollection = await bands();
 return await bandCollection.find({ 'genreName': genre }).toArray();
},

searchBandByYear: async (year) => {
if (yearFormed === 'undefined'){  throw 'You must provide a valid date';}
 const bandCollection = await bands();
 return await bandCollection.find({ 'yearFormed': year }).toArray();
},
    
searchBandFormedBefore: async (year) => {
if (year === undefined) {throw 'You must give a starting year';}
 const bandCollection = await bands();
return await bandCollection.find({ 'yearFormed': { $lt: year } }).toArray();
  },
    
searchBandFormedOnOrBefore: async (year) => {
    if (year === undefined)  { throw 'You must give a starting year';}
  const bandCollection = await bands();
  return await bandCollection.find({ 'yearFormed': { $lte: year } }).toArray()
  },
    
searchBandFormedAfter: async (year) => {
   if (year === undefined)  {throw 'You must give a starting year';}
  const bandCollection = await bands();
  return await bandCollection.find({ 'yearFormed': { $gt: year } }).toArray();
 },

searchBandFormedOnOrAfter: async (year) => {
 if (year === undefined)    {throw 'You must give a starting year';}
 const bandCollection = await bands();
 return bandCollection.find({ 'yearFormed': { $gte: year } }).toArray();
  },
      
addBandMember: async (bandId, firstName, lastName) => {
  if (bandId === undefined)  {throw 'No id provided';}
  if (!firstName && !lastName)   {throw 'No memberToRemove provided';}
  const bandCollection = await bands();
    return bandCollection.update({ _id: bandId }, { $set: { 'firstName': firstName } }).then(function() {
        return module.exports.getMovie(id);
    });
   addBandMembers(firstName, lastName);
 },

 removeBandMember: async (bandId, firstName, lastName) => {
if (bandId === undefined)  {throw 'No id provided';}
if (!firstName && !lastName)  {throw 'No memberToRemove provided';}
  const bandCollection = await bands();
  return bandCollection.update({ _id: bandId }, { $pull: { 'bandMembers': firstName } }).then(function() {
  return module.exports.getMovie(id);
        });
      }
    };
    
    module.exports = exportedMethods;