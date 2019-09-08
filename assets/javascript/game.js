var wins= 0;
var losses= 0;
var random_results;

random_result = Math.floor(Math.random() * 60 ) + 30;

console.log(random_result);


$("#result").html('random Result:' + random_result);

for(var i = 0; i < 4; i++){
   
    var random= Math.floor(Math.random() * 12) + 1;
    console.log(random);

    var crystal = $("<div>");
    crystal.attr("class", 'crystal');

    $(".crystal").append(crystal);
}

