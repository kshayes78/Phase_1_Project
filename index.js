getAllSuperheroes();

//const superHeroes = "http://localhost:3000/heroes/?_limit=7&_page=1";
const heroInfo = document.querySelector("#hero-display");
function getAllSuperheroes() {
  fetch("http://localhost:3000/heroes/?_limit=7&_page=1")
    .then((response) => response.json()) //get response in json format
    .then((superHeroArray) => {
      setMainImageDefault(superHeroArray[0]);
      superHeroArray.forEach((heroObj) => {
        createImageTags(heroObj);
      });
    });
}

function createImageTags(heroObj) {
  const images = document.querySelector("#hero-images");
  const heroImg = document.createElement("img");
  heroImg.src = heroObj.images.lg;
  images.append(heroImg);
}

span.addEventListener("click", clickHero);
function clickHero() {
  const image = document.createElement("img");
  image.src = heroObj.images;
  heroInfo.append(image);
}
//heroImg.addEventListener("click", function (e) {
//const displayImg = document.querySelector(".detail-image");
//displayImg.src = heroObj.image;
//displayImg.alt = heroObj.name;

function setMainImageDefault(superHeroObj) {
  const mainImage = document.querySelector(".detail-image");
  mainImage.src = superHeroObj.images.lg;
  mainImage.alt = superHeroObj.name;
}
