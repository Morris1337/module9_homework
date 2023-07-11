const button = document.querySelector("#button")
const inputWidth = document.querySelector("#width")
const inputHeight = document.querySelector("#height")
const result = document.querySelector("#result")
const text = document.querySelector("#text")


function imgSize(){
  let width = +inputWidth.value
  let height = +inputHeight.value

  if (width >= 100 && width <= 300 && height >= 100 && height <= 300 && !isNaN(width) && !isNaN(height)) {

    fetch(`https://www.instagram.com/${width}/${height}`)
    .then((data) => {
        console.log(data)
        displayImg(data.url);
    })
    .catch(() => {
        console.log("error");
    })
  }else{
    text.textContent = "«одно из чисел вне диапазона от 100 до 300»";
  console.log("«одно из чисел вне диапазона от 100 до 300»");
  }
}

function displayImg(image){
    const photos = document.createElement("img");
    photos.src = image
    result.appendChild(photos)
}

button.addEventListener("click", (event)=>{
    event.preventDefault();
    imgSize();
    
})