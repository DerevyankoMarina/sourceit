window.onload = function() {

	var btnCalc = document.getElementById('btn-calc');
	var btnClean = document.getElementById('btn-clean');
	var operators = document.getElementById('operators');
	var operator;
	var dictionary = {
		'+' : function(a, b) { return a + b},
		'-' : function(a, b) { return a - b},
		'*' : function(a, b) { return a * b},
		'/' : function(a, b) { return a / b}
	}

	operators.addEventListener('click', function(e) {
		if (e.target && e.target.nodeName == "A") {
			e.preventDefault();

			operator = e.target.getAttribute('href');
		}
	});

	btnCalc.onclick = function() {
		var value1  = document.getElementById('first-value').value;
		var value2  = document.getElementById('second-value').value;
		var result = document.getElementById('result');
		
		result.value = dictionary[operator](+value1, +value2);
	}

	btnClean.onclick = function() {
		var cleanList = document.getElementsByTagName('input');
		for (var i = 0; i < cleanList.length; i++) {
			cleanList[i].value = '';
		};
	}
}


