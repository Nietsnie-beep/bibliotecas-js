function greeting(edad, name) {
    console.log("Hello, " + name + edad + "!");
}

function processUser(edad, callback) {
    let name = 'niets';
    
    if (edad < 18) {
        callback(name, 'young');
    }
    else {
        callback(name, 'old');
    }
}

processUser(20, greeting);