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
var originalheight = document.getElementById("sub-nav").offsetHeight;
var c = 0;
document.getElementById("expand-more").addEventListener("click", () => {
    if (c == 0) {
        var platheight = document.getElementById("sub-nav").offsetHeight;
        document.getElementById("sub-nav").style.height = platheight;
        document.getElementById("sub-nav").style.height = document.getElementById("sub-nav").offsetHeight + 2 * platheight;
        setTimeout(() => {
            document.getElementsByClassName("plat-row-late")[0].style.display = "flex";
            document.getElementsByClassName("plat-row-late")[1].style.display = "flex";
            setTimeout(() => {
                document.getElementsByClassName("plat-row-late")[0].style.opacity = "1";
                document.getElementsByClassName("plat-row-late")[1].style.opacity = "1";
                document.getElementById("expand-more").innerHTML = "Less..";
            }, 400);
        }, 200);
        c = 1;
    } else {
        if (c == 1) {
            document.getElementById("sub-nav").style.height = originalheight;
            setTimeout(() => {
                document.getElementsByClassName("plat-row-late")[0].style.opacity = "0";
                document.getElementsByClassName("plat-row-late")[1].style.opacity = "0";

                setTimeout(() => {
                    document.getElementsByClassName("plat-row-late")[0].style.display = "none";
                    document.getElementsByClassName("plat-row-late")[1].style.display = "none";
                    document.getElementById("expand-more").innerHTML = "More..";
                }, 400);
            }, 200);
        }
        c = 0;
    }
});