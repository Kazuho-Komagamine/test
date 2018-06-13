document.write("問１");
document.write("<br>");

function area(radius, Pi=3.14){
    return radius*radius*Pi
}

document.write(area(5));
document.write("<br>");
document.write(area(7));
document.write("<br>");
document.write(area(10));
document.write("<br>");


document.write("問２");
document.write("<br>");

function totalValue(adalt, child){
    return adalt*500 + child*200 + "円です。"
}

document.write(totalValue(2, 4))