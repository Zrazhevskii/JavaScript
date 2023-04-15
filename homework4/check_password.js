// Добрый день! Не много не понял задание и решил сделать несколько вариантов.

const rl = require('readline').createInterface(process.stdin, process.stdout);


function getPasswordChecker(password) {
    function wrapper() {
        rl.question('Введите пароль: ', (past) => {
            if (past == password) {
                console.log('Отлично угадали!')
                rl.close();
            } else {
                console.log('Вы ввели не правильный пароль')
                return wrapper();
            }
        })
    }
    return wrapper;
}

const check = getPasswordChecker('qwerty');
check()


// function getPasswordChecker(password) {
//     return function(past) {
//         if (password === past) {
//             return true;
//         } else {
//             return false;
//         }
//     }
// }

// const check = getPasswordChecker('qwerty');

// console.log(check('qwe'));
// console.log(check('qwerty'));
