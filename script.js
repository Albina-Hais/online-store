const items = [{
        title: "Полуботинки мужские Puma",
        description: "PUMA Trinity Lite вдохновлены беговой эстетикой. Массивные кроссовки с ретро-силуэтом подчеркнут твой безупречный стиль.",
        tags: ["male"],
        price: 173,
        img: "./img/1.jpeg",
        rating: 4.5,
    },
    {
        title: "Полуботинки женские FILA",
        description: "Кроссовки FILA Escape станут отличным завершением спортивного образа и внесут максимум комфорта в твой день.",
        tags: ["female"],
        price: 217,
        img: "./img/2.jpg",
        rating: 5.0,
    },
    {
        title: "Полуботинки женские Termit",
        description: "Кеды Termit Casper 3.0 на капсульной подошве — отличное дополнение к твоему образу. Ты можешь надеть их, если планируешь покататься на доске или прогуляться с друзьями по городу. ",
        tags: ["female"],
        price: 187,
        img: "./img/3.jpeg",
        rating: 4.8,
    },
    {
        title: "Полуботинки мужские GSD",
        description: "Кроссовки GSD One 2 с легкостью дополнят любой спортивный образ и отлично подойдут для долгих прогулок.",
        tags: ["male"],
        price: 62,
        img: "./img/4.jpeg",
        rating: 4.7,
    },
    {
        title: "Топ спротивный женский",
        description: "Идельно подойдет для интенсивных тренировок!",
        tags: ["female"],
        price: 156,
        img: "./img/5.jpeg",
        rating: 4.9,
    },
    {
        title: "Джемпер женский FILA",
        description: "Худи оверсайз от FILA — то что нужно для создания оригинального образа в спортивном стиле.",
        tags: ["female"],
        price: 202,
        img: "./img/6.jpeg",
        rating: 4.9,
    },
    {
        title: "Джемпер мужской GEOTECH",
        description: "Функциональный лонгслив Geotech создан специально для отдыха на природе. Это практичный выбор как для поездок на охоту и рыбалку, так и для прогулок или походов.",
        tags: ["male"],
        price: 80,
        img: "./img/7.jpeg",
        rating: 2.9,
    },
    {
        title: "Куртка мужская Kappa",
        description: "Мягкая и уютная толстовка Kappa — идеальное сочетание функциональности и стиля!",
        tags: ["male"],
        price: 520,
        img: "./img/8.jpeg",
        rating: 3.4,
    },
    {
        title: "Сумка женская Kappa",
        description: "Сумка-шоппер от Kappa идеальна и для повседневной рутины, и для походов на тренировки.",
        tags: ["female"],
        price: 150,
        img: "./img/9.jpeg",
        rating: 3.9,
    },
    {
        title: "Сумка женская Sensana",
        description: "Сумка Sensana — стильная и функциональная модель для твоей экипировки.",
        tags: ["female"],
        price: 350,
        img: "./img/10.jpeg",
        rating: 2.8,
    },
    {
        title: "Рюкзак мужской/женский Zanier",
        description: "С этим рюкзаком от Zanier вы сможете взять с собой практически все, что захотите.",
        tags: ["female", "male"],
        price: 3500,
        img: "./img/11.jpeg",
        rating: 3.7,
    },
    {
        title: "Сумка дорожная мужская/женская Kappa",
        description: "Функциональная сумка Kappa идеально подходит для похода в спортзал.",
        tags: ["female", "male"],
        price: 800,
        img: "./img/12.jpeg",
        rating: 4.1,
    },
    {
        title: "Панама мужская/женская Outventure",
        description: "Панама Outventure — необходимый аксессуар для активного отдыха на природе. ",
        tags: ["female", "male"],
        price: 83,
        img: "./img/13.jpeg",
        rating: 4.1,
    },
    {
        title: "Кепка мужская Columbia",
        description: "Получайте максимум удовольствия от каждой летней прогулки с бейсболкой от Columbia!",
        tags: ["male"],
        price: 146,
        img: "./img/14.jpeg",
        rating: 4.1,
    },
    {
        title: "Кепка женская Adidas",
        description: "Бейсболка от adidas создана для твоих стильных образов.",
        tags: ["female"],
        price: 293,
        img: "./img/15.jpeg",
        rating: 3.4,
    },
    {
        title: "Шапка мужская/женская GSD",
        description: "Вязаная шапка GSD — оптимальный аксессуар, который пригодится для прогулок в холодное время года.",
        tags: ["female", "male"],
        price: 694,
        img: "./img/15.jpeg",
        rating: 2.8,
    },
];

const itemsContainer = document.querySelector("#shop-items");
const itemTemplate = document.querySelector("#item-template");
const nothingFound = document.querySelector("#nothing-found");


function prepareShopItem(shopItem) {

    const { title, description, tags, img, price, rating } = shopItem;

    const item = itemTemplate.content.cloneNode(true);

    item.querySelector('h1').textContent = title;
    item.querySelector('p').textContent = description;
    item.querySelector('img').src = img;
    item.querySelector('.price').textContent = `${price}P`;


    const ratingContainer = item.querySelector('.rating');

    for (let i = 0; i < rating; i++) {
        const heart = document.createElement('i');
        heart.classList.add("fa", "fa-heart");
        ratingContainer.append(heart);
    }

    const tagsHolder = item.querySelector('.tags');

    tags.forEach(tag => {
        const element = document.createElement('span');
        element.classList.add('tag');
        element.textContent = tag;
        tagsHolder.append(element);
    });

    return item;
}



let currentState = [...items];

function renderItems(items) {
    nothingFound.textContent = "";

    itemsContainer.innerHTML = "";

    items.forEach((item) => {
        itemsContainer.append(prepareShopItem(item));
    });

    if (!items.length) {
        nothingFound.textContent = "Ничго не найдено";
    }
}

renderItems(currentState);

function sortByAlphabet(a, b) {

    if (a.title > b.title) {
        return 1;
    }

    if (a.title < b.title) {
        return -1;
    }

    return 0;
}

renderItems(currentState.sort((a, b) => sortByAlphabet(a, b)));

const sortControl = document.querySelector("#sort");

sortControl.addEventListener('change', (event) => {

    const selectedOption = event.target.value;

    switch (selectedOption) {

        case "expensive":
            {
                currentState.sort((a, b) => b.price - a.price);
                break;
            }

        case "cheap":
            {
                currentState.sort((a, b) => a.price - b.price);
                break;
            }

        case "rating":
            {
                currentState.sort((a, b) => b.rating - a.rating);
                break;
            }

        case "alphabet":
            {
                currentState.sort((a, b) => sortByAlphabet(a, b));
                break;
            }
    }
    renderItems(currentState);
});

const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-btn');

function applySearch() {
    const saerchString = searchInput.value.trim().toLowerCase();
    currentState = items.filter((el) =>
        el.title.toLowerCase().includes(saerchString)
    );

    currentState.sort((a, b) => sortByAlphabet(a, b));

    sortControl.selectedIndex = 0;

    renderItems(currentState);
}

searchButton.addEventListener("click", applySearch);
searchInput.addEventListener("search", applySearch);