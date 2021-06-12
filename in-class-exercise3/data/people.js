const axios = require('axios');
async function getPeople(){
  const response = axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
  .then(function (response) {
    for(var i=0;i<501;i++){
      const fullList = response.data[i].firstName +" "+ response.data[i].lastName;
      return fullList;
    }
  })
}
  
async function getPersonById(id){

const response = axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
  .then(function (response) {
   if(id==undefined || id==null) throw " Not a proper input";
   if(id<0||id>500) throw "ID out of bounds"
   if(typeof id=="number"){
      for(var i=0;i<501;i++){
        if(response.data[i].id==id){
          throw response.data[i].firstName +" "+ response.data[i].lastName;
          }
        }
      }
      
  }).catch(function (error) {
     console.log(error);
  })
}

module.exports = {
    getPeople,getPersonById
}