const iceCards = [
  {
    name: 'Choco Chip',
    imgUrl:
      'https://images.unsplash.com/photo-1514849302-984523450cf4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
    price: 9.99
  },
  {
    name: 'Double Date',
    imgUrl:
      'https://images.unsplash.com/photo-1556682851-c4580670113a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
    price: 15.69
  },
  {
    name: 'Fruit Mix',
    imgUrl:
      'https://images.unsplash.com/photo-1568464774940-a3de36f824a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
    price: 24.55
  },
  {
    name: 'Vanilla-Coffee ',
    imgUrl:
      'https://images.unsplash.com/photo-1561845730-208ad5910553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
    price: 8
  },
  {
    name: 'Choco-Lava',
    imgUrl:
      'https://images.unsplash.com/photo-1570081457302-6c0f1bd174bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
    price: 19.99
  },
  {
    name: 'Choco Lush',
    imgUrl:
      'https://images.unsplash.com/photo-1560252116-0c0d45fffdf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
    price: 7.88
  },
  {
    name: 'Vanilla Choco',
    imgUrl:
      'https://images.pexels.com/photos/3625371/pexels-photo-3625371.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    price: 3.5
  },
  {
    name: 'Choco Chips',
    imgUrl:
      'https://images.pexels.com/photos/2819088/pexels-photo-2819088.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    price: 4.99
  },
  {
    name: 'Strawberry Splash',
    imgUrl:
      'https://images.pexels.com/photos/1352281/pexels-photo-1352281.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    price: 4.99
  },
  {
    name: 'Pista Kulfi',
    imgUrl:
      'https://images.pexels.com/photos/2262566/pexels-photo-2262566.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    price: 14.99
  },
  {
    name: 'Almond Mash',
    imgUrl:
      'https://images.pexels.com/photos/1101026/pexels-photo-1101026.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    price: 20.99
  },
  {
    name: 'Strawberry Twister',
    imgUrl:
      'https://images.pexels.com/photos/1332267/pexels-photo-1332267.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    price: 5.99
  }
];

const inp = document.querySelector('.search');
const input = document.querySelector('.search input');
let imagesDiv = document.createElement('div');
const oneDiv = document.createElement('div');

imagesDiv.classList.add('images');
oneDiv.classList.add('one');

function render(item) {
  item.forEach(item => {
    const itemContent = `
    <div class="item">
    <img src='${item.imgUrl}' alt="1" />
    <div class="des">
      <p>${item.name}</p>
      <p>$${item.price}</p>
    </div>
    </div>`;

    const itemContentEl = document
      .createRange()
      .createContextualFragment(itemContent);
    const itemsDiv = itemContentEl.querySelector('.item');

    oneDiv.insertAdjacentElement('afterbegin', itemsDiv);
    imagesDiv.insertAdjacentElement('afterbegin', oneDiv);
    inp.insertAdjacentElement('afterend', imagesDiv);
  });
}

render(iceCards);

input.addEventListener('input', e => {
  oneDiv.innerHTML = '';
  const filterCards = iceCards.filter(ice => {
    return ice.name.toLowerCase().includes(e.currentTarget.value);
  });
  render(filterCards);
});

function handleMenu() {
  const hamburgerMenu = document.querySelector('.toggleNav');
  const nav = document.querySelector('.nav .bar .right');

  hamburgerMenu.addEventListener('click', () => {
    nav.style.transform = 'translateX(0)';
  });

  hamburgerMenu.addEventListener('mouseenter', () => {
    nav.style.transform = 'translateX(100%)';
  });
}

handleMenu();
