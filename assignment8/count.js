
function f() {
    var d = 1;
    var h = 23;
    var m = 59;
    var s = 59;
    var timeout = setInterval(function () {
            if( d<=0 && h<=0 && m<=0 && s<=0){
                clearInterval(timeout);
            }
            document.getElementById("day").innerText = d < 10 ? "0" + d:d ;
            document.getElementById("hours").innerText = h < 10 ? "0" + h:h ;
            document.getElementById("min").innerText = m < 10 ? "0" + m:m ;
            document.getElementById("sec").innerText = s < 10 ? "0" + s:s ;
            s--;
            if(s == -1){

                m -= 1;
                s=59;
            }
            if(m == -1){

                h -= 1;
                m=59;
            }
            if(h == -1){

                d -= 1;
                h = 23;
            }

        },1000);

}
f();




