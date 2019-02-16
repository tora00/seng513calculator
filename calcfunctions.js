$(document).ready(function(){
    let newresult="";
    let storedfunction="";
    $("button").click(function() {
        let but = $(this).val();
        if(but === 'CE'){
            newresult=newresult.substring(0,newresult.length-1);
            $("#result").html(newresult);
        }
        else if(but !== '='){
            if(but === "Ans")
                newresult+=storedfunction;
            else if(isNaN(but) && newresult==="")
                newresult=0+but;
            else
                newresult += but;
            $("#result").html(newresult);
        }
        else{
            try{
                newresult = eval(newresult).toString();
                storedfunction = newresult;
                $("#old-result").html(storedfunction);
                $("#result").html(newresult);
            }
            catch(e){
                if (e instanceof SyntaxError){
                    $("#result").html("Invalid Experession!");
                }
            }      
        }
        
    });
});

