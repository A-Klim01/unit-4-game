var wins= 0;
var losses= 0;
var random_result;
var previous= 0;
var startgame;

var resetStartGame = function () {

random_result = Math.floor(Math.random() * 69 ) + 30;

console.log(random_result);


$("#result").html('random Result:' + random_result);

for(var i = 0; i < 4; i++){
   
    var random= Math.floor(Math.random() * 12) + 1;
    console.log(random);

    var crystal = $("<div>");
    crystal.attr("class", 'crystal');

    $(".crystal").append(crystal);
}

}

resetStartGame();

$(".crystal").on('click', function () {

    
    
    var num = parseInt($(this).attr('data-random'));

    previous += num;

    if( previous > random_result){
       $("#lost").html(losses)
        
       lost--;
    }
    else if(previous === random_result){
        
            win++;
        $("#win").html(win)
    }

    

 
    
});
