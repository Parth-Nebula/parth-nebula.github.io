function getData(){
    
    console.log(sessionStorage.userhandle);
    
    url = "https://codeforces.com/api/user.info?handles=" + sessionStorage.userhandle ;
    
    console.log(url);
    
    fetch(url).then((response)=>{
        
        return response.json();
        
    }).then((data)=>{
        
        if (data.status != "FAILED"){
            
        document.getElementById("photograph").innerHTML = "<img src='" + (data.result)[0].avatar + "' height='100px' width='100px'>" ;

        document.getElementById("webpageTitle").innerHTML = (data.result)[0].handle;
        
        document.getElementById("rankTitle").innerHTML = (data.result)[0].rank;
        
        document.getElementById("username").innerHTML = (data.result)[0].handle;
        
        document.getElementById("rating").innerHTML = (data.result)[0].rating ;
        
        document.getElementById("maxRating").innerHTML = " max( " + (data.result)[0].maxRating + " )";
        
        if ((data.result)[0].rating < 1200 )
        {
                
            document.getElementById("rating").style.color = "grey";
            
        }
        
        else if ((data.result)[0].rating < 1400 )
        {
                
            document.getElementById("rating").style.color = "green";
            
        }
        
        else if ((data.result)[0].rating < 1600 )
        {
                
            document.getElementById("rating").style.color = "cyan";
            
        }
        
        else if ((data.result)[0].rating < 1900 )
        {
                
            document.getElementById("rating").style.color = "blue";
            
        }
        
        else if ((data.result)[0].rating < 2100 )
        {
                
            document.getElementById("rating").style.color = "purple";
            
        }
        
        else if ((data.result)[0].rating < 2300 )
        {
                
            document.getElementById("rating").style.color = "orange";
            
        }
        
        else if ((data.result)[0].rating < 2400 )
        {
                
            document.getElementById("rating").style.color = "#ff8800e";
            
        }
        
        else if ((data.result)[0].rating < 2600 )
        {
                
            document.getElementById("rating").style.color = "red";
            
        }
        
        else if ((data.result)[0].rating < 3000 )
        {
                
            document.getElementById("rating").style.color = "maroon";
            
        }
        
        else
        {
                
            document.getElementById("rating").style.color = "black";
            
        }
        
        if ((data.result)[0].rating < 1200 )
        {
                
            document.getElementById("rankTitle").style.color = "grey";
            
        }
        
        else if ((data.result)[0].rating < 1400 )
        {
                
            document.getElementById("rankTitle").style.color = "green";
            
        }
        
        else if ((data.result)[0].rating < 1600 )
        {
                
            document.getElementById("rankTitle").style.color = "cyan";
            
        }
        
        else if ((data.result)[0].rating < 1900 )
        {
                
            document.getElementById("rankTitle").style.color = "blue";
            
        }
        
        else if ((data.result)[0].rating < 2100 )
        {
                
            document.getElementById("rankTitle").style.color = "purple";
            
        }
        
        else if ((data.result)[0].rating < 2300 )
        {
                
            document.getElementById("rankTitle").style.color = "orange";
            
        }
        
        else if ((data.result)[0].rating < 2400 )
        {
                
            document.getElementById("rankTitle").style.color = "#ff8800e";
            
        }
        
        else if ((data.result)[0].rating < 2600 )
        {
                
            document.getElementById("rankTitle").style.color = "red";
            
        }
        
        else if ((data.result)[0].rating < 3000 )
        {
                
            document.getElementById("rankTitle").style.color = "maroon";
            
        }
        
        else
        {
                
            document.getElementById("rankTitle").style.color = "black";
            
        }
        
         if ((data.result)[0].rating < 1200 )
        {
                
            document.getElementById("username").style.color = "grey";
            
        }
        
        else if ((data.result)[0].rating < 1400 )
        {
                
            document.getElementById("username").style.color = "green";
            
        }
        
        else if ((data.result)[0].rating < 1600 )
        {
                
            document.getElementById("username").style.color = "cyan";
            
        }
        
        else if ((data.result)[0].rating < 1900 )
        {
                
            document.getElementById("username").style.color = "blue";
            
        }
        
        else if ((data.result)[0].rating < 2100 )
        {
                
            document.getElementById("username").style.color = "purple";
            
        }
        
        else if ((data.result)[0].rating < 2300 )
        {
                
            document.getElementById("username").style.color = "orange";
            
        }
        
        else if ((data.result)[0].rating < 2400 )
        {
                
            document.getElementById("username").style.color = "#ff8800";
            
        }
        
        else if ((data.result)[0].rating < 2600 )
        {
                
            document.getElementById("username").style.color = "red";
            
        }
        
        else if ((data.result)[0].rating < 3000 )
        {
                
            document.getElementById("username").style.color = "maroon";
            
        }
        
        else
        {
                
            document.getElementById("username").style.color = "black";
            
        }
        
        if ((data.result)[0].maxRating < 1200 )
        {
                
            document.getElementById("maxRating").style.color = "grey";
            
        }
        
        else if ((data.result)[0].maxRating < 1400 )
        {
                
            document.getElementById("maxRating").style.color = "green";
            
        }
        
        else if ((data.result)[0].maxRating < 1600 )
        {
                
            document.getElementById("maxRating").style.color = "cyan";
            
        }
        
        else if ((data.result)[0].maxRating < 1900 )
        {
                
            document.getElementById("maxRating").style.color = "blue";
            
        }
        
        else if ((data.result)[0].maxRating < 2100 )
        {
                
            document.getElementById("maxRating").style.color = "purple";
            
        }
        
        else if ((data.result)[0].maxRating < 2300 )
        {
                
            document.getElementById("maxRating").style.color = "orange";
            
        }
        
        else if ((data.result)[0].maxRating < 2400 )
        {
                
            document.getElementById("maxRating").style.color = "#ff8800";
            
        }
        
        else if ((data.result)[0].maxrating < 2600 )
        {
                
            document.getElementById("maxRating").style.color = "red";
            
        }
        
        else if ((data.result)[0].maxRating < 3000 )
        {
                
            document.getElementById("maxRating").style.color = "maroon";
            
        }
        
        else
        {
                
            document.getElementById("maxRating").style.color = "black";
            
        }
            
        }
        
        else{
            
            document.getElementById("username").innerHTML = "User not found";
            
        }

    })
    
}

getData();



function getChart(){
    
    url = "https://codeforces.com/api/user.rating?handle=" + sessionStorage.userhandle ;
    
    console.log(url);

    fetch(url).then((response)=>{
        
        return response.json();
        
    }).then((data)=>{

        console.log(data);
        
        if (data.status != "FAILED")
        {
                
           
        
        let labels = [];
        
        let datas =[];
        
        for (let iiii in (data.result))
        {
            
            labels[iiii] =  (data.result)[iiii].contestName ;
            
            datas[iiii] = (data.result)[iiii].newRating ;
                
        }
        
        const dataa = {
            labels: labels,
            datasets: [{
                label: 'Rating',
                backgroundColor: 'rgb(246, 190, 0)',
                borderColor: 'rgb(246, 190, 0)',
                data: datas,
            }]
        };

        
        const config = {
            type: 'line',
            data: dataa,
            options: {
                
                plugins:{
                    
                    legend:{
                        
                        display: false
                        
                },
            },
                
                manintainAspectRatio: false,
                
                scales:{
                    
                    x: {
                        
                        ticks: {
                            
                            display: false
                        }
                    }
                }
            }
        };
        
        
        const myChart = new Chart(
            document.getElementById('myChart'),
            config
        );
    
        }
        
    })
}


getChart();

 

  








