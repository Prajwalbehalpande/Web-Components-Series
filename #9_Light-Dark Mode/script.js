$(document).ready(function(){
    $("#selector").change(function(){
        $("body").toggleClass("bg-secondary");
       $("nav").toggleClass("navbar-dark bg-dark");
       $(".custom-control-label").toggleClass("text-white");
       $("h1").toggleClass("text-white");
       $("h5").toggleClass("text-white");

    })



})