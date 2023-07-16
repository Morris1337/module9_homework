const form = document.querySelector("#form")
const pageNum = document.querySelector("#pageNum")
const limit = document.querySelector("#limit")
const button = document.querySelector("#button")
const result = document.querySelector("#result")
const text = document.querySelector("#text")

const saveData = localStorage.getItem("imageData")
if(saveData){
    const imageData = JSON.parse(saveData);
    displayImg(imageData)
}

// function input(){
//     let input1 = pageNum.value
//     let input2 = limit.value

//     if((input1 <1 || input1 >10) && !isNaN(input1)){
//         text.textContent = "«Номер страницы вне диапазона от 1 до 10»"
//         clearImages()
//     }else if((input2 <1 || input2 >10) && !isNaN(input2)){
//         text.textContent = "«Лимит вне диапазона от 1 до 10»"
//         clearImages()
//     }else if((input1 <1 || input1 >10) && !isNaN(input1) && (input2 <1 || input2 >10) && !isNaN(input2)){
//         text.textContent = "«Номер страницы и лимит вне диапазона от 1 до 10»"
//         clearImages()
//     }else{
//         clearImages()
//         fetch(`https://picsum.photos/v2/list?page=${input1}&limit=${input2}`)
//         .then((response) => response.json())
//         .then((data) => {
//             displayImg(data)
//             localStorage.setItem("imageData", JSON.stringify(data));
//         })
//         .catch(() =>{
//             console.log("error");
//         })
//     }
// }

function input() {
    let input1 = pageNum.value;
    let input2 = limit.value;
  
    if ((input1 < 1 || input1 > 10) && !isNaN(input1) && (input2 < 1 || input2 > 10) && !isNaN(input2)) {
        text.textContent = "Номер страницы и лимит вне диапазона от 1 до 10";
        clearImages();
      }else if ((input1 < 1 || input1 > 10) && !isNaN(input1)) {
      text.textContent = "Номер страницы вне диапазона от 1 до 10";
      clearImages();
    } else if ((input2 < 1 || input2 > 10) && !isNaN(input2)) {
      text.textContent = "Лимит вне диапазона от 1 до 10";
      clearImages();
    } else {
      clearImages();
      fetch(`https://picsum.photos/v2/list?page=${input1}&limit=${input2}`)
        .then((response) => response.json())
        .then((data) => {
          displayImg(data);
          localStorage.setItem("imageData", JSON.stringify(data));
        })
        .catch(() => {
          console.log("error");
        });
    }
  }
  
  
  
  
  
  
  



function clearImages() {
    result.textContent = "";
    localStorage.removeItem("imageData")
  }

function displayImg(images) {
    
      images.forEach((image) => {
        const photo = document.createElement("img");
        photo.src = image.download_url;
        result.appendChild(photo);
      });
    }

button.addEventListener("click", ()=>{
    input()
})