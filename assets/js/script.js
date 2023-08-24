const container = document.querySelector(".container");

const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

const images = document.querySelectorAll(".image");

let activeImage = 0;

arrowLeft.addEventListener("click", () => slideLeft());
arrowRight.addEventListener("click", () => slideRight());

function slideLeft() {
  activeImage--;

  if(activeImage < 0){
    activeImage = images.length - 1;
  }
  
  setContainerImage();
  setActiveImage();
}

function slideRight() {
  activeImage++;

  if(activeImage > images.length - 1)
    activeImage = 0;

  setContainerImage();
  setActiveImage();
}

function setContainerImage(){
  container.style.backgroundImage = `url('${images[activeImage].getElementsByTagName("img")[0].getAttribute("src")}')`;
}

function setActiveImage() {
  images.forEach(image => image.classList.remove("active"));
  images[activeImage].classList.add("active");
}