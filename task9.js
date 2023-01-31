var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

var filter = document.getElementById('filter');
// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById('item').value;
    var des = document.getElementById('item2').value;

    // Craete new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(des));

    // Create del button element
    var delBtn = document.createElement('button');

    // Add class to del button
    delBtn.className = 'btn btn-danger btn-sm float-right delete';
    // Append text node
    delBtn.appendChild(document.createTextNode('X'));

    // Append button to list
    li.appendChild(delBtn);
    li.innerHTML += "<button class = 'btn-sm float-right'>Edit</button>";

    // Append li to list
    itemList.appendChild(li);
}
// Remove item

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

var item1 = document.querySelectorAll('li');

item1.forEach(element => {
    element.innerHTML += "<button class = 'btn-sm float-right'>Edit</button>";
});
// console.log(item);

// filter items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get list
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        // console.log(itemName);
        // var itemDes = item.lastChild.textContent;
        // // console.log(itemDes);

        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });
}
// Adding another input node
let inputBox = document.getElementById('item');
// console.log(inputBox);
let html = '<input type="text" class="form-control mr-2" id="item2"></input>'
// Placing the node
inputBox.insertAdjacentHTML("afterend",html);









