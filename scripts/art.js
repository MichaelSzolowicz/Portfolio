
function setGalleriesHeight () {
    var galleries = document.querySelectorAll('div.preview-gallery');
    galleries.forEach(gallery => {
        var width = gallery.clientWidth;
        gallery.style["max-height"] = "" + width + "px";
    });
    console.log(document.querySelector('.preview-gallery').style["max-height"]);
}

setGalleriesHeight();

window.addEventListener('resize', function(event){
    setGalleriesHeight();
});
