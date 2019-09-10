var wins= 0;
var losses= 0;
var random_result;
var previous= 0;
var startgame;
var totalscore=0;

var resetStartGame = function () {
    previous = 0;
    $('#user-score').text('Your current score: ' + previous)
    //computer generated random number.
    random_result = Math.floor(Math.random() * 69 ) + 30;
    $("#result").html('Target Number:' + random_result);
    console.log(random_result);
    //crystal building and displaying
    $('.crystal').empty();
    for(var i = 0; i < 4; i++){
        var random= Math.floor(Math.random() * 12) + 1;
        console.log(random);
        var makeACrystal = $('<div>');
        makeACrystal.attr('class', "built-crystal")
        makeACrystal.append('<img src="./assets/images/' + i + '.jpg" class="img-fluid" alt="Responsive image">')
        makeACrystal.attr('value', random);

        $(".crystal").append(makeACrystal);
    }
}

resetStartGame();

$(document).on('click', ".built-crystal",function () {
    var num = parseInt($(this).attr('value'));
    console.log(num);
    previous += num;
    $('#user-score').text('Your current score: ' + previous)
    if( previous > random_result){
        losses++;
       $("#lost").html("Losses: " + losses);
       resetStartGame();
    }
    else if(previous === random_result){
        wins++;
        $("#win").html("Wins: " + wins);
        resetStartGame();
    };
});
