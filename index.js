var colors = ["empty", "red", "green", "yellow", "blue"];
var buttoncolorscomp = [];
var buttoncolorsplayer = []; 

function sequence() {
    let rand = Math.floor(Math.random() * 4) + 1; 
    let newcolor = colors[rand];  
    buttoncolorscomp.push(newcolor);  
    console.log("Computer's sequence: " + buttoncolorscomp);
}

function reset() {
    buttoncolorscomp = []; 
    buttoncolorsplayer = [];
    $("#level-title").text("Press A Key to Start");  
}

function patterndisplay() {
    for (let i = 0; i < buttoncolorscomp.length; i++) {
        setTimeout(function() {
            $("#" + buttoncolorscomp[i]).addClass("pressed");  
            setTimeout(function() {
                $("#" + buttoncolorscomp[i]).removeClass("pressed");  
            }, 200);  
        }, i * 600);  
    }
}

$(".btn").click(function() {
    var button = this.id;
    $("#" + button).addClass("pressed");  
    setTimeout(function() {
        $("#" + button).removeClass("pressed");  
    }, 100);

    buttoncolorsplayer.push(button);
    console.log("Player's sequence: " + buttoncolorsplayer);

    let currentStep = buttoncolorsplayer.length - 1;  
    if (buttoncolorsplayer[currentStep] !== buttoncolorscomp[currentStep]) {
        console.log("Wrong sequence! Game Over.");
        $("#level-title").text("GAME OVER! PRESS ANY KEY TO RESTART");

        
        $(document).off('keypress').on('keypress', function() {
            reset();   
            sequence();  
            patterndisplay(); 
        });
        
    } else {
        console.log("Correct so far!");

        
        if (buttoncolorsplayer.length === buttoncolorscomp.length) {
            console.log("Correct sequence!");
            buttoncolorsplayer = []; 
            setTimeout(sequence, 1000);  
            setTimeout(patterndisplay, 1200);  
        }
    }
});


$(document).on('keypress', function() {
    reset();   
    sequence();  
    patterndisplay(); 
    $(document).off('keypress');  
});
