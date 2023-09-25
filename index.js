/*const formData = {
    name: " ",
    email: " ",
};
const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify(formData),
};*/

const data = ((r) => r.json())


function submitData(name,email) {
    return fetch(`http://localhost:3000/users`,{
        method:"POST",
        headers:{
            "Content-Type": `application/json`,
            "Accept": `application/json`,
        },
        body: JSON.stringify({name, email,})
    })
    .then(data)
    .then((errorObject) => 
        document.body.innerHTML = errorObject.id)
    .catch(function(error) {
            alert("Bad thing");
            console.log(error.message);
            document.body.innerHTML = error.message
})
};
