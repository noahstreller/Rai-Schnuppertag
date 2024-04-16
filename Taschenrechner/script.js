var result = 0;
var currentNumber = 0;
var currentOperation = ""

$(document).ready(function() {

    $(".container").click(function() {
        checkInput()
    })

    $("#button-divide").click(function() {
        currentOperation = "/"
        saveNumber();
    })

    $("#button-multiply").click(function() {
        currentOperation = "*"
        saveNumber();
    })

    $("#button-plus").click(function() {
        currentOperation = "+"
        saveNumber();
    })

    $("#button-minus").click(function() {
        currentOperation = "-"
        saveNumber();
    })

    $("#button-equal").click(function() {
        calc();
    })

    $("#button-clear").click(function() {
        clear()
    })

    $("#button-backspace").click(function() {
        var input = $("#input").val();
        input = input.substring(0, input.length - 1);
        $("#input").val(input)
    })

    $("#button-dot").click(function() {
        $("#input").val($("#input").val() + ".");
    })



    $("#button-0").click(function() {
        $("#input").val($("#input").val() + "0");
        console.log("0");
    })
    $("#button-1").click(function() {
        $("#input").val($("#input").val() + "1");
        console.log("1");
    })
    $("#button-2").click(function() {
        $("#input").val($("#input").val() + "2");
        console.log("2");
    })
    $("#button-3").click(function() {
        $("#input").val($("#input").val() + "3");
        console.log("3");
    })
    $("#button-4").click(function() {
        $("#input").val($("#input").val() + "4");
        console.log("4");
    })
    $("#button-5").click(function() {
        $("#input").val($("#input").val() + "5");
        console.log("5");
    })
    $("#button-6").click(function() {
        $("#input").val($("#input").val() + "6");
        console.log("6");
    })
    $("#button-7").click(function() {
        $("#input").val($("#input").val() + "7");
        console.log("7");
    })
    $("#button-8").click(function() {
        $("#input").val($("#input").val() + "8");
        console.log("8");
    })
    $("#button-9").click(function() {
        $("#input").val($("#input").val() + "9");
        console.log("9");
    })

});


function saveNumber() {
    var input = parseFloat($("#input").val());
    currentNumber = parseFloat(input);
    $("#input").val(0);
}

function calc() {
    var input = parseFloat($("#input").val());
    switch (currentOperation) {
        case "+":
            result = currentNumber + input;
            break
        case "-":
            result = currentNumber - input;
            break
        case "*":
            result = currentNumber * input;
            break
        case "/":
            result = currentNumber / input;
            break
        default:
            console.log("Error");
    }
    console.log(result)
    $("#input").val(result);
}

function clear() {
    result = 0
    currentNumber = 0
    currentOperation = ""
    $("#input").val(0)
}

function checkInput() {
    var input = $("#input").val();
    if (input.length > 1 && input.charAt(0) == "0") {
        input = input.substring(1)
        $("#input").val(input)
    }
}