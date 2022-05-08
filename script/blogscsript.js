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

        for (let iiii = 0 ; iiii< (data.result.length) ; iiii++)
        {
            
            if (iiii >3 )
                {
                    break;
                }
                
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
                
                row = table.insertRow(iiii);

                cell1 = row.insertCell(0);

                cell2 = row.insertCell(1);

                cell1.innerHTML = (data.result)[iiii].title;
                
                cell2.innerHTML = result.result[0].text;
                
                
                
            }
            
            asyncCall();
                          
        }
                
                
                
                
                
        
        


        
            
            
        
    })
}


getData();