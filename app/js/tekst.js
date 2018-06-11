var i=0;
var napis="Kubolosek homepage";
var t;
var div=document.getElementById("tekst");
function pisz()
{
    if(i<napis.length){
        if(napis.substr(i, 1)==" ") {
            div.innerHTML+=napis.substr(i, 1);
            i++;
        }
        div.innerHTML+=napis.substr(i, 1);
    }
    else {
        clearInterval(t);
    }
    ++i;
}
t=setInterval("pisz()", 200);
