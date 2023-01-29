var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click',removeItem);

// Add item
function addItem(e){
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById('item').value;

    // Craete new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

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

let item = document.querySelectorAll('li');

item.forEach(element => {
    element.innerHTML += "<button class = 'btn-sm float-right'>Edit</button>";
});
// console.log(item);





