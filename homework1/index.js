let numberRandom = Math.floor(Math.random() * 1000);
console.log(`Число: ${numberRandom}`)

console.log("Для выхода из программы введите - exit")

while (true) {
    const numberUser = prompt("Мы загадали число от 1 до 1000, угадайте его!")
    console.log("Вы ввели", numberUser)
    
    if (numberUser === "exit") {
        break
    }
    
    
    if (isNaN(numberUser) || (+numberUser < 0 || +numberUser > 1000)) {
        alert("Вы ввели некорректное значение. Необходимо ввести число от 1 до 1000")
    } else if (+numberUser > numberRandom) {
        alert("Вы не угадали! Загаданное число меньше")
    } else if (+numberUser < numberRandom) {
        alert("Вы не угадали! Загаданное число больше")
    } else {
        alert("Поздравляем Вы угадали!!!")
        break
    } 
}
    