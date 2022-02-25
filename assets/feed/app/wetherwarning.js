getJSON('https://covid19.ddc.moph.go.th/api/Cases/today-cases-all',  function(err, data) {

    if (err != null) {
        console.error(err);
    } else {

       var display = `User_ID: ${data.userId}
ID: ${data.id}
Title: ${data.title} 
Completion_Status: ${data.completed}`;
    }
  console.log(display);
});