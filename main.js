"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable no-undef */

/* classes */
var Animal = function Animal(name, image, numberOfLegs) {
  _classCallCheck(this, Animal);

  this.name = name;
  this.image = image;
  this.numberOfLegs = numberOfLegs;
};

var Dog = /*#__PURE__*/function (_Animal) {
  _inherits(Dog, _Animal);

  var _super = _createSuper(Dog);

  function Dog(name, image, numberOfLegs, age) {
    var _this;

    _classCallCheck(this, Dog);

    _this = _super.call(this, name, image, numberOfLegs);
    _this.age = age;
    return _this;
  }

  return Dog;
}(Animal);

var Duck = /*#__PURE__*/function (_Animal2) {
  _inherits(Duck, _Animal2);

  var _super2 = _createSuper(Duck);

  function Duck(name, image, numberOfLegs, age) {
    var _this2;

    _classCallCheck(this, Duck);

    _this2 = _super2.call(this, name, image, numberOfLegs);
    _this2.age = age;
    return _this2;
  }

  return Duck;
}(Animal);
/* dog instances */


var dog1 = new Dog('MAX', 'https://images.pexels.com/photos/2007/animal-dog-pet-cute.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260', 4, 10);
var dog2 = new Dog('CHARLIE', 'https://images.pexels.com/photos/4681107/pexels-photo-4681107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 4, 2);
var dog3 = new Dog('TEDDY', 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 4, 7);
/* duck instances */

var duck1 = new Duck('MILO', 'https://images.pexels.com/photos/660266/pexels-photo-660266.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 2, 4);
var duck2 = new Duck('BENTLEY', 'https://images.pexels.com/photos/3757747/pexels-photo-3757747.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 2, 2);
var duck3 = new Duck('ROCKY', 'https://images.pexels.com/photos/7624356/pexels-photo-7624356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 2, 7);
/* animal arrays */

var animals = [dog1, dog2, dog3, duck1, duck2, duck3];
/* creating animal cards */

function createAnimal(animalArray) {
  var containerDOM = document.querySelector('.container');
  animalArray.forEach(function (element, index) {
    var card = document.createElement('div');
    card.className = 'card';
    card.classList.add("card".concat(index));
    var cardInner = document.createElement('div');
    cardInner.className = 'card__inner';
    var cardFaceFront = document.createElement('div');
    cardFaceFront.classList.add('card__face', 'card__face--front');
    var imgFront = document.createElement('img');
    imgFront.className = 'img';
    imgFront.src = element.image;
    var cardFaceBack = document.createElement('div');
    cardFaceBack.classList.add('card__face', 'card__face--back');
    var cardContent = document.createElement('div');
    cardContent.className = 'card__content';
    var cardHeader = document.createElement('div');
    cardHeader.className = 'card__header';
    var imgBack = document.createElement('img');
    imgBack.src = element.image;
    imgBack.className = 'pp';
    var nameBack = document.createElement('h2');
    nameBack.textContent = element.name;
    var cardBody = document.createElement('div');
    cardBody.className = 'card__body';
    var age = document.createElement('h3');
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

ScrollReveal().reveal('.card0', {
  delay: 250
});
ScrollReveal().reveal('.card1', {
  delay: 500
});
ScrollReveal().reveal('.card2', {
  delay: 750
});
ScrollReveal().reveal('.card3', {
  delay: 1500
});
ScrollReveal().reveal('.card4', {
  delay: 1250
});
ScrollReveal().reveal('.card5', {
  delay: 1000
});
