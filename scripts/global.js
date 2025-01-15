var stackWidth = 1440;
var maxProjectWidthPercent = .8;
var maxProjectWidthPixels = 1500;

window.addEventListener("resize", onResize);

onResize();

function onResize() {
    document.getElementById("break").style.display = "inline";
    document.getElementById("padding").style.width = 0 + "px";
    var vw = window.innerWidth;

    if(vw > stackWidth) {
        var w = document.getElementById("project").clientWidth;

        var padding = vw - w;

        if (padding < maxProjectWidthPercent * vw) {
            padding = (maxProjectWidthPercent * vw) - w;
        }

        if (padding < 0) {
            padding = 0;
        }

        document.getElementById("padding").style.width = (padding) + "px";
        document.getElementById("padding").style.display = "inline-block";

        console.log("Padding width: ", padding);
    }
    else {
        document.getElementById("break").style.display = "block";
        document.getElementById("padding").style.display = "none";
    }
}