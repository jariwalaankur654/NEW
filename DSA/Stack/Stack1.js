var arr = new Array();
var	t = -1;

var c = document.getElementById("StackCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(150, 50);
ctx.lineTo(150, 550);
ctx.lineTo(400, 550);
ctx.lineTo(400, 50);
ctx.stroke();



function PUSH()
{
	var size_of_array =  document.getElementById("size").value;

	var list = document.getElementById("push_list").getElementsByTagName("li");
	var list1 = document.getElementById("pop_list").getElementsByTagName("li");
	list[0].innerHTML = "var size = "+size_of_array;
	list1[0].innerHTML = "var size = "+size_of_array;

	

	if(t == size_of_array-1)
	{				
		document.getElementById("stack_state").innerHTML = "OVERFLOW";
	}
	else
	{
		document.getElementById("stack_state").innerHTML = "ALL GOOD";
		var x = document.getElementById("value").value;
		t = t + 1;
		arr[t] = x;
		var ctx1 = c.getContext("2d");
		ctx1.beginPath();
		ctx1.moveTo(150, 550 - 30*(t+1));
		ctx1.lineTo(400, 550 - 30*(t+1));
		ctx1.strokeStyle = "black";
		ctx1.lineWidth = 1;
		ctx1.stroke();
		ctx.beginPath();
		ctx.font = 14+"px arial";				
		ctx.fillStyle = 'black';
		ctx.fillText(x, 275 , 570 - 30*(t+1));
		document.getElementById("valueoftop").innerHTML = t;	
	}	

	list[3].innerHTML = "var x = "+x;
}

function POP()
{
	var size_of_array =  document.getElementById("size").value;

	var list = document.getElementById("push_list").getElementsByTagName("li");
	var list1 = document.getElementById("pop_list").getElementsByTagName("li");
	list[0].innerHTML = "var size = "+size_of_array;
	list1[0].innerHTML = "var size = "+size_of_array;

	if(t == -1)
	{				
		document.getElementById("stack_state").innerHTML = "UNDERFLOW";
	}
	else
	{				
		document.getElementById("stack_state").innerHTML = "ALL GOOD";
		var x = arr[t];
		t = t - 1;	
		

		var ctx1 = c.getContext("2d");
		ctx1.beginPath();
		ctx1.moveTo(151, 550 - 30*(t+2));
		ctx1.lineTo(399, 550 - 30*(t+2));		
		ctx1.lineWidth = 2;
		ctx1.strokeStyle = "white";
		ctx1.stroke();
		
		var context = c.getContext('2d');
		context.clearRect(151, 549 - 30*(t+2),248,30);
		context.stroke();

		document.getElementById("valueoftop").innerHTML = t;	
		var div_parent1 = document.getElementById("pop_element");
		var div_child1 = document.createElement("DIV");
		div_child1.style.float = "left";
		div_child1.style.padding = "4px";
		div_parent1.appendChild(div_child1);
		div_child1.innerHTML = x;
	}	
}
