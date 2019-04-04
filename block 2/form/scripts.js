function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

function save() {
    //First name
    let firstNameSave = document.getElementById('firstName').value;
    localStorage.setItem('firstName', firstNameSave);
    //Last name
    let lastNameSave = document.getElementById('lastName').value;
    localStorage.setItem('lastName', lastNameSave);
    //Email
    let emailSave = document.getElementById('email').value;
    localStorage.setItem('email', emailSave);
    //Phone Number
    let phoneNumberSave = document.getElementById('phoneNumber').value;
    localStorage.setItem('phoneNumber', phoneNumberSave);
    //Zip Code
    let zipCodeSave = document.getElementById('number').value;
    localStorage.setItem('number', zipCodeSave);
    //Date
    let dateSave = document.getElementById('date').value;
    localStorage.setItem('date', dateSave);
    //Date
    let ratingSave = document.getElementById('rating').value;
    localStorage.setItem('rating', ratingSave);
    //List
    let listSave = document.getElementById('list').value;
    localStorage.setItem('list', listSave);
    //Options
    let optionsSave = document.getElementById('options').value;
    localStorage.setItem('options', optionsSave);
    //Comment
    let commentSave = document.getElementById('comment').value;
    localStorage.setItem('comment', commentSave);
}
