function getData(){
    
    url = "https://codeforces.com/api/user.blogEntries?handle=" + sessionStorage.userhandle ;
    
    console.log(url);
    
    fetch(url).then((response)=>{
        
        return response.json();
        
    }).then((data)=>{

        console.log(data);
        
        var table = document.getElementById("blogTable");
            
        var row;

        var cell1;
        
        var cell2;
        
        var rownumber = 0; 
                      
                   

            
        function resolveThisplease() {

            return new Promise(resolve => {
            setTimeout(() => {


                url = "https://codeforces.com/api/blogEntry.comments?blogEntryId=" + data.result[iiii].id;

                fetch(url).then((response1)=>{

                    return response1.json();

                }).then((data1)=>{


                    resolve(data1);

                })




            }, 100);

            });
        }


        async function asyncCall() {

            console.log('calling');

            const result = await resolveThisplease();

            row = table.insertRow(rownumber);

            rownumber+=1;

            cell1 = row.insertCell(0);

            cell2 = row.insertCell(1);

            cell1.innerHTML = (data.result)[iiii].title;

            cell2.innerHTML = result.result[0].text;



        }
        
        
            
            
        var iiii = 0;                 

        function myLoop() {         
          
            setTimeout(function() {   
              
            asyncCall();   
              
            iiii++;
                
            if (iiii < data.result.length) { 
                
              myLoop();
                
            }    
                
          }, 1000)
            
        }

        myLoop();                   
        
        
    })
}


getData();