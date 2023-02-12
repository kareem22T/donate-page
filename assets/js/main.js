function sendData (e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', document.forms["donate-form"]["the_name"].value);
    console.log(formData)
}

document.getElementById('visa-donate-now').addEventListener("click", sendData()); 