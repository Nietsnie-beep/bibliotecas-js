function getPost() {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.open('GET', 'https://jsonplaceholder.typicode.com/posts');

        req.onload = function() {
            if (req.status == 200) {
                resolve(JSON.parse(req.response));
            }
            else{
                reject()
            }
        };

        req.send();
    })
}

getPost().then(r =>{
    console.log(r);
  }).catch(() => {
    console.log('Algo salió mal');
  });