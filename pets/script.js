"use strict";
//Карточки//
const arrObj = [
  {
    dataAtribute: "katrineId",
    name: "Katrine",
    img: "../assets/images/pets-katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    dataAtribute: "jenniferId",
    name: "Jennifer",
    img: "../assets/images/pets-jennifer2.png",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"],
  },

  {
    dataAtribute: "woodyId",
    name: "Woody",
    img: "../assets/images/pets-woody2.png",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg reduced"],
    parasites: ["none"],
  },
  {
    dataAtribute: "scarlettId",
    name: "Scarlett",
    img: "../assets/images/pets-scarlet2.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    dataAtribute: "sophiaId",
    name: "Sophia",
    img: "../assets/images/pets-sofia2.png",
    type: "Dog",
    breed: "Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },

  {
    dataAtribute: "timmyId",
    name: "Timmy",
    img: "../assets/images/pets-timmy2.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"],
  },
  {
    dataAtribute: "freddieId",
    name: "Freddie",
    img: "../assets/images/pets-friedie2.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    dataAtribute: "charlyId",
    name: "Charly",
    img: "../assets/images/pets-charly2.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
  },
];

// ----BURGER MENU-//

let burgerIcon = document.querySelector(".burger");
let menuList = document.querySelector(".menu__list");
let menuLogo = document.querySelector(".menu__logo");
let menuOverlay = document.querySelector(".menu__overlay");
let body = document.querySelector("#body") // для блокировки скролла
let scrollFlag = false // для блокировки скролла

burgerIcon.addEventListener("click", openBurgerMenu);

function openBurgerMenu() {
  if(body.style.overflow="hidden"){
     body.style.overflow=""  
    } else {      
      body.style.overflow="hidden"
    }    
  menuList.classList.toggle("menu__list_open");
  burgerIcon.classList.toggle("burger_open");
  menuLogo.classList.toggle("menu__logo_open");
  document.body.classList.toggle("body__no-scroll");
  menuOverlay.classList.toggle("menu__overlay_open");
  OpenedMenuClick();
}

const OpenedMenuClick = () => {
  if (burgerIcon.classList.contains("burger_open")) {
    menuOverlay.addEventListener("click", closeBurgerMenu);
  } else {
    menuOverlay.removeEventListener("click", closeBurgerMenu);
  }
};

const closeBurgerMenu = (e) => {
  scrollFlag =! scrollFlag ///скролл- блокируем или разблокируем
    if(scrollFlag){
      body.style.overflow="hidden"
    } else {      
      body.style.overflow=""
    }
  let burgerClick = new Event("click");
  if (
    e.target.closest(".menu__logo") ||
    e.target.classList.contains("menu") ||
    e.target.classList.contains("menu__list") ||
    e.target.closest("li")
  ) {
    burgerIcon.dispatchEvent(burgerClick);
  }
};

///////////////////*********МОДАЛЬНОЕ ОКНО****************/

const myModal = document.querySelector("#myModal"); // место  для врезки модального окна

const MODAL_BLOCK = document.querySelector(".modal_block768"); // сам модальный блок
const CARDs = document.querySelector(".pagination__cards"); // общее окно карточек

const createCardModal = (el) => {
  //отрисовка модального окнаш8
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
};

function changeItem() {
  document.querySelector(".btn_modal").style.background = "transparent";
} // функция, которая сработает при наведении

function rechangeItem() {
  document.querySelector(".btn_modal").style.background = "#FDDCC4";
} // тут всё также. процес происходящий при отводе курсора.

function getDataAtributeCard(e) {
  let card = e.target.closest(".card__content"); // ищем  по клику нашу карточку
  if (!card) return;
  let dataAtribute = card.getAttribute("data-idi"); // получаем ее дата атрибут
  let obj = arrObj.find((elem) => elem.dataAtribute === dataAtribute); //ищем этот объект в массиве
  const modal = createCardModal(obj); //создаём HTML
  myModal.insertAdjacentHTML("afterbegin", modal); //отрисовываем HTML
  document.body.style.overflow = "hidden"; /// блокируем прокрутку окна
}

