"use strict";
//Карточки//
const arrObj = [
  {"dataAtribute": "katrineId",
  "name": "Katrine",
  "img": "./assets/images/pets-katrine.png",
  "type": "Cat",
  "breed": "British Shorthair",
  "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
  "age": "6 months",
  "inoculations": ["panleukopenia"],
  "diseases": ["none"],
  "parasites": ["none"]
},
  { 
    "dataAtribute": "jenniferId",
    "name": "Jennifer",
    "img": "./assets/images/pets-jennifer2.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },

  {"dataAtribute": "woodyId",
    "name": "Woody",
    "img": "./assets/images/pets-woody2.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg reduced"],
    "parasites": ["none"]
  },
  {"dataAtribute": "scarlettId",
    "name": "Scarlett",
    "img": "./assets/images/pets-scarlet2.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {"dataAtribute": "sophiaId",
  "name": "Sophia",
  "img": "./assets/images/pets-sofia2.png",
  "type": "Dog",
  "breed": "Shih tzu",
  "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
  "age": "1 month",
  "inoculations": ["parvovirus"],
  "diseases": ["none"],
  "parasites": ["none"]
},

  {"dataAtribute": "timmyId",
    "name": "Timmy",
    "img": "./assets/images/pets-timmy2.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {"dataAtribute": "freddieId",
    "name": "Freddie",
    "img": "./assets/images/pets-friedie2.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {"dataAtribute": "charlyId",
    "name": "Charly",
    "img": "./assets/images/pets-charly2.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
]


/////****АДАПТИВНОЕ МЕНЮ*********////////
//вешаем слушатель событий на гамбургер//
let body = document.querySelector("#body") // для блокировки скролла
let list = document.querySelector(".header_list");//<ul>
let nav = document.querySelector(".header_nav"); //nav
let hamburger = document.querySelector(".hamburger");
let owerflov = document.querySelector('.owerflov'); ///затемнение

let flag = false; //для затемнения вокруг
let scrollFlag = false // для блокировки скролла

hamburger.addEventListener("click", show_menu);
//hamburger.addEventListener("click", closeMenuGamburger);

function show_menu() {
 hamburger.classList.toggle("is-active"); //добавляем активный класс <ul> и гамбургеру
 list.classList.toggle("is-active");  
 flag = !flag  ///затемнение    -убираем или добавляем
     if(flag){
      owerflov.style.display="block"
    } else {
      owerflov.style.display="none"
    }
    scrollFlag =! scrollFlag ///скролл- блокируем или разблокируем
    if(scrollFlag){
      body.style.overflow="hidden"
    } else {      
      body.style.overflow=""
    }    
}

//вешаем прослушиватель событий на на поле <ul>,   и на пустое поле вокруг , чтобы закрывать меню/
list.addEventListener("click", closeMenu);

function closeMenu(event) {
 if (event.target.classList.contains("is-active")) {
   hamburger.classList.remove("is-active");
   list.classList.remove("is-active");
   flag = !flag  ///затемнение    -убираем или добавляем
   if(flag){
    owerflov.style.display="block"
  } else {
    owerflov.style.display="none"
  }
  scrollFlag =! scrollFlag ///скролл- блокируем или разблокируем
    if(scrollFlag){
      body.style.overflow="hidden"
    } else {      
      body.style.overflow=""
    }
    // код, удаляющий класс `is-active`
   //у гамбургер-иконки и у меню при нажатии  на поле <ul>
 } 
}

//вешаем прослушиватель событий на сылки, на пустой затемненный фон вокруг, чтобы закрывать меню
//при переходе по ссылкам
let navLinks = document.querySelectorAll(".header_link");
navLinks.forEach((el) => el.addEventListener("click", closMenu));
owerflov.addEventListener("click", closMenu);

function closMenu(event) {
 hamburger.classList.remove("is-active");
 list.classList.remove("is-active");
 flag = !flag  ///затемнение    -убираем или добавляем
 if(flag){
  owerflov.style.display="block"
} else {
  owerflov.style.display="none"
}
scrollFlag =! scrollFlag ///скролл- блокируем или разблокируем
    if(scrollFlag){
      body.style.overflow="hidden"
    } else {      
      body.style.overflow=""
    };
 // здесь код, удаляющий класс `is-active`
 //у гамбургер-иконки и у меню при нажатии  cсылку,
 //так как мы переходим по ссылке и открытое меню нам больше не нужно
}
/********************************КАРУСЕЛЬ**************************************/
const BTN_LEFT = document.querySelector("#btn-left");
const BTN_RIGHT = document.querySelector("#btn-right");
const CAROUSEL = document.querySelector("#carousel");
const ITEM_LEFT = document.querySelector("#item-left");
const ITEM_RIGHT = document.querySelector("#item-right");
const CARD2 = document.querySelector(".card2");
const CARD3 = document.querySelector(".card3");


////*генерация ID*////
let setId = new Set();

 function creatId() {
  let newId = Math.floor(Math.random() * 10000000);
  if (!setId.has(newId)) {
    setId.add(newId);
    return newId;
  } else {
    return creatId();
  }
}
///////////////////////////////////

//Отслеживание изменения размера окна windows.
let widthWind;
function displayWindowSize(){
  // Получаем ширину и высоту окна без полос прокрутки
  widthWind = document.documentElement.clientWidth;  
}
//Отслеживание изменения размера окна. 
window.addEventListener("resize", displayWindowSize);
//Запуск функции при загрузке страницы
document.addEventListener('DOMContentLoaded', displayWindowSize);



const randomNumber = ()=> {
  let num= Math.floor(Math.random() * 8)
  return num
}

let arr=[0, 1, 2, 3, 4, 5, 6, 7]

const createCardTemplate = () => {  
 let idCard = creatId()
  let arrCard = arrObj.map((el)=>{
  return ` <div class="card" data-idi=${el.dataAtribute}>                            
  <img  class="card_img" src=${el.img} alt="Katrine">
      <div class="card_content">
      <p>${el.name}</p>
      <a class="button button_second" href="#!">Learn more</a>
  </div>                           
</div>`; // const card = document.createElement("div"); 
})
let ind = arr[0]
let delit = arr.shift()
arr.push(delit)
return arrCard[ind]
}

const moveLeft = () => {
  CAROUSEL.classList.add("transition-left");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
};

const moveRight = () => {
  CAROUSEL.classList.add("transition-right");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
};

BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);

