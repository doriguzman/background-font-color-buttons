var blue= document.querySelector('#blue')
var pink= document.querySelector('#pink')
var goldenRod= document.querySelector('#goldenrod')
var black= document.querySelector('#black')
var green= document.querySelector('#green')
var red= document.querySelector('#red')




blue.addEventListener('click', function(){
    document.body.style.backgroundColor = "blue"
})

pink.addEventListener('click', function(){
    document.body.style.backgroundColor = "pink"
})
goldenRod.addEventListener('click', function(){
    document.body.style.backgroundColor = "goldenrod"
})
black.addEventListener('click', function(){
    document.body.style.color = "black"
})
green.addEventListener('click', function(){
    document.body.style.color = "green"
})
red.addEventListener('click', function(){
    document.body.style.color = "red"
})