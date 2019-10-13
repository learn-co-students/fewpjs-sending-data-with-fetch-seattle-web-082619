
// fetch('http://localhost:3000/dogs',{
//   method: 'POST',
//   headers: {
//     "Content-Type" : "application/json" // we are telling the server we are sending json, like a prenote before opening the request
//     "Accept": "application/json" // we are telling the server in that same note how we like our data recieved. We want it in json form. 
//   }
//   body: JSON.stringify({
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   })
// });

// let formData = {
//   dogName: "Spanky",
//   dogBreed: "German Lab"
// };

// let configObject = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify(formData)
// };

// fetch("http://localhost:3000/dogs", configObject)
//   .then(function(response){
//     return response.json();
//   })
//   .then(function(object){
//     console.log(object);
//   });

// function submitData(name, email) {
//   let formData = {
//     name: "Ian",
//     email: "ianhunterharold@gmail.com"
// };

//   let configObject = {
//     method: "POST",
//     header: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
//   }

//   return fetch("http://localhost:3000/users", configObject)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(object) {
//       console.log(object);
//     })
//     .catch(function(error) {
//       alert("Bad things!");
//       console.log(error.message);
//   }  
// }

function submitData( name, email ) {
  return fetch( 'http://localhost:3000/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify( {
        name,
        email
      } )
    } )
    .then( function ( response ) {
      return response.json()
    } )
    .then( function ( object ) {
      document.body.innerHTML = object[ "id" ]
    } )
    .catch( function ( error ) {
      document.body.innerHTML = error.message
    } )
}