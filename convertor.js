

var trial1 = config.TRIAL_TOKEN1;
var trial2 = config.TRIAL_SECRET_KEY1;
var fixerAPI = config.FIXER_API_KEY;


function processSuccess(result) {
    console.log(result);
    var baseCCY = result.base;
    
}


function clicked(){

    alert('fixer_API_TOKEN1 is ' + fixerAPI);
    
    // Set header to call API
    var myHeaders = new Headers();
    myHeaders.append("apikey", fixerAPI);

    var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
    };

    
fetch('https://api.apilayer.com/fixer/latest?base=USD&symbols=EUR,GBP', requestOptions)
  .then(response => response.text())
  .then(result => processSuccess(result))
  .catch(error => console.log('error', error));
}



