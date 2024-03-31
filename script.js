function getFormvalue() {
    //Write your code here
   // Retrieve the values of the First and Last name from the form
    const firstName = document.getElementsByName('fname')[0].value.trim();
    const lastName = document.getElementsByName('lname')[0].value.trim();

    // Concatenate the First and Last name
    const fullName = firstName + ' ' + lastName;

    // Display the First and Last name using an alert
    alert(fullName);
}
