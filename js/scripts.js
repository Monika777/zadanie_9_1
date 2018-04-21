function getTriangleArea(a, h) {
    if (a <= 0 || h <= 0) {
     	document.getElementById("result").innerHTML= ('Nieprawidlowe dane');
    } else {
        console.log(a*h/2);
        document.getElementById("result").innerHTML= (a*h/2);
    }
}

function temp() {
    var a = document.getElementById("base").value;
  	var h = document.getElementById("height").value;
  	getTriangleArea(a,h);
}
console.log(getTriangleArea(10, 6));
triangle1Area = getTriangleArea(10, 4);
triangle2Area = getTriangleArea(25, 9);
triangle3Area = getTriangleArea(18, 3);

