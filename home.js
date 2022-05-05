$(document).ready(function(){

    var clientId ="1091847685004-3p5bl7psjjlk8jjsf9cd6smnc102i89e.apps.googleusercontent.com"; //ENTER YOUR CLIENT ID FROM THE GOOGLE DEVELOPER CONSOLE

    var redirect_uri="http://127.0.0.1/fileuploader/upload.html";

    var scope="https://www.googleapis.com/auth/drive";

    var url=""


    $("#login").click(function(){

        signIn(clientId,redirect_uri,scope,url);
    
    
    })


    function signIn(clientId,redirect_uri,scope,url){

        url = "https://accounts.google.com/o/oauth2/v2/auth?redirect_uri="+redirect_uri
        +"&prompt=consent&response_type=code&client_id="+clientId+"&scope="+scope
        +"&access_type=offline";

        window.location = url;
        
    }


});

