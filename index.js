import {menuArray} from '/data.js'

const menuDiv = document.getElementById('menu-div')
const orderContainer = document.getElementById('order-container')

let orderArray = []

function getMenuList() {
    let menuList = ''
   menuArray.forEach(function(meal) {
        menuList += `<div class='meals-container' id='${meal}'>
                            <div class='emoji-div'>
                                ${meal.emoji}
                            </div>
                             <div id='meal-info-div' class='meal-info-div'>
                                <p class='name'>${meal.name}</p>
                                <p class='ingredients'>${meal.ingredients}</p>
                                <p class='price'>$${meal.price}</p>
                            </div>
                            <div id='add-btn-${meal.id}' class='add-btn'>
                                <button data-id='${meal.id}'>+</button>
                            </div>
                    </div>`
   })
        menuDiv.innerHTML = menuList
}

function getOrders() {
    let ordersHtml = ''
    ordersHtml          = `<div class="confirmation-container">
                                <p class="order-header" id="order-header">Your order</p>
                                <div class="order-detail-container" id="order-detail-container">
                                    <p class="item" id="item">Pizza Placeholder</p>
                                    <p class="remove-btn" id="remove-btn">remove</p>
                                    <p class="order-price" id="order-price">$money</p>
                                </div>
                               
                            </div>`
    
    orderContainer.innerHTML = ordersHtml
}

function render() {
    getMenuList()
    getOrders()
}

render()

document.addEventListener('click', function(e) {
    if (e.target.dataset.id) {
        addItem(e.target.dataset.id, orderArray)
}
}

)

function addItem(mealId, orderArray) {
    const targetMeal = menuArray.filter(function(meal) {
        return meal.id === mealId
    })
    console.log(targetMeal)
    }
    // orderArray.push({
    //     name: `${menuArray.id}`,
    //     price: 12,
    //     quantity: 1}
    // )
    
  
      