//  Дополнительно ( 4 балла )
// Результат должен быть аналогичен тому, что получится в предыдущем упражнении

// Однако исходный массив tags должен быть массивом объектов, каждый из которых содержит не только имя тега элемента, но и его атрибуты, а так же хотя бы один обработчик события

// Таким образом, массив classes нам уже не нужен, но кроме стилизации элементов нужно еще добавить их контент, используя как атрибуты тегов, так и свойства элементов DOM

var tags = [
    {
        name: 'header',
    attrs: {
          className: 'header',
      innerText: 'Hello World',
        }
    },
    {
        name: 'section',
    attrs: {
          className: 'section',
      innerText: 'Good Morning',
        }
    },
    {
        name: 'div',
    attrs: {
          className: 'div',
      innerText: 'Good afternoon',
      title: 'Title'
        }

    },
    {
     name: 'img',
    attrs: {
      src: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
      title: 'Title'
        }
  },
    {
        name: 'p',
    attrs: {
          className: 'paragraph',
      innerText: '***',
        }
    },
    {
        name: 'footer',
    attrs: {
          className: 'footer',
      innerText: 'Omfg!'
        }
        
    }
]

var style = document.head.appendChild(
  document.createElement('style')
)
style.textContent = `
  .footer,.paragraph,.div,.section,.header {
    height: 100px;
        width: 100px;
    padding: 20px;
  }
  img{
    width: 200px;
  }
  .footer {
        background-color: gray;
  }
  .paragraph {
        background-color: yellow;
     
  }
  .div {
        background-color: purple;
     
  }
  .section {
        background-color: green;
     
  }
  .header {
        background-color: orange;
     
  }
`

function clickHandler(event){
  function randomColor(){
    return Math.round(Math.random() * 255)
  }
  event.target.style.color = `rgb(${randomColor()},${randomColor()},${randomColor()})`
}
for(var tag of tags){
   var elem = document.body.appendChild(
        document.createElement(`${tag.name}`)
  )
  for(var attr in tag.attrs)
    elem[attr] = tag.attrs[attr]
  elem.onclick = function (event){
    clickHandler(event)
    }
}