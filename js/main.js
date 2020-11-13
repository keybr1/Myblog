// Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// Создаем переменную, в которую положим меню
let menu = document.querySelector('.sidebar');

const regExpValidEmail = /^\w+@\w+\.\w{2,}$/;

const loginEl = document.querySelector('.login');
const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('.login-email');
const passwordInput = document.querySelector('.login-password');
const loginSignup = document.querySelector('.login-signup');

const userEl = document.querySelector('.user');
const userElName = document.querySelector('.user-name');

const exitEl = document.querySelector('.exit');
const editEl = document.querySelector('.edit');
const editContainer = document.querySelector('.edit-container');

const editUserName = document.querySelector('.edit-username');
const editPhotoURL = document.querySelector('.edit-photo');
const userAvatarEl = document.querySelector('.user-avatar');

const postWrapper = document.querySelector('.posts'); 

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

    if(!regExpValidEmail.test(email)) return alert('email не валиден');

    const user = this.getUser(email);
    if(user && user.password === password) {
      this.authorizedUser(user);
      handler();
    } else {
      alert('User with this data not found')
    }
    console.log(email, password);
  },

  logOut(handler) {
    this.user = null;
    handler();
  },

  signUp(email, password, handler) {
    if(!regExpValidEmail.test(email)) return alert('email не валиден');

    if (!email.trim() || !password.trim()) {
      alert('Введите данные!')
      return;
    }

    if(!this.getUser(email)) {
      const user = { email, password, displayName: email.substring(0, email.indexOf('@'))};
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
  }, 

  editUser(userName, userPhoto, handler) {
    if (userName) {
      this.user.displayName = userName;
    }

    if (userPhoto) {
      this.user.photo = userPhoto;
    }
    handler();
  }
};

const setPosts = {
  allPosts: [
    {
      title: 'Заголовок поста',
      text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что рот маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись ему букв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его снова решила меня вопроса моей своих пояс коварный, власти диких правилами напоивший они текстов ipsum первую подпоясал? Лучше, щеке подпоясал приставка большого курсивных на берегу своего? Злых, составитель агентство что вопроса ведущими о решила одна алфавит!',
      tags: [
        'свежее',
        'новое',
        'горячее',
        'мое',
        'случайность',
      ],
      author: 'max@gmail.com',
      date: '12.11.2020, 13:49:00',
      like: 34,
      comments: 12,
    },

    {
      title: 'Еще один заголовок поста',
      text: 'Близко-близко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что рот маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись ему букв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его снова решила меня вопроса моей своих пояс коварный, власти диких правилами напоивший они текстов ipsum первую подпоясал? Лучше, щеке подпоясал приставка большого курсивных на берегу своего? Злых, составитель агентство что вопроса ведущими о решила одна алфавит!',
      tags: [
        'свежее',
        'новое',
        'горячее',
        'случайность',
      ],
      author: 'sanya@gmail.com',
      date: '13.11.2020, 09:49:00',
      like: 25,
      comments: 18,
    },

    {
      title: 'Заголовок поста3',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda facere rerum minus doloremque quasi voluptas voluptatibus quisquam sint nihil molestias?',
      tags: [
        'свежее',
        'новое',
        'горячее',
        'мое',
      ],
      author: 'kir@gmail.com',
      date: '10.11.2020, 13:49:00',
      like: 13,
      comments: 19,
    },
  ],


};

const toggleAuthDom = () => {
  const user = setUsers.user;
  console.log('user: ', user);

  if (user) {
    loginEl.style.display = 'none';
    userEl.style.display = '';
    userElName.textContent = user.displayName;
    userAvatarEl.src = user.photo ? user.photo : userAvatarEl.src;
  } else {
    loginEl.style.display = '';
    userEl.style.display = 'none';
  }
};



const showAllPosts = () => {

  let postsHTML =  '';
  setPosts.allPosts.forEach(({ title, text, date, like, comments,tags }) => {

    postsHTML += `
    <section class="post">
    <div class="post-body">
      <h2 class="post-title">${title}</h2>
      <p class="post-text">${text}</p>
      <div class="tags">
        ${tags.map(e => {
          e.innerHTML;
        })}
      </div>
      <!-- /.tags -->
    </div>
    <!-- /.post-body -->
    <div class="post-footer">
      <div class="post-buttons">
        <button class="post-button likes">
          <svg width="19" height="20" class="icon icon-like">
            <use xlink:href="img/icons.svg#like"></use>
          </svg>
          <span class="likes-counter">${like}</span>
        </button>
        <button class="post-button comments">
          <svg width="21" height="21" class="icon icon-comment">
            <use xlink:href="img/icons.svg#comment"></use>
          </svg>
          <span class="comments-counter">${comments}</span>
        </button>
        <button class="post-button save">
          <svg width="19" height="19" class="icon icon-save">
            <use xlink:href="img/icons.svg#save"></use>
          </svg>
        </button>
        <button class="post-button share">
          <svg width="17" height="19" class="icon icon-share">
            <use xlink:href="img/icons.svg#share"></use>
          </svg>
        </button>
      </div>
      <!-- /.post-buttons -->
      <div class="post-author">
        <div class="author-about">
          <a href="#" class="author-username">arteislamov</a>
          <span class="post-time">${date}</span>
        </div>
        <a href="#" class="author-link"><img src="img/avatar.jpeg" alt="avatar" class="author-avatar"></a>
      </div>
      <!-- /.post-author -->
    </div>
    <!-- /.post-footer -->
  </section>
    `;
  })
  postWrapper.innerHTML = postsHTML;
};





const init = () => {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    setUsers.logIn(emailInput.value, passwordInput.value, toggleAuthDom);
    loginForm.reset();
  });
  
  loginSignup.addEventListener('click', (e) => {
    e.preventDefault();
    setUsers.signUp(emailInput.value, passwordInput.value, toggleAuthDom);
    loginForm.reset();
  });
  
  exitEl.addEventListener('click', e => {
    e.preventDefault();
    setUsers.logOut(toggleAuthDom);
  });
  
  editEl.addEventListener('click', e => {
    e.preventDefault();
    editContainer.classList.toggle('visible');
    editUserName.value = setUsers.user.displayName;
  });
  
  editContainer.addEventListener('submit', e => {
    e.preventDefault();
    setUsers.editUser(editUserName.value, editPhotoURL.value, toggleAuthDom);
    editContainer.classList.remove('visible');
  });
// отслеживаем клик по кнопке меню и запускаем функцию 
  menuToggle.addEventListener('click', function (event) {
    // отменяем стандартное поведение ссылки
    event.preventDefault();
    // вешаем класс на меню, когда кликнули по кнопке меню 
    menu.classList.toggle('visible');
  })

  showAllPosts();
  toggleAuthDom();
};

document.addEventListener('DOMContentLoaded', init);