CAROUSEL.addEventListener("animationend", (animationEvent) => {
  let changedItem;
  if (animationEvent.animationName === "move-left") {
    CAROUSEL.classList.remove("transition-left");
    changedItem = ITEM_LEFT;
    document.querySelector("#item-active").innerHTML = ITEM_LEFT.innerHTML;
  } else {
    CAROUSEL.classList.remove("transition-right");
    changedItem = ITEM_RIGHT;
    document.querySelector("#item-active").innerHTML = ITEM_RIGHT.innerHTML;
  }
  
  changedItem.innerHTML = "";
  if (widthWind > 1279){
     for (let i = 0; i < 3; i++) {
    const card = createCardTemplate();   
    changedItem.insertAdjacentHTML("beforeend",card);
  }
  }
  if ((widthWind > 767) && (widthWind < 1279)){
    CARD3.remove();
    for (let i = 0; i < 2; i++) {
   const card = createCardTemplate();   
   changedItem.insertAdjacentHTML("beforeend",card);
 }
 }
 if ((widthWind > 319) && (widthWind < 768)){
CARD2.remove();
CARD3.remove();  
     const card = createCardTemplate();   
 changedItem.insertAdjacentHTML("beforeend",card);
    
}
  
  BTN_LEFT.addEventListener("click", moveLeft);
  BTN_RIGHT.addEventListener("click", moveRight);
})

///////////////////////////////////конец карусели*****************/

///////////////////*********POPAPP****************/

const myModal = document.querySelector("#myModal"); // место  для врезки модального окна

const MODAL_BLOCK = document.querySelector(".modal_block768"); // сам модальный блок
const CARDs = document.querySelector("#item-active"); // общее окно карточек




const createCardModal = (el) => {  //отрисовка модального окна
  return `  <div class="modal_block768">
  <div class="modal_block_parent">
  <div class ="btn_modal" onclick="closeModalBlock()">&#10006;</div>
  <div class="modal_card" onmouseover="changeItem()" onmouseout="rechangeItem()">
      <div class = "modal_img">
          <img  src=${el.img} alt="animal">
      </div><div class="modal_block_tille">
  <h3>${el.name}</h3>
  <h4>${el.breed}</h4>
  <p>${el.description}</p>
  <ul class="modal_list">
      <li class="modal_list_item"><span><b>Age: </b></span><span>${el.age}</span></li>
      <li class="modal_list_item"><span><b>Inoculations: </b></span><span>${el.inoculations}</span></li>
      <li class="modal_list_item"><span><b>Diseases: </b></span><span>${el.diseases}</span></li>
      <li class="modal_list_item"><span><b>Parasites:</b></span><span>${el.parasites}</span></li>
  </ul>
</div>            
</div>
</div>
<div class="owerflov"> </div>
</div>
`; 
}

function changeItem() {
  document.querySelector('.btn_modal').style.background= "transparent";
}// функция, которая сработает при наведении.


function rechangeItem() {
  document.querySelector('.btn_modal').style. background= "#FDDCC4";
}// тут всё также. протсес происходящий про отводе курсора.

function getDataAtributeCard(e){  
  let card = e.target.closest(".card");// ищем  по клику нашу карточку 
  if (!card) return; 
 let dataAtribute = card.getAttribute("data-idi");   // получаем ее дата атрибут
let obj =  arrObj.find((elem)=> elem.dataAtribute === dataAtribute); //ищем этот объект в массиве
const modal = createCardModal(obj); //создаём HTML
myModal.insertAdjacentHTML("afterbegin",modal); //отрисовываем HTML
document.body.style.overflow="hidden" /// блокируем прокрутку окна
}; 

function closeModalBlock(e){ 
  ///закрываем модальное окно
   //слушаем, где сработал клик
if(e.target.closest('.modal_card')){  ///если это сама карточка или её содержимое -игнорируем клик   
  return 
}else {
  document.querySelector(".modal_block768").remove() //удаляем блок модального окна
  document.body.style.overflow="visible" /// paзблокируем прокрутку окна
  e.stopPropagation()    
}
}


CARDs.addEventListener("click", getDataAtributeCard);
myModal.addEventListener("click", closeModalBlock);





