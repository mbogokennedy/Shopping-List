// DOM CHEAT SHEET by Kennedy Mbogo 




// console.dir(document)
// console.log(document.domain)
// console.log(URL)

//selctors//
// // getElementById
// const main = document.getElementById("main");
// console.log(main);
// main.innerText = Hello; //this pays attention on the visible text on document
//main.textContent = Goodby; //this pays attention to the hole text content even the invisible due to display none.
//  main.innerHtml = <h3>Hello</h3>;
// main.style.borderBottom = 'solid 3px #000'; 
// Get Elements By className
// let item = document.getElementsByClassName('list-group-item');
// // console.log(item)
// // console.log(item[0])
// // console.log(item[1].textContent='Hello');
// // item.style.backgroundColor = '#f4f4f4'; //wrong. You have to iterate through each

// for(let i = 0; i<item.length; i++) {
//     item[i].style.backgroundColor = '#f4f4f4';
// }

//Get by Tag Name

// let li = document.getElementsByTagName('li')

// for(let i = 0; i<li.length; i++) {
//     li[i].style.backgroundColor = '#f4f4f4';
// }

// Query Selector

// let main = document.querySelector('#main')

// let input = document.querySelector('input' 'or input[type="submit"]'); //this considers the first occurence

// var items  = document.querySelector('.list-group-item:nth-child(4)');
// console.log(items)


// Querry selector All

// let titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].style.color = 'red';

// let odd = document.querySelectorAll('li:nth-child(odd)');
// for(let i = 0; i<odd.length; i++) {
//    odd[i].style.backgroundColor = 'green';
// }

// let even = document.querySelectorAll('li:nth-child(even)');
// for(let i = 0; i<even.length; i++) {
//    even[i].style.backgroundColor = 'yellow';
// }

// Traversing the DOM 

// let itemlist = document.querySelector('#items')
// console.log(itemlist.parentNode.parentNode)

// let itemlist = document.querySelector('#items')
// console.log(itemlist.parentElement.parentElement)

// let itemlist = document.querySelector('#items');
// // console.log(itemlist.childNode);
// console.log(itemlist.children[0]);

// console.log(itemlist.firstElementChild)
// console.log(itemlist.lastElementChild)
// console.log(itemlist.nextElementSibling)
// console.log(itemlist.previousElementSibling)

// createelement

// let newDiv = document.createElement('div');
// newDiv.className = "hello";
// newDiv.id = "hi";

// newDiv.setAttribute('title', 'Hello div');

// let newDivText = document.createTextNode('Hello World');

// newDiv.appendChild(newDivText);

// let container = document.querySelector('header .container');

// // let h1 = document.querySelector('header h1');

// // container.insertBefore(newDiv, h1);

// let button = document.getElementById('button').addEventListener('click', buttonClick);

// // function buttonClick() {
// //     // console.log('Button Clicked');
// //     // document.getElementById('main');
// //     let odd = document.querySelectorAll('li:nth-child(odd)');
// //     for(let i = 0; i<odd.length; i++) {
// //         odd[i].style.backgroundColor = 'green';
// //      }
// //      let even = document.querySelectorAll('li:nth-child(even)');

// //     for(let i = 0; i<even.length; i++) {
// //     even[i].style.backgroundColor = 'yellow';
// //     }
// // }

// // function buttonClick(e) {
// //     // console.log('Button Clicked');
// //     // document.getElementById('main');
// //     console.log(e)
// // }
// function buttonClick(e) {
//     // console.log('Button Clicked');
//     // document.getElementById('main');
//     // console.log(e.target);
//     // console.log(e.target.id);
//     // console.log(e.target.classList);
//     // console.log(e.type);
//     // console.log(e.clientY);
//     // console.log(e.clientX);
//     // console.log(e.offsetY);
//     // console.log(e.offsetX);
//     // console.log(e.altKey);
//     // console.log(e.shiftKey);
// //     // console.log(e.ctrlKey);
// //     // console.log(e.altKey);

// // }
// // let button = document.getElementById('button');
// // let box = document.getElementById('box');
// // button.addEventListener('mouseup', runEvent);
// // button.addEventListener('mousedown', runEvent);
// // button.addEventListener('dblclick', runEvent);
// // button.addEventListener('click', runEvent);
// // box.addEventListener('mouseenter', runEvent);
// // box.addEventListener('mouseleave', runEvent);
// // box.addEventListener('mouseout', runEvent);
// // box.addEventListener('mouseover', runEvent);

// // box.addEventListener('mousemove', runEvent);
// // let button = document.getElementById('button');

// // 16/3/2018

// let itemInput = document.querySelector('input[type="text"]');
// let form = document.querySelector('form');
// let selector = document.querySelector('selector');
// // itemInput.addEventListener('keydown', runEvent);
// // itemInput.addEventListener('focus', runEvent);
// // itemInput.addEventListener('blur', runEvent);
// // itemInput.addEventListener('paste', runEvent);
// // itemInput.addEventListener('cut', runEvent);
// // itemInput.addEventListener('input', runEvent);
// // selector.addEventListener('change', runEvent);
// form.addEventListener('submit', runEvent);
// function runEvent(e){
//     e.preventDefault();
//     console.log('EVENT TYPE:' +e.type);
//     console.log(e.target.value);
//     itemInput.style.background='red';
// }