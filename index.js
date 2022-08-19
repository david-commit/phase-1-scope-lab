// declare customerName to be bob in global scope & returns the customerName
var customerName = 'bob';

// modifies the customerName variable to upper string
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}

// Declare a variable called bestCustomer in global scope and assigns it to be 'not bob'
var bestCustomer;
function setBestCustomer(){
    bestCustomer = 'not bob'
    return bestCustomer;
}

// overwrites the best customer
function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
}

// unsuccessfully tries to reassign the least favorite customer
function changeLeastFavoriteCustomer(){
    const bestCustomer = 'its bob';
    bestCustomer = 'probably bob';
}


