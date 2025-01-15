
var maxProjectWidth = 1500;
var minProjectWidth = 1000;
var maxProjectShrink = .5;

window.addEventListener("resize", onResize);
screen.orientation.onchange = function() {
    onResize();
}

onResize();

function onResize() {

    document.getElementById("project-padding").style.width = 0 +  "px";

    var viewportWidth = window.innerWidth;

    var projectWidth = document.getElementById("project").clientWidth;

    if(viewportWidth > minProjectWidth) {
        // Pad project up to max project width
        document.getElementById("project-padding").style.display = "inline-block";
        document.getElementById("project").className = "project";

        var projectDefaultWidth = document.getElementById("project").clientWidth;

        var padding = viewportWidth - projectDefaultWidth;

        if (projectDefaultWidth + padding > maxProjectWidth) {
            padding = maxProjectWidth - projectDefaultWidth;
        }

        padding = padding - 50;

        if (padding < 0) {
            padding = 0;
        }

        document.getElementById("project-padding").style.width = padding + "px";
    }
    else if (projectWidth > minProjectWidth * maxProjectShrink) {
        document.getElementById("project-padding").style.display = "none";
        document.getElementById("project").className = "project-shrinking";
    }
    else {
        document.getElementById("project-padding").style.display = "block";
        document.getElementById("project").className = "project-stacked";
    }
}
