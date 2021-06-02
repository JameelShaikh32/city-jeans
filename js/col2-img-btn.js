var dot = document.getElementsByClassName("dot");
var banner = document.getElementById("banner");

dot[0].onclick = function() {
    banner.src = "images/pic3.jpg";
    animation();
    this.classList.add("active2");
}

dot[1].onclick = function() {
    banner.src = "images/pic2.jpg";
    animation();
    this.classList.add("active2");
}

dot[2].onclick = function() {
    banner.src = "images/pic1.jpg";
    animation();
    this.classList.add("active2");
}

function animation() {
    banner.classList.add("zoom");
    setTimeout(function() {
        banner.classList.remove("zoom");
    }, 800)

    for (d of dot) {
        d.classList.remove("active2");
    }
}