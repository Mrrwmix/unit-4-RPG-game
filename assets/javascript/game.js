//Global variables
var heroChosen = false;
var villainChosen = false;
var kimwu = {
    id: 'kimwu',
    hp: 120,
    ap: 30,
    increase: 20
}

var thunder = {
    id: 'thunder',
    hp: 150,
    ap: 20,
    increase: 15
}

var aganos = {
    id: 'aganos',
    hp: 180,
    ap: 10,
    increase: 10
}

var spinal = {
    id: 'spinal',
    hp: 120,
    ap: 50
}

var shadowjago = {
    id: 'shadowjago',
    hp: 150,
    ap: 35
}

var fulgore = {
    id: 'fulgore',
    hp: 180,
    ap: 20
}

// Use appendTo to move characters around

$(".hero").on("click", function(){
    if (!heroChosen){
        $(this).appendTo(".heroSpot");
        heroChosen = true;
        $("#results").text("Now choose your first opponent!");
    }
})

$(".villain").on("click", function(){
    if (!villainChosen){
        $(this).appendTo(".villainSpot");
        villainChosen = true;
        $("#results").text("Fight on!");
        $("#attack").attr('display', 'block');
    }
})
// Use appendTo in the restart function, clear object's stats


// Adding/subtracting HP