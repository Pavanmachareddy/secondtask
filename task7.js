var itemList = document.querySelector("#items");
//parentNode
 console.log(itemList.parentElement);
//  parentNode = document.getElementById('items');
//  parentNode.appendfirstChild('Hello');
//  parentNode.innerHTML = 

//child Element
console.log(itemList.childElementCount);
// console.log(itemList.lastelementchild);
// console.log(itemList.lastchild);
//Now go head and add HEllo word before Item 1
 console.log(itemList.firstChild);
 itemList.firstChild.textContent = "Hello word";


 console.log(itemList.firstElementChild);
 itemList.firstElementChild.textContent = "Hello word";

//childNodes
//console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "yellow";

//lastchild
console.log(itemList.lastElementChild);
 itemList.lastElementChild.textContent = "Hello 4";

 //nextsibling
 console.log(itemList.nextSibling);
 //nextElementSibling
 console.log(itemList.nextElementSibling);
 //previousSibling
 console.log(itemList.previousSibling);
 //previousElementSibling
 console.log(itemList.previousElementSibling);
 itemList.previousElementSibling.style.color = 'green';

//creatElement

//Create a div
var newDiv = document.createElement('div');

//Add Class
newDiv.className = 'hello';

//Add Id
newDiv.id = 'hello1';


//Add Attribute
newDiv.setAttribute('title','Hello Div');

//Create text node
//2Now go head and add HEllo word before Item Lister
var newDivText = document.createTextNode('Hello');

//Add text to div
newDiv.appendChild(newDivText);

var container =document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);
container.insertBefore(newDiv, h1);








