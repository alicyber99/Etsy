function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        console.log("first");
        loader.style.top = "-100%"
    }, 4200)
}
loaderAnimation()
const videos = document.querySelectorAll('.part-9 video'); 
videos.forEach(video => {
    video.addEventListener("mouseenter", () => {
        video.play(); 
    });
    video.addEventListener("mouseleave", () => {
        video.pause(); 
    });
});
const video1 = document.querySelector('.part-14 video');
video1.addEventListener("mouseenter", () => {
    video1.play(); 
});
video1.addEventListener("mouseleave", ()=>{
    video1.pause();
});
