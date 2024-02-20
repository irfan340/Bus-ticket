function makeGreen() {
    document.getElementById('A1').style.backgroundColor = '#1DD100'
}
function priceShow(event) {
    document.getElementById(event).setAttribute('disabled',true)
    document.getElementById(event).style.backgroundColor = '#1DD100'
    let container = document.createElement('div')
    document.getElementById('price-show').appendChild(container)
    container.setAttribute('class', 'flex justify-between')

    let seatElement = document.createElement('p')
    seatElement.innerText = event
    container.appendChild(seatElement)
    let classElement = document.createElement('p')
    classElement.innerText = 'Economy'
    container.appendChild(classElement)
    let priceElement = document.createElement('p')
    priceElement.innerText = 550
    priceElement.setAttribute('class', 'prices')
    container.appendChild(priceElement)
    console.log(document.getElementById('price-show').innerHTML)
    // total
    let prices = document.getElementsByClassName('prices')
    let total = 0
    for (let price of prices) {
        amount = parseInt(price.innerText)
        total = total + amount
    }
    // selected seat
    let seatSelected=parseInt(total)/550
    console.log(seatSelected)
    document.getElementById('selected-seat').innerText=seatSelected
    // seat left
    seatLeft=40-seatSelected
    document.getElementById('seat-left').innerText=seatLeft
    // enable next button
    document.getElementById('sum').innerText = total
    console.log(total)
    let numbers = parseInt(document.getElementById('number').value)
    console.log(numbers)
    if (parseInt(total) > 0 && numbers > 0 ) {
        document.getElementById('next').removeAttribute('disabled')
    }
    else {
        document.getElementById('next').setAttribute('disabled', true)
        console.log('hi')
    }
    // enable coupon
    if(parseInt(total)>2000){
        document.getElementById('coupon-apply').removeAttribute('disabled')
    }
    // stop black-market
    if(parseInt(total)==2200){
        let black= document.querySelectorAll('li')
        for(let i=0; i<black.length;i++){
            black[i].setAttribute('disabled',true)
        }
    }
}
// console.log(parseInt(document.getElementById('sum').innerText))
// enable key
document.getElementById('number').addEventListener('keyup', function () {
    let numbers = document.getElementById('number').value
    let numberLength = numbers.length
    let total = parseInt(document.getElementById('sum').innerText)
    console.log(typeof numberLength)
    if (numberLength > 0 && total > 0 ) {
        document.getElementById('next').removeAttribute('disabled')
    }
    else {
        document.getElementById('next').setAttribute('disabled', true)
        console.log('nope')
    }
})
// discount
document.getElementById('token').addEventListener('keyup',function(){
    let token=document.getElementById('token').value
    let total=parseInt(document.getElementById('sum').innerText)
    let percentage=0
    if(token=='New15' && total>2000){
        percentage=document.getElementById('percent')
        percentage.innerText=total*(0.15)
        document.getElementById('discount').innerText='15%'
    }
    else if(token=='Couple 20' && total>2000){
        percentage=document.getElementById('percent')
        percentage.innerText=total*(0.2)
        document.getElementById('discount').innerText='20%'
    }
})
// Grand total
document.getElementById('coupon-apply').addEventListener('click',function(){
    let token=document.getElementById('token').value
    let total=parseInt(document.getElementById('sum').innerText)
    let percentage=parseInt(document.getElementById('percent').innerText)
    let grandTotal=total-percentage
    document.getElementById('grand-total').innerText=grandTotal
})
// successful
document.getElementById('next').addEventListener('click',function(){
    document.getElementById('continue').removeAttribute('hidden')
    document.getElementById('main').setAttribute('hidden',true)
    document.getElementById('footer').setAttribute('hidden',true)
})
