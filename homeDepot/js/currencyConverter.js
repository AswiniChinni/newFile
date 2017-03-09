/*below function is used convert currency using JSON API*/
   function inputChange(json){
  
getJSONP('http://api.fixer.io/latest?callback=?', function(data){
   var json = data;
	console.log("data"+json);
	
	var demo = function() {
	  rates = json.rates
  fx.rates = json.rates
  amount = document.getElementById("InputAmount").value
  InputCurr = document.getElementById("inputSelect").value
  outputCurr = document.getElementById("outPutSelect").value
  if(amount === ""){ /* empty value check for input currency amount*/
    document.getElementsByName('outputAmount')[0].value = "0.00";
  } else{
  var rate = fx(amount).from(InputCurr).to(outputCurr)
  finalAmount = rate.toFixed(2)
  document.getElementsByName('outputAmount')[0].value = finalAmount;
  }
}
demo();

}); 
   }
   function isNumberKey(evt)
       {
          var charCode = (evt.which) ? evt.which : evt.keyCode;
          if (charCode != 46 && charCode > 31 
            && (charCode < 48 || charCode > 57))
             return false;

          return true;
       }
   function getJSONP(url, success) {

    var ud = '_' + +new Date,
        script = document.createElement('script'),
        head = document.getElementsByTagName('head')[0] 
               || document.documentElement;

    window[ud] = function(data) {
        head.removeChild(script);
        success && success(data);
    };

    script.src = url.replace('callback=?', 'callback=' + ud);
    head.appendChild(script);

}

