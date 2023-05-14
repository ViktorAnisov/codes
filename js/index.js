const pets = [
  {
      "name": "Katrine",
      "img": "assets/images/pets/katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Jennifer",
      "img": "assets/images/pets/jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "assets/images/pets/woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "assets/images/pets/sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "assets/images/pets/timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "assets/images/pets/charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    },
    {
      "name": "Scarlett",
      "img": "assets/images/pets/scarlett.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "assets/images/pets/freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    }
];

//////////////////////////////////////////////////
// Burger

const burger = document.querySelector('.burger'),
    burgerMenu = document.querySelector('.burger__menu'),
    darkBG = document.querySelector('.dark'),
    navMenu = document.querySelector('.burger__nav-list'),
    navLinks = document.querySelectorAll('.burger__nav-list-item'),
    headPanel = document.querySelector('.header__inner');
  

burger.addEventListener('click', () => {
  if (burgerMenu.classList.contains('burger__menu-active')) {
      clearActiveBurger()
  } else {
      addActiveBurger()
  }
});

navMenu.addEventListener('click', (e) => {
  navLinks.forEach(item => {
      if (e.target === item.firstChild) {
          clearActiveBurger();
      }
  });
});
darkBG.addEventListener('click', clearActiveBurger);

let screenWidth = document.documentElement.offsetWidth
window.addEventListener('resize', () => {
  const pageWidth = document.documentElement.scrollWidth;
  const windowInnerWidth = window.innerWidth;
  screenWidth = document.documentElement.offsetWidth;
  if (pageWidth > 767 || windowInnerWidth > 767) {
      clearActiveBurger();
  }
});

function addActiveBurger() {
  burgerMenu.classList.add('burger__menu-active');
  document.body.style.overflow = 'hidden';
  darkBG.classList.add('active');
  burger.style.transform = 'rotate(90deg)';
  headPanel.classList.add('invisibility');
}

function clearActiveBurger() {
  burgerMenu.classList.remove('burger__menu-active');
  document.body.style.overflow = '';
  darkBG.classList.remove('active');
  burger.style.transform = 'rotate(0)';
  headPanel.classList.remove('invisibility');
}

//////////////////////////////////////////////////////////////////////

const sliderInner = document.querySelector('.pets__slider-inner'),
    secondList = document.querySelector('.pets__second-list')

const prev = document.querySelector('.pets__slider-arrow-left'),
next = document.querySelector('.pets__slider-arrow-right'),
slidesField = document.querySelector('.pets__slider-inner'),
slides = slidesField.childNodes;

let offset = 0;

slidesField.style.width = 100 * slides.length + '%';

next.addEventListener('click', () => {
  if (offset === 360 * ((slides.length - 3) - 1)) {
      offset = 0;
  } else {
      offset += 360;
  }

  slidesField.style.transform = `translateX(-${offset}px)`;
});

prev.addEventListener('click', () => {
  if (offset == 0) {
      offset = 360 * ((slides.length - 3) - 1);
  } else {
      offset -= 360;
  }

  slidesField.style.transform = `translateX(-${offset}px)`;
});
// function getRandomNumberBetween(min,max){
//   return Math.floor(Math.random()*(max-min+1)+min);
// }

// let petStack = [];
// let rightStack = [];
// let leftStack = [];


// function slideLoad(){
//   let x;
//   for(let i=0; i<7; i++){
//       x = getRandomNumberBetween(0,7);
//       while(petStack.includes(x)){
//           x = getRandomNumberBetween(0,7);
//       }
//       petStack.push(x);
//   }
//   x = petStack[0];
//   petStack.push(x);

//   petStack.forEach(x => {
//       let petWrap = ``
  
//       sliderInner.innerHTML += petWrap;
//   }) 
// }

// function rightLoad() {
//   rightStack = [];
//   let x;
//   let xStack = petStack.slice(6,9);

//   for(let i=0; i<3; i++){
//       x = getRandomNumberBetween(0,7);
//       while(xStack.includes(x) || rightStack.includes(x)){
//           x = getRandomNumberBetween(0,7);
//       }
//       rightStack.push(x);
//   }

//   xStack.forEach(item => {
//       rightStack.push(item);
//   })
  
//   for(let i=0; i<2; i++){
//       x = getRandomNumberBetween(0,7);
//       while(rightStack.includes(x)){
//           x = getRandomNumberBetween(0,7);
//       }
//       rightStack.push(x);
//   }
  
//   x = rightStack[0];
//   rightStack.push(x);

//   sliderInner.innerHTML = '';

//   rightStack.forEach(x => {
//       let petWrap = `<div class="pets__slide" onclick="openModal(${x})">
//                       <img class="pets__slide-image" src=${pets[x].img} alt="${pets[x].type} ${pets[x].name}">
//                       <h3 class="pets__slide-name">${pets[x].name}</h3>          
//                       <button class="button button__trans pets__slide-button">Learn more</button>
//                       </div>`
  
//       sliderInner.innerHTML += petWrap; 
//   })
// }


// function leftLoad() {
//   leftStack = [];
//   let x;
//   let xStack = petStack.slice(0,3);

//   for(let i=0; i<3; i++){
//       x = getRandomNumberBetween(0,7);
//       while(xStack.includes(x) || leftStack.includes(x)){
//           x = getRandomNumberBetween(0,7);
//       }
//       leftStack.push(x);
//   }

//   xStack.forEach(item => {
//       leftStack.push(item);
//   })
  
//   for(let i=0; i<2; i++){
//       x = getRandomNumberBetween(0,7);
//       while(leftStack.includes(x)){
//           x = getRandomNumberBetween(0,7);
//       }
//       leftStack.push(x);
//   }
  
//   x = leftStack[0];
//   leftStack.push(x);

//   sliderInner.innerHTML = '';

//   leftStack.forEach(x => {
//       let petWrap = `<div class="pets__slide" onclick="openModal(${x})">
//                       <img class="pets__slide-image" src=${pets[x].img} alt="${pets[x].type} ${pets[x].name}">
//                       <h3 class="pets__slide-name">${pets[x].name}</h3>          
//                       <button class="button button__trans pets__slide-button">Learn more</button>
//                       </div>`
  
//       sliderInner.innerHTML += petWrap;
//   })
// }