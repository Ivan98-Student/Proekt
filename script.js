// let arr = ['plum.png','warszawa.jpg','apple.bmp'];

// console.log(arr[0])

//выводит предупреждаще окно с надписю "Hello World"
//alert("Hello World"); 

/*выводит команду (ОТМЕНА или ОК с надписью Are you here?)
confirm("Are you here?"); */ 
/* Если добавить команду */
// let answer = confirm("Are you here?");  

// console.log(answer);
/*если выбрать ОК то оно в консоли ставит значееия  "true"
а если выбрать ОТМЕНА ТО ВЫВОДИТ false*/


/*Команда кодорая выводит на екран вопрос и ты можешь ответить на него ДА или НЕТ 
(После того как ты  ответил ето записываеться в консоле)*/
// let answer = prompt("Есть ли вам 18?", "Да или Нет" );  

//можна выбирать обекть 'typeof'  или удалить 
// console.log(answer);
//console.log(typeof(answer)); 



//2.4 Урок Операторы в JS
//операторы JS
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// математический сложения которое додает название
// console.log("arr" + "-- object"); 
// console.log(4 +  " -- object");

let incr = 10,
    decr = 10;
//Способ Отнять и дать
// incr++;
// decr--;

console.log(++incr);
console.log(--decr);

console.log(5%2);
console.log("2" === 2); // == tru  === false

let isCecked = false,
    isClose  = false;

    console.log(isCecked || !isClose);

// 2,5 Учимся работать с системой контроля версий Git и сервером GitHub
/*
git init - Инициирую нам пожалуйста этот репозиторий

 начала надо представиться
git config --local user.name "Ivan"
git config --local user.email ivan8donik@gmail.com

git status (Проверка файлов()
git add -A (Добавить все файлы в репозиторий)
git add main.css (Добавить файл вручную)

git commit -a -m"First commit" (Загружать все файлы на сайт GitHub)