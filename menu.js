

var menubtn = document.getElementById("menubtn")
var sidebar = document.getElementById("sidebar")
var menu = document.getElementById("menu")

sidebar.style.right = "-250px"

menubtn.onclick = function () {
    if (sidebar.style.right == "-250px") {
        sidebar.style.right = "0";

    }
    else {
        sidebar.style.right = "-250px";
    }
}


