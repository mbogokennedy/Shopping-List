// WOrking With DOM by Kennedy Mbogo
var form = document.getElementById('addForm');
var filter = document.getElementById('filter');


form.addEventListener('submit', saveItem);
submitBtn = document.querySelector('#submitBtn');

submitBtn.disabled = true;
//Restrict individual from submiting an empty form
document.getElementById('shoppingItem').onkeyup = () => {
    if (document.getElementById('shoppingItem').value.length > 0) {
        submitBtn.disabled = false
    } else {
        submitBtn.disabled = true
    };

};

//save item to the local storage
function saveItem(e) {
    e.preventDefault();
    var shoppingItem = document.getElementById('shoppingItem').value;
    var category = document.getElementById('category').value;
    var amount = document.getElementById('amount').value;
    var itemList = { "shoppingItem": shoppingItem, "category": category, "amount": amount };
    if (!localStorage.getItem('itemListBucket')) {
        var itemContainer = [];
        itemContainer.push(itemList);
        localStorage.setItem('itemListBucket', JSON.stringify(itemContainer));
    } else {
        var itemContainer = JSON.parse(localStorage.getItem("itemListBucket"));
        itemContainer.push(itemList);
        localStorage.setItem("itemListBucket", JSON.stringify(itemContainer));
    }
    document.getElementById('shoppingItem').value = "";
    document.getElementById('category').value = "default";
    document.getElementById('amount').value = "";

    fetchItems();
};
//remove item froma storage
function removeItem(shoppingItem) {
    if (confirm('Are you sure you want to delete this Item?')) {
        var itemContainer = JSON.parse(localStorage.getItem('itemListBucket'));
        for (var i = 0; i < itemContainer.length; i++) {
            if (itemContainer[i].shoppingItem == shoppingItem) {
                itemContainer.splice(i, 1);
            }
        }
    }

    localStorage.setItem("itemListBucket", JSON.stringify(itemContainer));

    fetchItems();
}
//fetch item from a local storage
function fetchItems() {
    var itemContainer = JSON.parse(localStorage.getItem('itemListBucket'));
    var itemListContainer = document.getElementById('items');
    itemListContainer.innerHTML = '';
    for (var i = 0; i < itemContainer.length; i++) {
        var shoppingItem = itemContainer[i].shoppingItem;
        var category = itemContainer[i].category;
        var amount = itemContainer[i].amount;
        itemListContainer.innerHTML += '<tr>' +
            '<td>' + shoppingItem + '</td>' +
            '<td>' + category + '</td>' +
            '<td>' + amount + '</td>' +
            '<td>' + ' <a onclick="removeItem(\'' + shoppingItem + '\')" class="btn btn-md btn-danger float-right" href="#">Delete</a> ' + '</td>' +
            '</tr>';
    }
};

fetchItems()

// Filter Item from the Local stotrage

filter.onkeyup = function filterItem(e) {
    var text = e.target.value.toLowerCase();

    var itemContainer = JSON.parse(localStorage.getItem('itemListBucket'));

    var itemListContainer = document.getElementById('items');

    itemListContainer.innerHTML = '';

    Array.from(itemContainer).forEach(function(item) {
        var itemName = item.shoppingItem;

        if (itemName.toLowerCase().indexOf(text) != -1) {
            itemListContainer.innerHTML += '<tr>' +
                '<td>' + item.shoppingItem + '</td>' +
                '<td>' + item.category + '</td>' +
                '<td>' + item.amount + '</td>' +
                '<td>' + ' <a onclick="removeItem(\'' + shoppingItem + '\')" class="btn btn-md btn-danger float-right" href="#">Delete</a> ' + '</td>' +
                '</tr>';
        }
    })
}