function closeModalBlock(e) {
  ///закрываем модальное окно
  //слушаем, где сработал клик
  if (e.target.closest(".modal_card")) {
    ///если это сама карточка или её содержимое -игнорируем клик
    return;
  } else {
    document.querySelector(".modal_block768").remove(); //удаляем блок модального окна
    document.body.style.overflow = "visible"; /// paзблокируем прокрутку окна
    e.stopPropagation();
  }
}

CARDs.addEventListener("click", getDataAtributeCard);
myModal.addEventListener("click", closeModalBlock);
/////////////////////

// -------------------------------widthWind---------------------------
//Отслеживание изменения размера окна windows.
let widthWind;
let step;
function displayWindowSize() {
  // Получаем ширину и высоту окна без полос прокрутки
  widthWind = document.documentElement.clientWidth;
  return widthWind;
}
function getStep() {
  if (document.body.clientWidth > 1279) {
    step = 8;
  } else if (document.body.clientWidth > 767) {
    step = 6;
  } else {
    step = 3;
  }
  return step;
}
document.addEventListener("DOMContentLoaded", getStep);
//Отслеживание изменения размера окна.
window.addEventListener("resize", displayWindowSize);
//Запуск функции при загрузке страницы
document.addEventListener("DOMContentLoaded", displayWindowSize);
getStep();
displayWindowSize();
///////////////     ПАГИНАЦИЯ       //////////////////////////////////////////////////

const PLAGIN_CONTENT = document.getElementById("pagination__cards");

//одна карточка
function oneCardCreater(el) {
  return `<div class="card__content pagination__card" data-idi=${el.dataAtribute}>
                        <div class="card__img"><img src=${el.img} alt="cardAnimal"></div>
                        <div class="card__title">${el.name}</div>
                        <a class="card__btn btn-border">Learn more</a>
                    </div> `;
}
////*генерация случайного числа от 0 до 8*////
let setId = new Set();
function creatId() {
  let newId = Math.floor(Math.random() * 8);
  if (!setId.has(newId)) {
    setId.add(newId);
    return newId;
  } else {
    return creatId();
  }
}
//генерация массива из step элементов [цифры в случайном порядке от 0 до 7]- длина массива =step//
function renderSet() {
  setId.clear();
  let mySet = [];
  let temp = 0;
  while (temp < step) {
    let a = creatId();
    mySet.push(a);
    temp = temp + 1;
  }
  return mySet;
}

///генерация блока карточек из step штук/// [<div>, ... <div>] -длина = step
function arrOneBlock() {
  let arrOnePagesNumber = renderSet();//[4, 2,...]
  let arrOnePagesDiv = arrOnePagesNumber.map((e) => {  ///формируем новый массив, где  цифры исходного массива служат в качестве индекса . Ищем в массиве объектов животных объект с таким индексом и отрисовываем <div>, содержащий данные конкретных объектов//
    let el = arrObj[e];
    return `<div class="card__content pagination__card" data-idi=${el.dataAtribute}>
    <div class="card__img"><img src=${el.img} alt="cardAnimal"></div>
    <div class="card__title">${el.name}</div>
    <a class="card__btn btn-border">Learn more</a>
</div> `;
  });
  return arrOnePagesDiv;
}

//генерация массива , состоящего из  (48:step ) внутренних массивов [[div, ...div],...[div, ...div],[div, ...div]]//
let countArrInBigArr = 48/step ///количество страниц
function arrBigBlockDiv() {
  let arr = [];
  let temp = 0;
  let countArrInBigArr = 48/step
  console.log(countArrInBigArr)
  while (temp < countArrInBigArr) {
    let miniArr = arrOneBlock();
    arr.push(miniArr);
    temp++;
  }
  return arr;
}
let bigBLOCK_Div;
function autoStart() {
  bigBLOCK_Div = arrBigBlockDiv();
}
autoStart();
console.log(bigBLOCK_Div);

//активируем кнопки пагинации//
const btnFirst = document.querySelector(".pagination__btn_first");
const btnPrev = document.querySelector(".pagination__btn_prev");
const btnNext = document.querySelector(".pagination__btn_next");
const btnLast = document.querySelector(".pagination__btn_last");
const numberPages = document.querySelector(".pagination_btn_page-number");

