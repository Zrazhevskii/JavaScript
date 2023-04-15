// Добрый день! Не много не понял задание и решил сделать несколько вариантов.

const rl = require('readline').createInterface(process.stdin, process.stdout);


function getPasswordChecker(password) {
    function wrapper() {
        rl.question('Введите пароль: ', (past) => {
            console.log('Вы ввели: ', past);
            if (past == password) {
                rl.close();
                return
            } else {
                return wrapper();
            }
        })
    }
    return wrapper;
}

// const check = getPasswordChecker('qwerty');
// check()


function getPasswordChecker(password) {
    return function(past) {
        if (password === past) {
            return true;
        } else {
            return false;
        }
    }
}

const check = getPasswordChecker('qwerty');

// console.log(check('qwe'));
// console.log(check('qwerty'));
