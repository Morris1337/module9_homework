const value = document.querySelector("#input")
const button = document.querySelector("#button")
const text = document.querySelector("#text")
const resultDom = document.querySelector("#result")


function request(download_url){
  let limit
  
  if(value.value >=1 && value.value <=10){
    limit = value.value
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://picsum.photos/v2/list?limit=${limit}`)
    xhr.onload = function(){
      if(xhr.status != 200){
        console.log("Error2")
      }else{
        const result = JSON.parse(xhr.response)
        displayImages(result);
      }
    }
     xhr.send()
  }else{
    text.textContent = "Ошибка" 
  }
}

function displayImages(images){
  images.forEach(function(image){
    const img = document.createElement("img");
    img.src = image.download_url;
    resultDom.appendChild(img);
  })
}
  
button.addEventListener("click", ()=>{
  request();
})
