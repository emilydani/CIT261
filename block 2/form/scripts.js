function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

function save() {
    //First name
    var firstNameSave = document.getElementById('firstName').value;
    localStorage.setItem('firstName', firstNameSave);
    //Last name
    var lastNameSave = document.getElementById('lastName').value;
    localStorage.setItem('lastName', lastNameSave);
    //Email
    var emailSave = document.getElementById('email').value;
    localStorage.setItem('email', emailSave);
    //Phone Number
    var phoneNumberSave = document.getElementById('phoneNumber').value;
    localStorage.setItem('phoneNumber', phoneNumberSave);
    //Zip Code
    var zipCodeSave = document.getElementById('number').value;
    localStorage.setItem('number', zipCodeSave);
    //Date
    var dateSave = document.getElementById('date').value;
    localStorage.setItem('date', dateSave);
    //Date
    var ratingSave = document.getElementById('rating').value;
    localStorage.setItem('rating', ratingSave);
    //List
    var listSave = document.getElementById('list').value;
    localStorage.setItem('list', listSave);
    //Options
    var optionsSave = document.getElementById('options').value;
    localStorage.setItem('options', optionsSave);
    //Comment
    var commentSave = document.getElementById('comment').value;
    localStorage.setItem('comment', commentSave);
}
