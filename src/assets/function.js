//localStorage.clear();

(function () {
  //query string
  var ClientId = (function () {
    var scripts = document.getElementsByTagName('script');
    var myScript = scripts[scripts.length - 1];
    var queryString = myScript.src.replace(/^[^\?]+\??/, '');
    var ClientId = new Object();
    if (!queryString) return ClientId; // return empty object
    var Pairs = queryString.split(/[;&]/);
    for (var i = 0; i < Pairs.length; i++) {
      var KeyVal = Pairs[i].split('=');
      if (!KeyVal || KeyVal.length != 2) continue;
      var val = unescape(KeyVal[1]);
      val = val.replace(/\+/g, ' ');
    }
    return val;
  }());

  //get day on yesterday 
  var yesterday = new Date();
  var dd = String(yesterday.getDate() - 1).padStart(2, '0');
  var mm = String(yesterday.getMonth() + 1).padStart(2, '0');
  var yyyy = yesterday.getFullYear();

  yesterday = yyyy + '-' + mm + '-' + dd;
  var data_detail; // for show detail Exchange Rate
  var storageday = JSON.parse(localStorage.getItem('ExchangeRate'));

  if (storageday != null && storageday[0].period == yesterday)// check when data in localstorate is duplicate
  {
    console.log(storageday);
  }
  else//get api Exchange Rate
  {
    if (window.navigator.onLine) {
      try {
        var xhr = new (window.ActiveXObject || XMLHttpRequest)("Microsoft.XMLHTTP");// Handle IE and more capable browsers
        xhr.withCredentials = true;
        var objresponse
        xhr.addEventListener("readystatechange", function () {
          if (this.readyState === 4 && xhr.status == 200) {
            objresponse = JSON.parse(this.responseText);
            data_detail = JSON.stringify(objresponse.result.data.data_detail);
            if (JSON.parse(data_detail)[0].period == "") {
              console.log(storageday);
            } else {
              localStorage.setItem('ExchangeRate', data_detail);
              console.log(JSON.parse(data_detail));
            }
          }
        });

        xhr.open("GET", "https://apigw1.bot.or.th/bot/public/Stat-ExchangeRate/v2/DAILY_AVG_EXG_RATE/?start_period=" + yesterday + "&end_period=" + yesterday + "&Accept=application/json&currency=");
        xhr.setRequestHeader("X-IBM-Client-Id", ClientId);

        xhr.onerror = function (e) {
          //console.clear(); //clear console
        };
        xhr.send();
      }
      catch (e) {
	console.log(e);
      }
    }
  }
})();
