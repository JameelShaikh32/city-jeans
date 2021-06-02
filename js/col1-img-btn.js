var btn = document.getElementsByClassName("btn");
var banner = document.getElementById("banner");

btn[0].onclick = function() {
    banner.src = "images/pic3.jpg";
    animation();
    this.classList.add("active1");
}

btn[1].onclick = function() {
    banner.src = "images/pic2.jpg";
    animation();
    this.classList.add("active1");
}

btn[2].onclick = function() {
    banner.src = "images/pic1.jpg";
    animation();
    this.classList.add("active1");
}

function animation() {
    banner.classList.add("zoom");
    setTimeout(function() {
        banner.classList.remove("zoom");
    }, 800)

    for (b of btn) {
        b.classList.remove("active1");
    }
}