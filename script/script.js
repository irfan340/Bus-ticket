function makeGreen() {
    document.getElementById('A1').style.backgroundColor = '#1DD100'
}
function priceShow(event) {
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
    document.getElementById('sum').innerText = total
    console.log(total)
    let number = parseInt(document.getElementById('number').value)
    console.log(typeof number)
    if (parseInt(total)> 0 && number > 0) {
        document.getElementById('next').removeAttribute('disabled')
    }
    else {
        document.getElementById('next').setAttribute('disabled', true)
        console.log('hi')
    }
}

document.getElementById('number').addEventListener('keydown', function (event) {
    let number = event.target.value.length
    let total = parseInt(document.getElementById('sum').innerText)
    console.log(typeof total)
    if (number >= 0 && total > 0) {
        document.getElementById('next').removeAttribute('disabled')
    }
    else {
        document.getElementById('next').setAttribute('disabled', true)
    }
})
// document.getElementById('A1').addEventListener('click',function(){
//     {
//         let container = document.createElement('div')
//         document.getElementById('price-show').appendChild(container)
//         container.setAttribute('class', 'flex justify-between')
    
//         let seatElement = document.createElement('p')
//         seatElement.innerText = event
//         container.appendChild(seatElement)
//         let classElement = document.createElement('p')
//         classElement.innerText = 'Economy'
//         container.appendChild(classElement)
//         let priceElement = document.createElement('p')
//         priceElement.innerText = 550
//         priceElement.setAttribute('class', 'prices')
//         container.appendChild(priceElement)
//         console.log(document.getElementById('price-show').innerHTML)
//         // total
//         let prices = document.getElementsByClassName('prices')
//         let total = 0
//         for (let price of prices) {
//             amount = parseInt(price.innerText)
//             total = total + amount
//         }
//         document.getElementById('sum').innerText = total
//         console.log(total)
//         let number = parseInt(document.getElementById('number').value)
//         console.log(typeof number)
//         if (parseInt(total)> 0 && number > 0) {
//             document.getElementById('next').removeAttribute('disabled')
//         }
//         else {
//             document.getElementById('next').setAttribute('disabled', true)
//             console.log('hi')
//         }
//     }
// })
// document.getElementById('A1').addEventListener('click',function(event){
//     let number=document.getElementById('number').target.value.length
//     console.log(number)
//     // let total=parseInt(document.getElementById('sum').innerText)
//     // console.log(typeof total)
//     // if(number>=0 && total>0){
//     //     document.getElementById('next').removeAttribute('disabled')
//     // }
//     // else{
//     //     document.getElementById('next').setAttribute('disabled',true)
//     // }
// })
