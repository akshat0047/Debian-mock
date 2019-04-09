var menu = document.getElementById("ham-menu");
menu.addEventListener("click", function () {
    document.getElementById("menu").style.width = "20%";
    setTimeout(function () {
        document.querySelector("div[class*='menu-box']>div").style.opacity = "1";
    }, 700);
});

document.getElementById("cancel").addEventListener("click", () => {
    document.querySelector("div[class*='menu-box']>div").style.opacity = "0";
    setTimeout(function () {
        document.getElementById("menu").style.width = "0";
    }, 300);
});

var list = document.querySelectorAll("ul > li");
for (var i = 0; i < list.length; i++) {
    list[i].addEventListener("click", () => {
        document.querySelector("div[class*='menu-box']>div").style.opacity = "0";
        setTimeout(function () {
            document.getElementById("menu").style.width = "0";
        }, 300);
    });
}

for (i = 0; i < 15; i++) {
    document.getElementsByTagName("TBODY")[0].innerHTML += "<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
}