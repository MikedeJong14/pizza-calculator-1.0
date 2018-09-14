// variabelen en constanten initialiseren voor de functies om te gebruiken
const PRICESMALL = 500;
const PRICEMEDIUM = 699;
const PRICELARGE = 899;
const TOPPINGCHEESE = 100;
const TOPPINGSAUCE = 100;
const TOPPINGPEPPERONI = 150;
const TOPPINGCHICKEN = 150;
var amountPizza = 0;
var totalTotal = 0;
var checkoutString = '';

// functie die toppings weergeeft en verwerkt
function selectTopping(pizzaSize) {
	document.getElementById('toppings').hidden = false;
	document.getElementById('prices').hidden = true;
	document.getElementById('sizeAndPrice').innerHTML = ('You selected ' + amountPizza + ' ' + pizzaSize + ' pizzas.');
	checkoutString += ('<p>Extra toppings:</p>');
}

// de extra toppings
function addTopping(topping) {
	if (topping == 'cheese') {
		totalTotal += (TOPPINGCHEESE * amountPizza);
		checkoutString += ('Extra cheese +$1.00 * ' + amountPizza + ' pizzas<br>');

	} else if (topping == 'sauce') {
		totalTotal += (TOPPINGSAUCE * amountPizza);
		checkoutString += ('Extra sauce +$1.00 * ' + amountPizza + ' pizzas<br>');

	} else if (topping == 'pepperoni') {
		totalTotal += (TOPPINGPEPPERONI * amountPizza);
		checkoutString += ('Added pepperoni +$1.50 * ' + amountPizza + ' pizzas<br>');

	} else if (topping == 'chicken') {
		totalTotal += (TOPPINGCHICKEN * amountPizza);
		checkoutString += ('Added chicken +$1.50 * ' + amountPizza + ' pizzas<br>');
	}
}

// select een pizza
function selectPizza(size) {		
	amountPizza = prompt('Select the amount of pizzas you want!');
	if (amountPizza) {
		amountPizza = parseInt(amountPizza);
		if (size == 'small') {
			document.getElementById('btnMedium').disabled = true;
			document.getElementById('btnLarge').disabled = true;
			pizzaPrice = PRICESMALL; 

		} else if (size == 'medium') {
			document.getElementById('btnSmall').disabled = true;
			document.getElementById('btnLarge').disabled = true;
			pizzaPrice = PRICEMEDIUM; 

		} else if (size == 'large') {
			document.getElementById('btnSmall').disabled = true;
			document.getElementById('btnMedium').disabled = true;
			pizzaPrice = PRICELARGE; 
		}
		totalTotal += (amountPizza * pizzaPrice);
		checkoutString += ('The amount of ' + size + ' pizzas is ' + amountPizza + ' with a base total of $' + ((amountPizza * pizzaPrice) / 100) + '<br>');
		selectTopping(size); 
	}						
}

// checkout functie geeft totalen en telt alles bij elkaar op
function checkout() {
	totalTotal /= 100;
	document.write(checkoutString);
	document.write("<br>That'll be $" + totalTotal + ", please. :)");
	
}