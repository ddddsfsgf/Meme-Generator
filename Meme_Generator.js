const form = document.getElementById("container");
const listGallery = document.getElementById("memeList");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const button = document.createElement("button");
    button.innerText = "DELETE!";
    button.addEventListener("click", function(){
        memeList.remove();
    });
    const memeList = document.createElement("li"); 
    memeList.classList.add("canvas")
    const img = document.createElement("img");
    const inputUrl = document.getElementById("imageUrl").value;
    const image = inputUrl;
    img.src = image;
    const topText = document.createElement("div");
    topText.classList.add("topText");
    topText.innerText = document.getElementById("top").value;
    const bottomText = document.createElement("div");
    bottomText.classList.add("bottomText");
    bottomText.innerText = document.getElementById("bottom").value;
    listGallery.appendChild(memeList);
    memeList.appendChild(topText);
    memeList.appendChild(bottomText);
    memeList.appendChild(img);
    memeList.appendChild(button);
    form.reset();
});
