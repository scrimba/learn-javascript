// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works
person = {
        name: "ronaldssebalamu",
        age: 26,
        country: "Uganda"
}

function logData(){
        console.log(person.name + "is " + person.age + "years old and lives in " + person.country)
}
// const logData = () =>{
//         console.log()
// }
logData()