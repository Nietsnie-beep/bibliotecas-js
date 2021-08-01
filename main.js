function callback(data){
    if(data){ //data !=
        console.log('added whith five', data + 5);
    }else{
        console.log('please provide first parameter');
    }
}

function addFive(data, callback){
    if(data != undefined){
        console.log('calling function', data);
    }
    callback(data);
}

addFive(50, callback);