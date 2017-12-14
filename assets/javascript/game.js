var random_result;
var lost= 0;
var win= 0;
var previous = 0;
//reset game (function)
var resetAndStart = function () {

     //set new 
    $(".crystals").empty();
    
    var images = [
        'http://moziru.com/images/drawn-crystals-ice-crystal-4.jpg',
        'https://www.bourgeon.co.uk/wp-content/uploads/2017/01/Crystal_Blue.jpg',
        'http://lotuswellbeing.com.au/wp-content/uploads/2015/08/2222screen2.jpg',
        'http://25.media.tumblr.com/53334366948ba628f176cfe69e02de15/tumblr_mgqk7yPLUe1rlaporo1_500.jpg'
    ];

//set random result to number from 19-120
random_result = Math.floor(Math.random() * 101) + 19;

$("#result").html('Random Result: ' + random_result);
//4 crystals
for(var i = 0; i< 4; i++){

    //setting crystals to random #
    var random = Math.floor(Math.random() * 12);
     //console.log(random);

    var crystal = $("<div>");
        crystal.attr({
            "class":'crystal',
            "data-random": random
        });

crystal.css({
    "background-image":"url('" + images[i] +"')",
    "background-size":"cover"
    
});

    $(".crystals").append(crystal);
    }

    $("#previous").html("Score:" + previous);

}

resetAndStart();

$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr('data-random'));
    
   previous += num;

   $("#previous").html("Score:" + previous);
      console.log(previous);

   if (previous > random_result){
       lost++;

       $("#lost").html("loser:" + lost);

       previous = 0;

       resetAndStart();
   }
   else if(previous === random_result){
       win++;

       $("#win").html("winner:" + win);

       previous = 0;

       resetAndStart();
   }

});


//Sudeou code
//4 crystal game
//every crystal should have a random # between 1-12
//a new # should be generated evrytime win or loose
//when a crystal is click the number should be dded to the previous number
//until the number is equal to the random result
//if it is not equal,then start over 
//if it is equal, then increment a win 
