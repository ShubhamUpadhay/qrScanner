let firstname = document.getElementById('firstname')
let secondname = document.getElementById('secondname')
let email = document.getElementById('email')

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const slug = params.slug
console.log(slug)
fetch('https://api.flitty.app/flitty/getClient', {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ "email": `${slug}` })

})
    .then(res => res.json()).then(
        data => {
            console.log(data.response)
            firstname.innerText = data.response.firstName
            secondname.innerText = data.response.secondName
            email.innerText = data.response.email
        }
    )
    .catch(err => console.log("error: ", err));