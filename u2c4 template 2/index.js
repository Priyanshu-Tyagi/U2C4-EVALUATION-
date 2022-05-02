// write js code here corresponding to index.html
// You should add submit event on the form

var matchdata=JSON.parse(localStorage.getItem("schedule"))||[];

document.querySelector("#masaiForm").addEventListener("submit",function (event){
    event.preventDefault();

    var data={
        matchname:document.querySelector("#matchNum").value,
        teamA:document.querySelector("#teamA").value,
        teamB:document.querySelector("#teamB").value,
        date:document.querySelector("#date").value,
        venue:document.querySelector("#venue").value,
    }

    matchdata.push(data);
    localStorage.setItem("schedule",JSON.stringify(matchdata));
})