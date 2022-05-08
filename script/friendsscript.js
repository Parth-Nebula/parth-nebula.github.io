function sha512(str) {
  return crypto.subtle.digest("SHA-512", new TextEncoder("utf-8").encode(str)).then(buf => {
    return Array.prototype.map.call(new Uint8Array(buf), x=>(('00'+x.toString(16)).slice(-2))).join('');
  });
}





function allThestuff(){
    
    let num = (Math.floor(Date.now()/1000));
    let times = num.toString();
    
    var xxx = "";
    var yyy = "";

    function getxxx(){

        url = "text/key.txt";

        console.log(url);

        fetch(url).then((response)=>{

            return response.text();

        }).then((data)=>{

            xxx = data;

        })
    }

    function getyyy(){

        url = "text/secret.txt";

        console.log(url);

        fetch(url).then((response)=>{

            return response.text();

        }).then((data)=>{

            yyy = data;

        })
}

    
    function resolveThisfirst() {
        
      return new Promise(resolve => {
          
        setTimeout(() => {
            
          resolve(sha512("123456/user.friends?apiKey="+ xxx + "&time=" + times + "#" + yyy));
            
        }, 50);
          
      });
        
    }
    
    function resolveThissecond() {
        
      return new Promise(resolve => {
          
        setTimeout(() => {
            
          resolve(sha512("123456/user.friends?apiKey=" + xxx + "&onlyOnline=true&time=" + times + "#" + yyy));
            
        }, 50);
          
      });
        
    }
    
    async function asyncCall() {
        
        await getxxx();
        await getyyy();
        const result1 = await resolveThisfirst();
        const result2 = await resolveThissecond();

        url1 = " https://codeforces.com/api/user.friends?apiKey=" + xxx + "&time=" + times + "&apiSig=123456" + result1;
        
        url2 = " https://codeforces.com/api/user.friends?onlyOnline=true&apiKey=" + xxx + "&time=" + times + "&apiSig=123456" + result2;
        
        console.log(url1);
        console.log(url2);

        
        function getData(){
    
            url = arguments[0];

            fetch(url).then((response)=>{

                return response.json();

            }).then((data)=>{

                function getData2(){
    
                    url = arguments[0];

                    fetch(url).then((response)=>{

                        return response.json();

                    }).then((data)=>{

                        data1 = arguments[1];
                        data2 = data;
                        
                        var table = document.getElementById("friendsTable");
            
                        var row;

                        var cell;
                        
                        var stst = "";

                        for (let iiiii in (data1.result)) {

                            console.log(iiiii);

                            row = table.insertRow(iiiii);

                            cell = row.insertCell(0);
                            
                            stst = (data1.result)[iiiii];
                            
                            if ((data2.result).includes(stst))
                                {
                                    stst+= "🌿"
                                }

                            cell.innerHTML = stst;
                            
                        }

                    })
                }
            
                getData2(arguments[1],data);


            })
        }

    getData(url1,url2);

    }

   asyncCall();
 
    
}


allThestuff();



