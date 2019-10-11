document.addEventListener('DOMContentLoaded', () => {
  submitData(name, email)
})

function submitData(name, email) {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  }

  return fetch("http://localhost:3000/users", config)
  .then(res => res.json())
  .then(object => {
    document.body.textContent = object.id
  })
  .catch(error => document.body.textContent = error.message);
}