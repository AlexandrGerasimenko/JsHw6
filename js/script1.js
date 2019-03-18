// :briefcase: Обязательное задание ( 3 балла )
// Создайте массив tags с именами валидных тегов HTML5

// Теперь создайте массив classes с именами классов

// ( число элементов в массиве classes должно быть не меньше, чем число элементов массива tags )

// Создайте элемент style и вставьте его в head документа

// Добавьте контент элемента style с описанием классов, имена которых находятся в массиве classes

// Итерируйте массив tags, создавая соответствующие элементы и вставляя их на страницу, добавляя каждому элементу класс из массива classes

var tags = ['div', 'p', 'section', 'article'];
var classes = ['top', 'center', 'main', 'wrapper', 'right'];
var style = document.head.appendChild(document.createElement('style'));
i=0;
style.innerText = `* {
                     width: 100px; height: 100px;
                      }
                   .top {
                      background-color: red;
                     }
                   .center {
                      background-color: green;
                     }
                   .main {
                      background-color: blue;
                     }
                   .wrapper {
                      background-color: pink;
                     }`;
for ( var tag of tags){
   var newTag = document.body.appendChild(document.createElement(tag));
   newTag.className = classes[i++];
}


// апилить код, который выбирает все элементы-потомки body ( :warning: кроме элементов script ) и добавляет им класc:

// .redBack {
//     background-color: red!important;
// }
// Альтернативный вариант - выбрать все заранее заданные элементы:

// var tags = [ "header", "footer", "main", "div", "p" ]
// Запустить код в консоли любой страницы

// Подсказка: используйте методы объекта classList


var style = document.head.appendChild(document.createElement('style'));
style.textContent = `.redBack {
   background-color: red!important;
}`

for (var elem of document.body.children) {
  elem.tagName === 'SCRIPT'? null : elem.className = 'redBack';
 };
