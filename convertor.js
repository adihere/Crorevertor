

var trial1 = config.TRIAL_TOKEN1;
var trial2 = config.TRIAL_SECRET_KEY1;
var fixerAPI = config.FIXER_API_KEY;


function processSuccess(result) {
  console.log('from process Success');  
  console.log('Base CCY:' + result.base);    
  console.log('Rates:' + result.rates);    
    
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


function readJSON(){
  alert('read test JSN data');
  const LOCAL_URL_API_TEST_DATA  = 'http://localhost:3000/data';

  

  fetch(LOCAL_URL_API_TEST_DATA)
  .then(response => response.json())
  .then(result => processSuccess(result))
  .catch(error => console.log('error', error));

}




