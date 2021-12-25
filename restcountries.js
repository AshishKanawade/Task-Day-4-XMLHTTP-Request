//Using XMLHTTP Request and Console.image library to display images in console

var request = new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json",true);
request.send();
request.onload = () =>{
  var data= JSON.parse(request.responseText);
  for(var val of data) {
    console.log(val.flag);
  }  
}
