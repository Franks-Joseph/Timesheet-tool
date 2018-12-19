function calculate() {
	var monday = document.getElementById("monday").value;
	var tuesday = document.getElementById("tuesday").value;
	var wednesday = document.getElementById("wednesday").value;
	var thursday = document.getElementById("thursday").value;
	var friday = document.getElementById("friday").value;
	var saturday = document.getElementById("saturday").value;
	var sunday = document.getElementById("sunday").value;

	var result = parseFloat(monday)+parseFloat(tuesday)+parseFloat(wednesday)+parseFloat(thursday)+parseFloat(friday)+parseFloat(saturday)+parseFloat(sunday);

	if (!isNaN(result)) {
		document.getElementById("result").innerHTML = result;
	}

	if (result >= 40) {
		document.getElementById("otresult").innerHTML = result - 40;
	}
}

function submit() {
	return true;
}