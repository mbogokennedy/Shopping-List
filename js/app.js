// WOrking With DOM by Kennedy Mbogo
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// form submit event

form.addEventListener('submit', addItem);
// delete event
itemList.addEventListener('click', removeItem);
// filter event
filter.addEventListener('keyup', filterItem);
// add item

function addItem(e) {
    e.preventDefault();

    // Get input value
    var shoppingItem = document.getElementById('shoppingItem').value;
    var category = document.getElementById('category').value;

    // create Li newitem

    var li = document.createElement('li');
    var li2 = document.createElement('li');
    // Add Class
    li.className = 'list-group-item';
    li2.className = 'list-group-item';
    // add a text node with input value
    li.appendChild(document.createTextNode(shoppingItem));
    li2.appendChild(document.createTextNode(category));
    // add del
    var deleteBtn = document.createElement('button');

    // class to button
    deleteBtn.className = 'mt-2 btn btn-danger btn-sm float-right delete';
    // append btn text node 
    deleteBtn.appendChild(document.createTextNode('X'));
    // append button to li
    // append li to list

    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');

    td.appendChild(li);
    td1.appendChild(li2);
    td2.appendChild(deleteBtn)

    tr.appendChild(td);
    tr.appendChild(td1);
    tr.appendChild(td2);

    itemList.appendChild(tr);
}


function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this Item?')) {
            var tr = e.target.parentElement.parentElement;
            itemList.removeChild(tr);
        }
    }

}

// Filter Iterm

function filterItem(e) {
    // convert to lowercase
    var text = e.target.value.toLowerCase();
    // get lis

    var items = itemList.querySelectorAll('.list-group-item');

    // convert to an array
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.visibility = 'visible';
        } else {
            item.style.visibility = 'hidden';
        }
    })
}