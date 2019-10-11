fetch("http://localhost:3000/dogs", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
    dogName: "Byron",
    dogBreed: "Poodle"
  })
});

function submitData(str1, str2) {
  let url = "http://localhost:3000/users";
  let config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: str1,
      email: str2
    })
  }

  return fetch(url, config).then(resp => resp.json())
  .then(json => {
    document.body.innerHTML = json.id;
  })
  .catch(error => {
    document.body.innerHTML = error.message;
  });
}

let submit = submitData("John", "johndoe@gmail.com");
