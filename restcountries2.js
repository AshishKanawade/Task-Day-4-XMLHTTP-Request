var request = new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json",true);
request.send();
request.onload=()=>{
  var data=JSON.parse(request.response);
  for(var val of data){
  console.log(val.name);
  console.log(val.region);
  console.log(val.subregion);
  console.log(val.population);
  }
}