var menu = document.getElementById("menu-btn");

menu.addEventListener('click', function() {
    document.getElementById("tabs").style.width = "100%";
    document.getElementById("tabs").style.display = "block";
    document.querySelector('.close-menu').style.display = "block";
});

function closeMenu() {
    document.getElementById("tabs").style.width = "0%";
    document.querySelector('.close-menu').style.display = "none";
    document.getElementById("tabs").style.display = "none";
}