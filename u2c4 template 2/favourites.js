// write js code here corresponding to favourites.html

var favouritesData=JSON.parse(localStorage.getItem("favourites"));

window.addEventListener("load",function(){displayfav(favouritesData)});

function displayfav(favouritesData){
    favouritesData.innerHtml="";
    favouritesData.forEach(function(ele,index){
        var row=document.createElement("tr");

        var td1=document.createElement("td");
        td1.innerText=ele.matchname;

        var td2=document.createElement("td");
        td2.innerText=ele.teamA;

        var td3=document.createElement("td");
        td3.innerText=ele.teamB;

        var td4=document.createElement("td");
        td4.innerText=ele.date;

        var td5=document.createElement("td");
        td5.innerText=ele.venue;

        var td6=document.createElement("td");
        td6.innerText="DELETE";
        td6.style.color="red";
        td6.style.cursor="pointer";
        td6.addEventListener("click",function(){deleterow(ele,index)});
        row.append(td1,td2,td3,td4,td5,td6);
        document.querySelector("tbody").append(row);
    })
}

function deleterow(ele,index){
    favouritesData.splice(index,1);
    localStorage.setItem("favourites",JSON.stringify(favouritesData));
    window.location.reload();
}