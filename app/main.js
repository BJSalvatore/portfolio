


// Replace ./data.json with your JSON feed
fetch('./data.json').then(response => {
  return response.json();
}).then(data => {
  // Work with JSON data here
  console.log(data);
}).catch(err => {
  // Do something for an error here
});



  // var n = localStorage.getItem('on_load_counter');
	//
	// if (n === null) {
	//   n = 0;
	// }
	// n++;
	//
	// localStorage.setItem("on_load_counter", n);
	//
	// nums = n.toString().split('').map(Number);
	// document.getElementById('CounterVisitor').innerHTML = '';
	// for (var i of nums) {
	//   document.getElementById('CounterVisitor').innerHTML += '<span class="counter-item">' + 'Visitors ' + i + '</span>';
	// }
