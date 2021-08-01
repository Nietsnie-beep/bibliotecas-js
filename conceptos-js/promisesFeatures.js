const myFirstPromise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve('finished'), 3000);


});

  myFirstPromise.then(
    function(result) { console.log(result); }, 
    function(error) { /* do something when rejected */}
  );

  myFirstPromise.catch( 
    function(error) { console.log(error.message); }
  );

  myFirstPromise.finally( 
    function() { console.log('promise finished'); }
  )
  .then(
    function(result) { console.log(result); } // "finished"
  );