class Good {
    constructor(id, name, description, sizes, price, available) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.sizes = sizes;
        this.price = price;
        this.available = available;
    }
    setAvailable(status) {
        this.available = status;
    }
  }
  
  class GoodsList {
    #goods
    constructor(filter, sortPrice, sortDir) {
        this.#goods = [];
        this.filter = filter;
        this.sortPrice = sortPrice;
        this.sortDir = sortDir;
    }
    get list() {
        const selectedProduct = this.#goods.filter(good => this.filter.test(good.name));
        
        if (this.sortPrice) {
            if (this.sortDir) {
              return selectedProduct.sort((a, b) => (a.price - b.price));
        }
            return selectedProduct.sort((a, b) => (b.price - a.price));
        }
        
    }
  
    add(newGood) {
        this.#goods.push(newGood);
    }
  
    remove(id) {
        this.#goods.filter(good => good.id === id ? this.#goods.splice(id - 1, 1) : good);
    }
  }
  
  
  class BasketGood extends Good {
    constructor(id, name, description, sizes, price, available, amount) {
        super(id, name, description, sizes, price, available);
        this.amount = amount;
    }
  }
  
  class Basket {
    constructor() {
        this.goods = []
    }
    
    get totalAmount() {
        return this.goods.map(item => item.amount).reduce((a, b) => a + b, 0)
    }
  
    get totalSum() {
        return this.goods.reduce((a, b) => a + b.amount * b.price, 0);
    }
  
    add(good, amount) {
        let index = this.goods.findIndex(value => value.id === good.id);
        if (index >= 0) {
            this.goods[index].amount += amount;
        } else {
            let addGood = new BasketGood(good.id, good.name, good.description, good.sizes, good.price, good.available, amount);
            this.goods.push(addGood);
        }
    }
  
    remove(good, amount) {
        let index = this.goods.findIndex(value => value.id === good.id);
        if (index >= 0) {
            if (this.goods[index].amount - amount <= 0 || amount === 0) {
                this.goods.splice(index, 1);
            } else {
                this.goods[index].amount -= amount;
            }
        } 
    }
  
    clear() {
        this.goods.length = 0;
    }
  
    removeUnavailable(status) {
        this.goods.filter((item, i) => item.available === status ? basket.goods.splice(i, 1) : item);
    }
  
  }
  
  
  const first = new Good(1, "Футболка мужская", "Футболка мужская с цетным драконом", ["S", "M", "XL"], 1500, true);
  const second = new Good(2, "Куртка", "Мужская кожанная, зимняя, черная", [52, 54, 56, 58, 60], 45000, true);
  const third = new Good(3, "Сапоги женские", "Сапоги кожанные, красные", [36, 37, 38, 39], 15000, true);
  const fourth = new Good(4, "Туфли мужские", "Туфли мужские, летние, коричневые", [42, 43, 44, 45], 8000, true);
  const fifth = new Good(5, "Футболка детская", "Цветные детские футболки", [110, 116, 122], 1000, true);
  const six = new Good(6, "Футболка женская", "Яркая многоцветная", ["XS", "S", "M"], 1800, true);
  
  fourth.setAvailable(false);
  
  const catalog = new GoodsList(/\S/i, true, false);
  
  
  catalog.add(first);
  catalog.add(second);
  catalog.add(third);
  catalog.add(fourth);
  catalog.add(fifth);
  catalog.add(six)
  
  // console.log(catalog.list)
  
  // catalog.sortPrice = true;
  // catalog.sortDir = true;
  
  // if (catalog.sortDir) {
  //     console.log("Выбранные товары товары по возростанию цены:", catalog.list);
  // } else {
  //   console.log("Выбранные товары товары по убыванию цены:", catalog.list);
  // }
  
  
  catalog.remove(3);
  // console.log('Вы удалили товар. Оставшиеся товары:', catalog.list);
  
  const basket = new Basket();
  
  basket.add(first, 2);
  basket.add(second, 1);
  basket.add(third, 1);
  basket.add(fourth, 1);
  basket.add(fifth, 5);
  basket.add(six, 4);
  
  // console.log(basket)
  
  // console.log("Всего товаров в корзине:", basket.totalAmount);
  // console.log("Общая сумма товаров в корзине на сумму -", basket.totalSum);
  
  basket.remove(fifth, 1);
  basket.remove(six, 2);
  
  // console.log(basket.goods)
  
  basket.removeUnavailable(false);
  
  console.log(basket.goods)
  
  basket.clear();
  
  console.log(basket.goods)