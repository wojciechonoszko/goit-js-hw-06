const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const $ul = document.querySelector("ul");
$ul.classList.add("gallery");

const urlImage = [];

const altImage = [];

for (const image of images){
  urlImage.push(image.url);
  altImage.push(image.alt);
}
console.log(altImage);

$ul.insertAdjacentHTML("afterbegin", `<img src=${urlImage[0]} alt=${altImage[0]}></img>`);
$ul.insertAdjacentHTML("beforeend", `<img src=${urlImage[1]} alt=${altImage[1]}></img>`);
$ul.insertAdjacentHTML("beforeend", `<img src=${urlImage[2]} alt=${altImage[2]}></img>`);



