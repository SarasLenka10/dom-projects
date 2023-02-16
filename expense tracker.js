function addExpense(event){
    event.preventDefault();
    const amount = event.target.expenseamount.value;
    const description = event.target.expenseDes.value;
    const category = document.getElementById('category').value;

    let obj = {
        amount : document.getElementById('amount').value,
        description : document.getElementById('description').value,
        category : document.getElementById('category').value,
    }
// kais ehoga wahi to puch rhi hu

    let expenseItem = JSON.stringify(obj);
    localStorage.setItem(`${obj.description}-${obj.amount}`,expenseItem);
    const ul = document.getElementById('list');
    ul.innerHTML += `<li>${obj.amount} , ${obj.description} - ${obj.category}<button onclick="deleteList(event,'${obj.description}','${obj.amount}')">Delete Expense</button> <button onclick="editList(event,'${obj.amount}','${obj.description}','${obj.category}')">Edit Expense</button></li>`
}
function deleteList(event,des){
    event.target.parentNode.remove(des);
    localStorage.removeItem(des);
}
function editList(event,amt,desp,category){
    deleteList(event,desp);
    document.getElementById('amount').value = amt;
    document.getElementById('description').value = desp;
    document.getElementById('category').value = category;
}
