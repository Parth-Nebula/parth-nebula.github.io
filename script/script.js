function Nextone()
{
    
    var handle = document.getElementById("handle").value;
    
    console.log(handle);
    
    sessionStorage.setItem("userhandle", handle);
        
    location.replace("portfolio.html");
    
}

function TheoneWiththeFriends()
{
    
    location.replace("friends.html");
    
}
