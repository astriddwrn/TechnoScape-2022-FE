$( document ).ready(function() {  
    $("#ask-us-button").click(() => {
        $("#ask-us-modal").toggleClass("hidden");
    })
    $("#close-ask-us-modal").click(() => {
        $("#ask-us-modal").toggleClass("hidden");
    })
    $("#navToggler").click(() => {
        $("#navMobile").slideToggle("slow");
    })
    $("#xButtonNav").click(() => {
        $("#navMobile").slideToggle("slow");
    })
});