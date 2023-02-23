localStorage.clear()

import {menuArray} from '/data.js'

const menuDiv = document.getElementById('menu-div')
const orderContainer = document.getElementById('order-container')
const orderMaster = document.getElementById('order-master')
const priceValue = document.getElementById('price-value')
const paymentModal = document.getElementById('payment-modal')
const paymentBtn = document.getElementById('payment-btn')
const thankYou = document.getElementById('thank-you')
const customerName = document.getElementById('customer-name').value

let orderArray = []
let orderValue = 0

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
    for (let i = 0; i < orderArray.length; i++) {
        ordersHtml          += `<div class="confirmation-container">
                                    <div class="order-detail-container" id="order-detail-container">
                                        <p class="item" id="item">${orderArray[i].name}</p>
                                        <p class="remove-btn" data-delete='${orderArray[i].id}' id="remove-btn">remove</p>
                                        <p class="order-price" id="order-price">$${orderArray[i].price}</p>
                                    </div>
                                </div>`
        
    }
orderContainer.innerHTML = ordersHtml
}

document.addEventListener('click', function(e) {
    if (e.target.dataset.id) {
        addItem(e.target.dataset.id, orderArray)
    } else if (e.target.dataset.delete) {
            removeItem(e.target.dataset.delete, orderArray)    
            if (orderArray.length == 0) {
                orderMaster.classList.add('hidden')
            }
    } else if (e.target.id === 'confirm-btn'){
        paymentModal.classList.remove('hidden')
    } else if (e.target.id === 'payment-btn') {
        paymentModal.classList.add('hidden')
        orderMaster.classList.add('hidden')
        thankYou.innerHTML = `Thanks, ${customerName}! Your order is on it's way!`
        thankYou.classList.remove('hidden')
    }
})

    // Adding items to the order
function addItem(mealId, orderArray) {
    const targetMeal = menuArray.filter(function(meal) {
        return meal.id == mealId
    })
    orderArray.push(targetMeal[0])
    if (orderArray.length > 0) {
        orderMaster.classList.remove('hidden')  
    }
    render() 
    getPrice()

}

    //Removing items from an order
function removeItem(arrayId, orderArray) {
    if (orderArray.length > 1) {
        orderArray.splice(arrayId,1)
    } else {
        orderArray.pop()
    }
    render()
    getPrice()
}

    //Gets the total value of the order
function getPrice()  {     
    const totalCostArray = []
    for (let i=0; i <orderArray.length; i++) {
        totalCostArray.push(orderArray[i].price)
        orderValue = totalCostArray.reduce(function(total, cost) {
            return total + cost
        })
    }
    priceValue.innerHTML = '$' + orderValue
}

function render() {
    getMenuList()
    getOrders()
}

render()


      