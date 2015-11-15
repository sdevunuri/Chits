function calculate(){

	var tm = document.getElementById("tm").value;
	var nop = document.getElementById("nop").value;
	var cp = document.getElementById("cp").value;
    var ca = document.getElementById("ca").value;
	var ir = document.getElementById("ir").value;
	var lm = document.getElementById("lm").value;
	

	var table = document.getElementById("table");
	
	for(i = 0; i < tm; i++){
	
		var month = new Object();
		var interest = ((ca / 100) * ir * i);	
		month.month = i + 1;
		if(lm < (i+1)){
			month.memberShouldPay = (ca / nop) + ((ca / 100) * ir);
		}else{
			month.memberShouldPay = (ca / nop);
		}
		
		month.totalCollected = ((ca / nop) * nop) + interest ;
		month.numberOfMonthsLeft = tm - i - 1;
		month.liftAmount = (ca - ((ca * cp) / 100)) + interest;  
		
		var row = table.insertRow(i+1);

		row.insertCell(0).innerHTML = month.month;
        row.insertCell(1).innerHTML = month.memberShouldPay;
        row.insertCell(2).innerHTML = month.totalCollected;
		row.insertCell(3).innerHTML = month.liftAmount;
        row.insertCell(4).innerHTML = month.numberOfMonthsLeft;
 
	}
}


function calculateFormula2(){
	
	var tm = document.getElementById("tm").value;
	var nop = document.getElementById("nop").value;
	var cp = document.getElementById("cp").value;
    var ca = document.getElementById("ca").value;
	var aa = document.getElementById("aa").value;
	
	var table = document.getElementById("table");
	
	var month = new Object();
	var totalAmount = ca - aa + ((ca * cp) / 100);
	var memberShouldPay = totalAmount / nop;
	
	var row = table.insertRow(1);
	
	row.insertCell(0).innerHTML = memberShouldPay;
    row.insertCell(1).innerHTML = totalAmount;
 
}

