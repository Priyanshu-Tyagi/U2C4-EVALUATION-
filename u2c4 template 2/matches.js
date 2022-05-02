// write js code here corresponding to matches.html

var matchData=JSON.parse(localStorage.getItem("schedule"));

document.getElementById("filterVenue").addEventListener("change",function(){venueFilter()})

function venueFilter(){
    var select=document.querySelector("#filterVenue").value;
    console.log(select)
    var filterlist=matchData.filter(function (elem){
        return elem.venue==select;
    });
    display(filterlist);
}

var favouritesdata=JSON.parse(localStorage.getItem("favourites"))||[];

window.addEventListener("load",function(){display(matchData)});

function display(matchData){
    document.querySelector("tbody").innerHTML="";
    matchData.map(function(el){
        var row=document.createElement("tr");

        var td1=document.createElement("td");
        td1.innerText=el.matchname;

        var td2=document.createElement("td");
        td2.innerText=el.teamA;

        var td3=document.createElement("td");
        td3.innerText=el.teamB;

        var td4=document.createElement("td");
        td4.innerText=el.date;

        var td5=document.createElement("td");
        td5.innerText=el.venue;

        var td6=document.createElement("td");
        td6.innerText="Add as Favourites";
        td6.style.color="green";
        td6.style.cursor="pointer";
        td6.addEventListener("click",function(){addasfavourite(el)});

        row.append(td1,td2,td3,td4,td5,td6);
        document.querySelector("tbody").append(row);
    });
}

function addasfavourite(el){
    favouritesdata.push(el);
    localStorage.setItem("favourites",JSON.stringify(favouritesdata));
}