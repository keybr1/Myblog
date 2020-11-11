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

const userEl = document.querySelector('.user');
const userElName = document.querySelector('.user-name');

const toggleAuthDom = () => {
  const user = setUsers.user;
  console.log('user: ', user);

  if (user) {
    loginEl.style.display = 'none';
    userEl.style.display = '';
    userElName.textContent = user.displayName;
  } else {
    loginEl.style.display = '';
    userEl.style.display = 'none';
  }
}

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
  logIn(email, password, handler) {
    const user = this.getUser(email);
    if(user && user.password === password) {
      this.authorizedUser(user);
      handler();
    } else {
      alert('User with this data not found')
    }
    console.log(email, password);
  },
  LogOut() {
    console.log('выход');
  },
  signUp(email, password, handler) {
    if(!this.getUser(email)) {
      const user = { email, password, displayName: email};
      listUsers.push(user);
      this.authorizedUser(user);
      handler();
    } else {
      alert('user alreade registrated!');
    }
  },

getUser(email) {
  return listUsers.find(item => item.email === email);
  // let user = null;
  // for(let i = 0; i < listUsers.length; i++) {
  //   if (listUsers[i].email === email) {
  //     user = listUsers[i];
  //     break;
  //   } 
  // }
  // return user;
},
authorizedUser(user) {
  this.user = user;
}


}

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  setUsers.logIn(emailInput.value, passwordInput.value, toggleAuthDom);
});

loginSignup.addEventListener('click', (e) => {
  e.preventDefault();
  setUsers.signUp(emailInput.value, passwordInput.value, toggleAuthDom);
})

toggleAuthDom();