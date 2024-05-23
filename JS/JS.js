var Mynav = document.querySelector(".navbar");

var myname = document.getElementById("name");
var mail = document.getElementById("E-mail");
var phone = document.getElementById("Phone");
var massage = document.getElementById("Massage");
window.onscroll = function () {
    var top = window.scrollY;
    if (top >= 100) {
        Mynav.classList.add('scrolling');
    }
    else {
        Mynav.classList.remove('scrolling');
    }
}


function Check() {
    if (myname.value != 0 && mail.value != 0 && phone.value != 0 && massage.value != 0) {
        document.getElementById("BTN").removeAttribute("disabled");
    }
    else {
        document.getElementById("BTN").setAttribute("disabled","disabled");
    }


}
