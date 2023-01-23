// EXAMINE THE DOCUMENT //

// console.dir(document);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// document.title = 123;
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = "hello";
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// GETELEMNTBYID //
// console.log(document.getElementById('header-title'));
// let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000'

// GET ELEMENTS BY CLASS NAME //

// let edit = document.getElementsByClassName('title');
// console.log(edit[0]);
// edit[0].style.fontWeight = 'bold';
// edit[0].style.color = 'green';

// let items = document.getElementsByClassName('list-group-item');
// console.log(items[2]);
// items[2].style.backgroundColor = 'green';

// for(let i=0; i<items.length; i++){
//     items[i].style.fontWeight = 'bold';
//  }
// let items = document.getElementsByClassName('list-group-item');
// console.log(items[1]);
// items[1].style.fontWeight = 'bold';
// items[1].textContent = 'Hello 2';

// for(let i=0; i<items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4';
//  }

// GET ELEMENTS BY TAGNAME //
// let li = document.getElementsByTagName('li');
// console.log(li[1]);
// li[1].style.fontWeight = 'bold';
// li[1].textContent = 'Hello 2';

// for(let i=0; i<li.length; i++){
//     li[i].style.backgroundColor = '#f4f4f4';
//  }
// for(let i=0; i<li.length; i++){
//     li[i].style.backgroundColor = 'tomato';
//  }

// QUERY SELECTOR //
// let header = document.querySelector('#main-header');
// header.style.borderBottom = ' solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'I love myself'

// let  submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"
// submit.style.backgroundColor ='blue'

// let item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// let lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// // let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// // secondItem.style.backgroundColor = 'green';

// let thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.visibility = 'hidden';

// QUERYSELECTORALL //
// let titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello'

// let secondItem = document.querySelectorAll('.list-group-item:nth-child(2)');
// secondItem.style.color = 'green'


// let odd = document.querySelectorAll('li:nth-child(odd)');
// let even = document.querySelectorAll('li:nth-child(even)');

// for(let i=0; i<odd.length; i++){
//     odd[i].style.backgroundColor = 'green';
    // even[i].style.backgroundColor = '#ccc';
// }


















