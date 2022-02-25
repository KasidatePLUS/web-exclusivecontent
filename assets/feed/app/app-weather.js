
//uncomment below line if running in node
//const fetch = require("node-fetch");

fetch("https://covid19.ddc.moph.go.th/api/Cases/today-cases-all")
  .then(
    response => {
      if (response.ok)
        return response.json();
      else 
        throw new Error("Request Failed");
    },networError => {
      console.log(networError.message);
    })
  .then(jsonResponse => {
    console.log(jsonResponse);
  });


