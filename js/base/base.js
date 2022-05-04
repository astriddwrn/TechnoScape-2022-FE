// ##### UTILITIES ##########

function checkBreakPoints(points, cb){
    points = Object.assign([], points);
    points.sort(function(a, b){ return a - b; });
    points = points.filter(function(val, i, arr){
        return val >= 0 && arr[i] != arr[i-1];
    });
    if(points[0] != 0) points.unshift(0);
    if(points[points.length - 1] < Infinity) points.push(Infinity);

    return points;
}

// ##### MAIN ##########

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