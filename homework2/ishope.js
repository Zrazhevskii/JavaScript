const catalog = [
    {
        id: 1,
        name: "Куртка мужская",
        discription: "Куртка замшевая, черная",
        size: [
            48, 50, 52, 56
        ],
        price: 8500,
        available: "not available",
    },
    {
        id: 2,
        name: "Сапоги женские",
        discription: "Сапоги кожанные, красные",
        size: [
            36, 37, 38, 41
        ],
        price: 5300,
        available: "available",
    },
    {
        id: 3,
        name: "Туфли мужские",
        discription: "Туфли мужские, зимние, коричневые",
        size: [
            48, 50, 52, 56
        ],
        price: 4150,
        available: "not available",
    },
    {
        id: 4,
        name: "Рубашка",
        discription: "Рубашка женская, 100% хлопок, в горошек",
        size: [
            42, 44, 46, 48
        ],
        price: 1800,
        available: "available",
    },
    {
        id: 5,
        name: "Носки",
        discription: "Носки хлопковые, мужские",
        size: [
            41, 42, 43, 44,
        ],
        price: 230,
        available: "available",
    }
];

// console.log(catalog[4]['size'][1]);

const basket = [
    {
        good: 4,
        amount: 3,
    },
    {
        good: 2,
        amount: 1,
    },
    {
        good: 5,
        amount: 8,
    },
];

// проверка наличия товара в корзине и изменение количества при необходимости
//добавление товара в корзину
    
function addGoodBascet(Index, Amount) {
    let count = basket.map((o) => o.good).indexOf(Index)
    if (count !== -1) {
        basket.splice(count, 1, {good: Index, amount: Amount});
    } else {
        basket.push({good: Index, amount: Amount});
    }
    return basket
}
    
// console.log(addGoodBascet(process.argv[2], process.argv[2]))

//удаление товара из корзины

function deletGoodBasket(Index) {
    for (let i = 0; i < basket.length; i++) {
        if (basket[i].good === Index) {
            basket.splice(i, 1);
        } 
    }
    return basket
}

// console.log(deletGoodBasket(2))

// очистка корзины

function cleanBasket() {
    basket.splice(0, basket.length)
    return basket
}

// console.log(cleanBasket())

// расчет общего количества товаров в корзине
// расчет общей стоимости товаров в корзине

function totalSum() {
    let totalAmount = 0;
    let totalSum = 0;

    for (let j = 0; j < basket.length; j++) {
        totalAmount += basket[j].amount
        for (let s = 0; s < catalog.length; s++) {
            if (basket[j].good === catalog[s].id) {
                totalSum += catalog[s].price * basket[j].amount;
            }
        }
    }
    let result = {
        totalAmount: totalAmount,
        totalSum: totalSum,
    }
    return result
}
    
console.log(totalSum())
