document.write("問１");
document.write("<br>");

document.write("★★★★★");
document.write("<br>");

document.write("問２");
document.write("<br>");

for (var i = 0; i < 2; i++){
    document.write("★★★<br>");
}

document.write("問３");
document.write("<br>");

for (var i = 0; i < 2; i++){
    document.write("☆☆☆☆☆<br>");
}

document.write("問４");
document.write("<br>");

for (var i = 0; i < 4; i++){
    document.write("★★★★★<br>");
}

document.write("問５");
document.write("<br>");

for (var i = 0; i < 4; i++){
    document.write("★★★<br>");
}

document.write("問６");
document.write("<br>");

for (var x = 0; x < 3; x++){
    for (var y = 0; y < 3; y++){
        if (y % 2 == 0){
            document.write("★");
        }
        else{
            document.write("☆");
        }
    }
    document.write("<br>")
}

document.write("問６");
document.write("<br>");

for (var x = 0; x < 4; x++){
    for (var y = 0; y < 5; y++){
        if (y % 2 == 0){
            document.write("★");
        }
        else{
            document.write("☆");
        }
    }
    document.write("<br>")
}

document.write("問６");
document.write("<br>");

for (var x = 1; x < 6; x++){
    for (var y = 0; y < x; y++){
        document.write("★")
    }
    document.write("<br>")
}