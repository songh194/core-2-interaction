// bring css elements
document.querySelector(.class-name)

// make elements
document.createElement()

// throw it in the html
.appendChild()

// precisely put the element
.insertAdjacentElement()

// make new divs when clicked
var createElementButton = document.querySelector('.create-element-button');
var myContainer = document.querySelector('.container')

createElementButton.addEventListener('click',function(){
    var newDiv = document.createElement('div');
    newDiv.textContent = 'I am a new div';

    myContainer.appendChild(newDiv);
});

