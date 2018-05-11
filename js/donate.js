console.log('donate JS file edit')


// add a click event to the donate button
document.getElementById('js-submit').addEventListener('click', function(){
	// get the value of a text input
	var value = document.getElementById('js-amount').value;
	alert('Thanks for donating: $' + value)
})
// get value of #js-shop <select>
// get value of #js-amount <input>

// update DOM with 'Thanks for donating #js-amount.value to #js-shop.value'
