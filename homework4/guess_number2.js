const rl = require('readline').createInterface(process.stdin, process.stdout);


let minInt=1;
let maxInt=21; 
let randomInt = Math.floor(Math.random() * (maxInt - minInt + 1) + minInt);

const fs = require('fs');

async function addToFile(content) {
    let data = await fs.promises.appendFile("index.txt", content, 'utf8');
};

function question(userinput) {
    return new Promise((resolve, reject) => {
        rl.question(userinput, (data) => {
            resolve(data);
        })
    })
}


async function guess_number() {
    console.log(`Давайте угадаем число от ${minInt} до ${maxInt - 1}!`);
    let counter = 0;
    while (true) {
        const past =  await question("Ваше число: ");
        counter ++;
        if (past < minInt || past > maxInt) {
            console.log('Выввели не корректное число! Давайте попробуем еще раз.');
            addToFile('Выввели не корректное число! Давайте попробуем еще раз.\n');
            continue;
        }
        if (past > randomInt) {
            console.log(`Загаданное число меньше. Вы ввели ${past}. Попытка № ${counter}.`);
            addToFile(`Загаданное число меньше. Вы ввели ${past}. Попытка № ${counter}.\n`)
        } else if (past < randomInt) {
            console.log(`Загаданное число побольше. Вы ввели ${past}. Попытка № ${counter}.`);
            addToFile(`Загаданное число побольше. Вы ввели ${past}. Попытка № ${counter}.\n`)
        } else {
            console.log(`Отлично! Угадали! Ваше общее количество попыток: ${counter}`)
            addToFile(`Отлично! Угадали! Вы ввели ${past}. Ваше общее количество попыток: ${counter}.\n`)
            rl.close()
            break;
        }
    }
}

guess_number();