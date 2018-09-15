function navbar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}


function scrollToElementWithId(id) {
    var name = "";
    switch (id) {
        case 0:
            name = "home"
        break;
        case 1:
            name = "about"
        break;
        case 2:
            name = "projects"
        break;
        case 3:
            name = "curriculum"
        break;
        case 4:
            name = "contact"
        break;
        default:
            scrollToElementWithId(0);
    }
    document.getElementById(name).scrollIntoView({behavior: "smooth"});

}

