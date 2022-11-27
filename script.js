var container=document.createElement("div");
container.setAttribute("class","container");
var row=document.createElement("div");
row.classList.add("row","m-3");
container.append(row);
var res=fetch("https://restcountries.com/v2/all")
res.then((data)=>data.json()).then((value)=>foo(value));

function foo(value){
    for(var i=0;i<value.length;i++){
        row.innerHTML+=`
        <div class="col-md-4">
        <div class="card border-primary mb-3" style="max-width: 18rem;">
        <b style="margin:5px;padding:15px;font-size:20px; text-align: center ;background-color:black  ;color: white;">${value[i].name}</b>
        <div class="card-body text-primary">
        <div style="text-align:center;" >
        <img src="${value[i].flag}" class="card-img-top" >
        <b>Captial: ${value[i].capital}</b><br>
        <b>Region: ${value[i].region}</b><br>
        <b>Country Code: ${value[i].alpha3Code}</b>
        <a href="https://api.openweathermap.org/data/2.5/weather?q=${value[i].name}&appid=de94a11e29949964dec77ae7e4f8a6ef" target="_blank" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Click for Weather</a>
        </div>
        </div>
      </div>
      </div>
      `;
      document.body.append(container);
    }
}