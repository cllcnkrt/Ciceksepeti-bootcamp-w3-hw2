/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import html from './index.html';
/* classes */
class Animal {
  constructor(name, image, numberOfLegs) {
    this.name = name;
    this.image = image;
    this.numberOfLegs = numberOfLegs;
  }
}

class Dog extends Animal {
  constructor(name, image, numberOfLegs, age) {
    super(name, image, numberOfLegs);
    this.age = age;
  }
}

class Duck extends Animal {
  constructor(name, image, numberOfLegs, age) {
    super(name, image, numberOfLegs);
    this.age = age;
  }
}
/* dog instances */
const dog1 = new Dog(
  'MAX',
  'https://images.pexels.com/photos/2007/animal-dog-pet-cute.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  4,
  10
);
const dog2 = new Dog(
  'CHARLIE',
  'https://images.pexels.com/photos/4681107/pexels-photo-4681107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  4,
  2
);
const dog3 = new Dog(
  'TEDDY',
  'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  4,
  7
);

/* duck instances */
const duck1 = new Duck(
  'MILO',
  'https://images.pexels.com/photos/660266/pexels-photo-660266.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  2,
  4
);
const duck2 = new Duck(
  'BENTLEY',
  'https://images.pexels.com/photos/3757747/pexels-photo-3757747.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  2,
  2
);
const duck3 = new Duck(
  'ROCKY',
  'https://images.pexels.com/photos/7624356/pexels-photo-7624356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  2,
  7
);

/* animal arrays */
const animals = [dog1, dog2, dog3, duck1, duck2, duck3];

/* creating animal cards */
function createAnimal(animalArray) {
  const containerDOM = document.querySelector('.container');

  animalArray.forEach((element, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.classList.add(`card${index}`);

    const cardInner = document.createElement('div');
    cardInner.className = 'card__inner';

    const cardFaceFront = document.createElement('div');
    cardFaceFront.classList.add('card__face', 'card__face--front');

    const imgFront = document.createElement('img');
    imgFront.className = 'img';
    imgFront.src = element.image;

    const cardFaceBack = document.createElement('div');
    cardFaceBack.classList.add('card__face', 'card__face--back');

    const cardContent = document.createElement('div');
    cardContent.className = 'card__content';

    const cardHeader = document.createElement('div');
    cardHeader.className = 'card__header';

    const imgBack = document.createElement('img');
    imgBack.src = element.image;
    imgBack.className = 'pp';

    const nameBack = document.createElement('h2');
    nameBack.textContent = element.name;

    const cardBody = document.createElement('div');
    cardBody.className = 'card__body';

    const age = document.createElement('h3');
    age.textContent = element.age;

    card.appendChild(cardInner);
    cardFaceFront.appendChild(imgFront);
    cardInner.appendChild(cardFaceFront);
    cardInner.appendChild(cardFaceBack);
    cardFaceBack.appendChild(cardContent);
    cardContent.appendChild(cardHeader);
    cardHeader.appendChild(imgBack);
    cardHeader.appendChild(nameBack);
    cardContent.appendChild(cardBody);
    cardBody.appendChild(age);
    containerDOM.appendChild(card);
  });
}
createAnimal(animals);

/* ScrollReveal  */
// eslint-disable-next-line no-undef
ScrollReveal().reveal('.card0', { delay: 250 });
ScrollReveal().reveal('.card1', { delay: 500 });
ScrollReveal().reveal('.card2', { delay: 750 });
ScrollReveal().reveal('.card3', { delay: 1500 });
ScrollReveal().reveal('.card4', { delay: 1250 });
ScrollReveal().reveal('.card5', { delay: 1000 });
