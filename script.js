// Declare a string variable
var myFirstName = 'Anthony';
// Output
console.log(myFirstName); // Anthony


// Declare a number variable
let myAge = 35;
//Output
console.log(myAge); // 35


// Declare a boolean variable
let x = 2;
var y = 10;
// Output
console.log(x > y); // false

// Declaring a function and call it

// Addition function
function addition(x, y) {
    return x + y;
}
console.log( addition(10, 20) ); // 30

// Substraction function
function substract(x, y) {
    return x + y;
}
console.log( substract(20, 10) ); // 10

// Division function
function division(x, y) {
    return x / y;
}
console.log( division(16, 2) ); // 8

//  Multiplication function
function mul(x, y) {
    return x + y;
}
console.log( mul(20, 10) ); // 200


// DOM MANIPULATION

// Select elements
const changeTitle = document.getElementById('changeTitle');
const changeBtn = document.getElementById('changeBtn');
const userInput = document.getElementById('userInput');
const showInputBtn = document.getElementById('showInputBtn');
const displayText = document.getElementById('displayText');
const toggleHighlightBtn = document.getElementById('toggleHighlightBtn');

// Change heading title when button is clicked
changeBtn.addEventListener('click', () => {
    changeTitle.textContent = 'I can interact';
});

// Show user input when button is clicked
showInputBtn.addEventListener('click', () => {
    const inputText = userInput.value;
    displayText.textContent = inputText;
    displayText.classList.remove('hidden');
});

// Toggle highlight class on heading when button is clicked
toggleHighlightBtn.addEventListener('click', () => {
    changeTitle.classList.toggle('highlight');
});



const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['red', 'blue', 'yellow', 'green', 'purple', 'orange'],
        datasets: [{
            label: '# of votes',
            data: [10, 7, 5, 3, 1, 2],
            borderwidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})
