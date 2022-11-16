// Create a person object that contains three keys: name, age, and county.

let person = {
    name: "Veronika",
    age: 31,
    country: "US"
}


// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

function logData() {
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
}

// Call the logData() function to verify that it works

logData();