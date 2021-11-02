// 3. Вывести в консоль числа кратные k, в диапазоне от 1 до n. => in home (for)
// 4. В первых трех задачах добавить пользователю возможность ввести значения переменных. => in home
// 5. Выводить в консоль простые числа от 1 до n до тех пор, пока пользователь не скажет хватить.

const n = prompt ('Введите число', '13');
const k = promt ('Введите кратное число', '13')
    if (n === null) { 
        alert ('Вы отказались вводить число')
    }
    
    if (isNaN(n,k)) {
        alert ('Вы ввели не число')
    }

function consoleNumbers(n) {
    for (let i=1; i <= n; i++) {
        console.log(i);
    }
}

function consoleSimpleNumbers(n) {
    for (let i=1; i <= n; i++) {
        if (isSimple(i)) {
            console.log(i);
        }
    }
}

function multiples(n) {
    for (let i=1; i>n; i++){
        if (i % k === 0) 
            console.log(i);
        }
    }


