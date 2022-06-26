const addToCartBtn = document.getElementsByClassName('btn')
const removeBtn = document.getElementsByClassName("btn-danger");

for (let i=0; i<addToCartBtn.length; i++){
    let addBtn = addToCartBtn[i]
    addBtn.addEventListener('click', addToCart)
}

function addToCart (event){
    const item = event.target.parentElement.parentElement.parentElement
    const itemArr = item.innerText.split(/\r?\n/);
    const itemName = itemArr[0]
    const itemPrice = itemArr[1]
    let table = document.getElementById("table")
    const tr = document.createElement("tr")    
    tr.innerHTML = `<td scope="row">${itemName}</td><td class="item-price">${itemPrice}</td> <td><button type="button" class="btn btn-danger">Remove</button></td>`;
    table.appendChild(tr)

    for (let i = 0; i < removeBtn.length; i++) {
    let rmvBtn = removeBtn[i];
    rmvBtn.addEventListener("click", removeItem);
    }

    cartTotal()
}

function removeItem (event) {
    const item =  event.target.parentElement.parentElement
    item.innerHTML = ""
    cartTotal()
}

function cartTotal(){
    if (removeBtn.length >= 1) {
      let total = document.getElementById("total");
      const td = document.createElement("td");
      const price = document.getElementsByClassName("item-price");
      let totalPrice=0;  
      for (let i = 0; i < price.length; i++) {
        let priceNumber = parseFloat(price[i].innerText.replace("$", ""));
        totalPrice += priceNumber
        td.innerHTML = `<td><b>Total:  &nbsp;  &nbsp;  &nbsp;  &nbsp; $${totalPrice.toFixed(
          2
        )}</b></td>`;
      }      
      total.lastChild.replaceWith(td);
    }
    else total.lastChild.replaceWith("")

}

