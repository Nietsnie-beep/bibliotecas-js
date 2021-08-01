const { response } = require("express");
boolean = false;

const promesa = new Promise((resolve, reject) => {
    if (boolean) {
        resolve('ha funcionado');
    }else {
        reject('ha fallado');
    }
});

promesa
    .then((response) => {
        console.log('Response', response);
    })
    .catch((error) => { 
        console.log('Error', error);
    });