btnFirst.addEventListener("click", renderENDleft);
btnNext.addEventListener("click", renderbtnFirstBTN);
btnPrev.addEventListener("click", renderbtnPrevBTN);
btnLast.addEventListener("click", renderENDright);

function renderENDleft() { ///возврат на стр 1
  
  btnPrev.removeEventListener("click", renderbtnPrevBTN);
  btnNext.addEventListener("click", renderbtnFirstBTN);
  numberPages.textContent = 1;  
  render(0);
  btnFirst.classList.add("btn-round_disabled");
  btnPrev.classList.add("btn-round_disabled");
  btnLast.classList.remove("btn-round_disabled");
  btnNext.classList.remove("btn-round_disabled");
  btnLast.classList.add("btn-round");
  btnNext.classList.add("btn-round");
}

function renderENDright() { ///переброс на последнюю страницу
  btnNext.removeEventListener("click", renderbtnFirstBTN);
  btnPrev.addEventListener("click", renderbtnPrevBTN);
  numberPages.textContent = countArrInBigArr;  
  let ind=countArrInBigArr-1 
  render(ind);
  btnLast.classList.add("btn-round_disabled");
  btnNext.classList.add("btn-round_disabled");
  btnPrev.classList.remove("btn-round_disabled");
  btnPrev.classList.add("btn-round");
  btnFirst.classList.remove("btn-round_disabled");
  btnFirst.classList.add("btn-round");
}

function renderbtnFirstBTN() { ///шаг вправо на 1 страницу
  btnPrev.addEventListener("click", renderbtnPrevBTN);
  let numberPagStr = numberPages.textContent;
  let newpage = +numberPagStr + 1;
  let ind = +newpage - 1;
  render(ind);
  if (newpage == countArrInBigArr) {
    btnLast.classList.add("btn-round_disabled");
    btnNext.classList.add("btn-round_disabled");
    btnNext.removeEventListener("click", renderbtnFirstBTN);
  }
  if (newpage == (countArrInBigArr+1)) {
    newpage = countArrInBigArr;   
  }  
  numberPages.innerHTML = newpage;  
  btnPrev.classList.remove("btn-round_disabled");
  btnPrev.classList.add("btn-round");
  btnFirst.classList.remove("btn-round_disabled");
  btnFirst.classList.add("btn-round");
}

function renderbtnPrevBTN() { ///шаг влево на 1 страницу
  btnNext.addEventListener("click", renderbtnFirstBTN);  
  let numberPagStr = numberPages.textContent;
  let ind = +numberPagStr - 2;  
    render(ind);
  if (numberPagStr == countArrInBigArr) {
    btnLast.classList.remove("btn-round_disabled");
    btnNext.classList.remove("btn-round_disabled");
    btnLast.classList.add("btn-round");
    btnNext.classList.add("btn-round");
  } 
  let newpage = +numberPagStr - 1;  
  if (newpage == 0) {
    newpage = 1;
    btnPrev.removeEventListener("click", renderbtnPrevBTN);
  }
  if ((newpage == 1) ||  (numberPagStr == 1)){
    btnFirst.classList.add("btn-round_disabled");
    btnPrev.classList.add("btn-round_disabled");
    btnPrev.removeEventListener("click", renderbtnPrevBTN);
  } 
  
   numberPages.innerHTML = newpage;    
}
 if(numberPages.textContent ==1){
  btnPrev.removeEventListener("click", renderbtnPrevBTN);
 }



const PLAGIN_CONTENTs = document.getElementById("pagination__cards"); //  родитель - блок для отрисовки карточек
const card__content = document.querySelector(".card__content"); ///одна карточка

function render(ind) {   
  while(PLAGIN_CONTENTs.firstChild){
    PLAGIN_CONTENTs.removeChild(PLAGIN_CONTENTs.firstChild); 
  }  
 let arr = bigBLOCK_Div[ind].join(" ")
 PLAGIN_CONTENTs.insertAdjacentHTML("afterbegin", arr) 
}

function renderStart(){ 
  let arr = bigBLOCK_Div[0].join(" ")
  PLAGIN_CONTENTs.insertAdjacentHTML("afterbegin", arr) 
}
renderStart()

