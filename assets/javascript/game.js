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
    increase: 18
}

var aganos = {
    id: 'aganos',
    hp: 180,
    ap: 10,
    increase: 15
}

var spinal = {
    id: 'spinal',
    hp: 120,
    ap: 50
}

var shadowjago = {
    id: 'shadowjago',
    hp: 150,
    ap: 45
}

var fulgore = {
    id: 'fulgore',
    hp: 180,
    ap: 38
}
var heroCounter = 0;
var villainCounter = 0;
var hero;
var villain;
// Setting Initial HP

$("#kimwuHP").text(kimwu.hp);
$("#thunderHP").text(thunder.hp);
$("#aganosHP").text(aganos.hp);
$("#spinalHP").text(spinal.hp);
$("#shadowjagoHP").text(shadowjago.hp);
$("#fulgoreHP").text(fulgore.hp);

// Use appendTo to move characters around

$(".hero").on("click", function () {
    if (!heroChosen) {
        hero = $(this).attr("id");
        $(this).appendTo(".heroSpot");
        heroChosen = true;
        if (!villainChosen) {
            $("#results").text("Now choose your opponent!");
        }
        else {
            $("#results").text("Fight on!");
            $("#attack").css("display", "block");
        }
        $(".hero").each(function (index) {
            if ($(this).attr("id") != hero) {
                $(this).css("border-color", "grey");
            }
        })
    }
})

$(".villain").on("click", function () {
    if (!villainChosen) {
        villain = $(this).attr("id");
        $(this).appendTo(".villainSpot");
        villainChosen = true;
        $(".villain").each(function (index) {
            if ($(this).attr("id") != villain) {
                $(this).css("border-color", "grey");
            }
        })
    }
    if (villainChosen && heroChosen){
        $("#attack").css('display', 'block');
        $("#results").text("Fight on!");
    }
    if (villainChosen && !heroChosen){
        $("#results").text("Choose a hero!");
    }
})

// Adding/subtracting HP on attack


$("#attack").on("click", function () {
    if (villainChosen && heroChosen) {
        if (hero == 'kimwu' && villain == 'spinal') {
            spinal.hp -= kimwu.ap;
            kimwu.ap += kimwu.increase;
            kimwu.hp -= spinal.ap;
        }
        else if (hero == 'kimwu' && villain == 'shadowjago') {
            shadowjago.hp -= kimwu.ap;
            kimwu.ap += kimwu.increase;
            kimwu.hp -= shadowjago.ap;
        }
        else if (hero == 'kimwu' && villain == 'fulgore') {
            fulgore.hp -= kimwu.ap;
            kimwu.ap += kimwu.increase;
            kimwu.hp -= fulgore.ap;
        }
        else if (hero == 'thunder' && villain == 'spinal') {
            spinal.hp -= thunder.ap;
            thunder.ap += thunder.increase;
            thunder.hp -= spinal.ap;
        }
        else if (hero == 'thunder' && villain == 'shadowjago') {
            shadowjago.hp -= thunder.ap;
            thunder.ap += thunder.increase;
            thunder.hp -= shadowjago.ap;
        }
        else if (hero == 'thunder' && villain == 'fulgore') {
            fulgore.hp -= thunder.ap;
            thunder.ap += thunder.increase;
            thunder.hp -= fulgore.ap;
        }
        else if (hero == 'aganos' && villain == 'spinal') {
            spinal.hp -= aganos.ap;
            aganos.ap += aganos.increase;
            aganos.hp -= spinal.ap;
        }
        else if (hero == 'aganos' && villain == 'shadowjago') {
            shadowjago.hp -= aganos.ap;
            aganos.ap += aganos.increase;
            aganos.hp -= shadowjago.ap;
        }
        else if (hero == 'aganos' && villain == 'fulgore') {
            fulgore.hp -= aganos.ap;
            aganos.ap += aganos.increase;
            aganos.hp -= fulgore.ap;
        }
    }
    $("#kimwuHP").text(kimwu.hp);
    $("#thunderHP").text(thunder.hp);
    $("#aganosHP").text(aganos.hp);
    $("#spinalHP").text(spinal.hp);
    $("#shadowjagoHP").text(shadowjago.hp);
    $("#fulgoreHP").text(fulgore.hp);
    hpChecker();
    winOrLoss();
})

// function to check HP

function hpChecker() {
    var heroHP = $(".heroSpot h3").text();
    var villainHP = $(".villainSpot h3").text();

    if (heroHP <= 0) {
        $("#attack").css("display", "none");
        heroChosen = false;
        $("#" + hero).detach();
        $("#results").text("Choose a new hero!");
        $(".hero").each(function (index) {
            $(this).css("border-color", "green");
        })
        heroCounter++;
    }

    if (villainHP <= 0) {
        $("#attack").css("display", "none");
        villainChosen = false;
        $("#" + villain).detach();
        $("#results").text("Choose a new opponent!");
        $(".villain").each(function (index) {
            $(this).css("border-color", "red");
        })
        villainCounter++;
    }

}

function winOrLoss() {
    if (heroCounter == 3 && villainCounter == 3){
        $("#attack").css("display", "none");
        $("#results").text("Double KO! Play again?");
        $("#restart").css("display", "block");
    }
    else if (heroCounter == 3) {
        $("#attack").css("display", "none");
        $("#results").text("Game over! Play again?");
        $("#restart").css("display", "block");
    }
    else if (villainCounter == 3) {
        $("#attack").css("display", "none");
        $("#results").text("You win!");
        $("#restart").css("display", "block");
    }
}

// Ugly reset function, resetting global variables

$("#restart").on("click", function(){
    location.reload();
})