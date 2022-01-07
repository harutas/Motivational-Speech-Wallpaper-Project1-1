const target = document.getElementById("target");

class Wallpaper{
    constructor(text, color, url, verticalPosition, horizontalPosition){
        this.text = text;
        this.color = color;
        this.url = url;
        this.verticalPosition = verticalPosition;
        this.horizontalPosition = horizontalPosition;
    }
}

// main function
function motivationalSpeechWallpaper(wallpaperObj){

    let container = document.createElement("div");
    container.classList.add("container", "d-flex", "justify-content-center");

    container.innerHTML =`
    <div class="background-img d-flex ${isHorizontalPosition(wallpaperObj)} ${isVerticalPosition(wallpaperObj)} col-md-8 vh-75 my-5 p-3 p-md-5">
        <div class="col-8">
            <h3 class="text">${wallpaperObj.text}</h3>
        </div>
    </div>
    `;

    const backgroundImage = container.querySelectorAll(".background-img").item(0);
    backgroundImage.style.backgroundImage = "url(" + wallpaperObj.url + ")";
    backgroundImage.style.backgroundSize = "cover";

    const text = container.querySelectorAll(".text").item(0);
    text.style.color = "#" + wallpaperObj.color;
    text.style.fontSize = "2rem";

    return container;
}

// テキストの垂直方向位置
function isVerticalPosition(wallpaperObj){
    if (wallpaperObj.verticalPosition == "top") return "align-items-start";
    else if (wallpaperObj.verticalPosition == "center") return "align-items-center";
    else if (wallpaperObj.verticalPosition == "bottom")return "align-items-end";
}

// テキストの水平方向位置
function isHorizontalPosition(wallpaperObj){
    if (wallpaperObj.horizontalPosition == "left") return "justify-content-start";
    else if (wallpaperObj.horizontalPosition == "center") return "justify-content-center";
    else if (wallpaperObj.horizontalPosition == "right") return "justify-content-end";
}

const wallpapers = {
    wallpaper1 : new Wallpaper("Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint", "efb708", "https://recursionist.io/img/different-job.png", "center", "center"),
    wallpaper2 : new Wallpaper("Scientists study the world as it is, engineers create the world that never has been. - Theodore von Karman", "0ac870", "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg", "bottom", "left"),
    wallpaper3 : new Wallpaper("The scientist discovers a new type of material or energy and the engineer discovers a new use for it. - Gordon Lindsay Glegg", "84abf4", "https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg", "top", "right"),
}

target.append(motivationalSpeechWallpaper(wallpapers.wallpaper1));
target.append(motivationalSpeechWallpaper(wallpapers.wallpaper2));
target.append(motivationalSpeechWallpaper(wallpapers.wallpaper3));
