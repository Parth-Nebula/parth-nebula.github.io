

function getData(){

    url = "https://codeforces.com/api/user.rating?handle=" + sessionStorage.userhandle ;

    fetch(url).then((response)=>{

        return response.json();

    }).then((data)=>{


        var table = document.getElementById("contestsTable");

        var row;

        var cell1;
        
        var cell2;

        var stst = "";

        for (let iiiiii in (data.result)) {

            row = table.insertRow(iiiiii);

            cell1 = row.insertCell(0);
            
            cell2 = row.insertCell(1);

            cell1.innerHTML = (data.result)[iiiiii].contestName;
            
            cell2.innerHTML = (data.result)[iiiiii].rank;

        }

    })
}

getData();

