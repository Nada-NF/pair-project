

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}





function addCylinder()
{
  var rayon, hauteur, perimeter,volume;
  rayon = parseInt(document.getElementById("first").value);
  hauteur = parseInt(document.getElementById("second").value);
  perimeter = (Math.PI*2*rayon)
  document.getElementById("answer").value = perimeter
  volume = (Math.PI*2*rayon*hauteur).toFixed(4)
  document.getElementById("answer1").value = volume
  area = (Math.PI*(rayon*rayon))
  document.getElementById("answer2").value = area;
}


function addCube()
{
  var length,area, perimeter,volume;
  length = parseInt(document.getElementById("first").value);
  perimeter = (4*length)
  document.getElementById("answer").value = perimeter
  volume = (length*length*length)
  document.getElementById("answer1").value = volume
  area = (4*(length*length))
  document.getElementById("answer2").value = area;
}


function addCuboid()
{
  var length,weight,height,area, perimeter,volume;
  length = parseInt(document.getElementById("first").value);
  weight = parseInt(document.getElementById("second").value);
  height = parseInt(document.getElementById("thirdd").value);
  perimeter = (4*(length+weight+height))
  document.getElementById("answer").value = perimeter
  volume = (2*((length*weight)+(length*height)+(weight*height)))
  document.getElementById("answer1").value = volume
  area = (length*weight*height)
  document.getElementById("answer2").value = area;
}


function addTriangle(){
    var weight, height,length,volum,area;
    weight=parseInt(document.getElementById("first").value);
    height=parseInt(document.getElementById("second").value);
    length=parseInt(document.getElementById("thirdd").value);
    volum=((1/2)*(weight*height*length))
    document.getElementById("answer1").value=volum;
    area=((1/2)*(weight*height))
    document.getElementById("answer2").value=area;


}






$(document).ready(function(){
    $("#hello").click(function(){
      $("#hide").fadeIn(1000);
    })
})





function reset(){
    location.reload()
}
  
