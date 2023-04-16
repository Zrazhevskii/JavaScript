// const readline = require('readline');
// const { stdin: input, stdout: output } = require('process');

// const rl = readline.createInterface({ input, output });

const rl = require('readline').createInterface(process.stdin, process.stdout);

const fs = require("fs");

let maxInt = 21;
let minInt = 1;

let randomInt = Math.floor(Math.random() * (maxInt - minInt)) + minInt;
// console.log(randomInt)

function guess_number(randomInt) {
    console.log(`Давайте угадаем число от ${minInt} до ${maxInt - 1}!`);
    let counter = 0;
    function wrapper() {
        counter ++;  
        rl.question('Ваше число: ', (past) => {
            if (past < minInt || past > maxInt) {
                console.log('Выввели не корректное число! Давайте попробуем еще раз.')
                add('Выввели не корректное число! Давайте попробуем еще раз.\n')
                return wrapper();
            }
            if (past > randomInt) {
                console.log(`Загаданное число меньше. Вы ввели ${past}. Попытка № ${counter}.`);
                add(`Загаданное число меньше. Вы ввели ${past}. Попытка № ${counter}.\n`)
                return wrapper();
            } else if (past < randomInt) {
                console.log(`Загаданное число побольше. Вы ввели ${past}. Попытка № ${counter}.`);
                add(`Загаданное число побольше. Вы ввели ${past}. Попытка № ${counter}.\n`)
                return wrapper();
            } else {
                console.log(`Отлично! Угадали! Вы ввели ${past}. Ваше общее количество попыток: ${counter}`)
                add(`Отлично! Угадали! Вы ввели ${past}. Ваше общее количество попыток: ${counter}.\n`)
                rl.close();
            }  
        })
    }
    return wrapper;
}

const s = guess_number(randomInt);
s()


function add(content) {
    fs.appendFile('hello.txt', content, (err) => {
        if (err) {
            console.error(err)
            return
        } 
    })
};

