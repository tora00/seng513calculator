var newresult="";

$(document).ready(function(){
    $("button").click(function() {
        let but = $(this).val();
        if(but === 'C'){
            newresult="";
            $("#result").html(newresult);
        }
        else if(but !== '='){
            newresult += but;
            $("#result").html(newresult);
        }
        else{
            try{
                newresult = eval(newresult);    
                $("#result").html(newresult);
            }
            catch(e){
                if (e instanceof SyntaxError){
                    $("#result").html("Undefined");
                }
            }      
        }
        
    });

});

