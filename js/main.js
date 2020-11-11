// Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// Создаем переменную, в которую положим меню
let menu = document.querySelector('.sidebar');
// отслеживаем клик по кнопке меню и запускаем функцию 
menuToggle.addEventListener('click', function (event) {
  // отменяем стандартное поведение ссылки
  event.preventDefault();
  // вешаем класс на меню, когда кликнули по кнопке меню 
  menu.classList.toggle('visible');
})

const loginEl = document.querySelector('.login');
const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('.login-email');
const passwordInput = document.querySelector('.login-password');
const loginSignup = document.querySelector('.login-signup');

const listUsers = [
  {
    id: '01',
    email: 'max@gmail.com',
    password: '123',
    displayName: 'Maxjs'
  },
  {
    id: '02',
    email: 'sanya@gmail.com',
    password: '12345',
    displayName: 'Sanyajs'
  },
  {
    id: '03',
    email: 'kir@gmail.com',
    password: '1234566',
    displayName: 'Kirjs'
  }
];

const setUsers = {
  user: null,
  logIn() {
    console.log('вход ');
  },
  LogOut() {
    console.log('выход');
  },
  signUp() {
    console.log('регистрация');
  }

}

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  setUsers.logIn();
});

loginSignup.addEventListener('click', (e) => {
  e.preventDefault();
  setUsers.signUp();
})

