// Selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
var number = 0;
var span = document.querySelector('demo');
var food = document.querySelector('hunger');
var love = document.querySelector('happiness');

const confetti = document.querySelector('.confetti');

const apple = document.querySelector('.apple');
const carrot = document.querySelector('.carrot');
const icecream = document.querySelector('.icecream');
const pizza = document.querySelector('.pizza');
const burger = document.querySelector('.burger');
const cookie = document.querySelector('.cookie');
const candy = document.querySelector('.candy');

var hunger = 70;
var happiness = 90;

setInterval(hungerBar, 22000)
document.getElementById("hunger").innerHTML = hunger;

function hungerBar() {
document.getElementById("hunger").innerHTML = hunger;
    if (hunger > 0) {
        hunger -=1;
    } else {
        hunger = 0;
    }
}


setInterval(happinessBar, 18000)
document.getElementById("happiness").innerHTML = happiness;

function happinessBar() {
document.getElementById("happiness").innerHTML = happiness;
    if (happiness > 0) {
        happiness -=1;
    } else {
        happiness = 0;
    }
}


// Event Listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener("click", deleteCheck);

confetti.addEventListener('click', () => {
	if (happiness < 100) {
		happiness.textContent = happiness += 2;
	}
	document.getElementById("happiness").innerHTML = happiness;
    })

apple.addEventListener('click', () => {
	if (hunger < 100 && number > 0) {
		demo.textContent = number -= 2; 
		hunger.textContent = hunger += 5;
	}
	document.getElementById("demo").innerHTML = number;
	document.getElementById("hunger").innerHTML = hunger;
    })

carrot.addEventListener('click', () => {
	if (hunger < 100 && number > 0) {
		demo.textContent = number -= 5;
		hunger.textContent = hunger += 10;
	}
	document.getElementById("demo").innerHTML = number;
	document.getElementById("hunger").innerHTML = hunger;
    })

icecream.addEventListener('click', () => {
	if (hunger < 100 && number > 0) {
		demo.textContent = number -= 8;
		hunger.textContent = hunger += 15;
	}
	document.getElementById("demo").innerHTML = number;
	document.getElementById("hunger").innerHTML = hunger;
    })

pizza.addEventListener('click', () => {
	if (hunger < 100 && number > 0) {
		demo.textContent = number -= 10;
		hunger.textContent = hunger += 20;
	}
	document.getElementById("demo").innerHTML = number;
	document.getElementById("hunger").innerHTML = hunger;
    })

burger.addEventListener('click', () => {
	if (hunger < 100 && number > 0) {
		demo.textContent = number -= 15;
		hunger.textContent = hunger += 25;
	}
	document.getElementById("demo").innerHTML = number;
	document.getElementById("hunger").innerHTML = hunger;
    })

cookie.addEventListener('click', () => {
	if (hunger < 100 && number > 0) {
		demo.textContent = number -= 20;
		hunger.textContent = hunger += 30;
	}
	document.getElementById("demo").innerHTML = number;
	document.getElementById("hunger").innerHTML = hunger;
    })

candy.addEventListener('click', () => {
	if (hunger < 100 && number > 0) {
		demo.textContent = number -= 25;
		hunger.textContent = hunger += 35;
	}
	document.getElementById("demo").innerHTML = number;
	document.getElementById("hunger").innerHTML = hunger;
    })


// Functions
function addTodo(event) {
    event.preventDefault();

    // Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    // CHECK MARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"> </i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // TRASH BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"> </i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // APPEND TO LIST
    todoList.appendChild(todoDiv);

    // Clear Todo Input value
    todoInput.value = "";

}



function deleteCheck(e) {
    const item = e.target;

    // DELETE TODO
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        // Animation
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function () {
            todo.remove();
        });
    }

    // Checkmark
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
		demo.textContent = number += 5;
		document.getElementById("demo").innerHTML = number;

    }
}




