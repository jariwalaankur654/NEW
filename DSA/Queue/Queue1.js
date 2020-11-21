var arr = new Array();
var	F = -1;
var	R = -1;

var c = document.getElementById("StackCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();

ctx.moveTo(150, 550);

ctx.lineTo(150, 50);
ctx.lineTo(400, 50);
ctx.lineTo(400, 550);

ctx.stroke();

function ENQUEUE()
{
	var size_of_array =  document.getElementById("size").value;

	var list = document.getElementById("enqueue_list").getElementsByTagName("li");
	var list1 = document.getElementById("dequeue_list").getElementsByTagName("li");

	list[0].innerHTML = "var size "+size_of_array;
	list1[0].innerHTML = "var size "+size_of_array;

	if(F == -1)
	{
		F = 0;
	}	
			
	if(R == size_of_array-1)
	{			
		document.getElementById("queue_state").innerHTML = "QUEUE IS FULL";
	}
	else
	{
		document.getElementById("queue_state").innerHTML = "ALL GOOD";
		R++;
		var x = document.getElementById("value").value;
		arr[R] = x;

		var ctx1 = c.getContext("2d");
		ctx1.beginPath();
		ctx1.moveTo(150, 50 + 30*(R+1));
		ctx1.lineTo(400, 50 + 30*(R+1));
		ctx1.strokeStyle = "black";
		ctx1.lineWidth = 1;
		ctx1.stroke();
		ctx.beginPath();
		ctx.font = 14+"px arial";				
		ctx.fillStyle = 'black';
		ctx.fillText(x, 275 , 40 + 30*(R+1));		
	}

	list[4].innerHTML = "var x "+x;

	document.getElementById("valueofR").innerHTML = R;
	document.getElementById("valueofF").innerHTML = F;
}

function DEQUEUE()
{
	var size_of_array =  document.getElementById("size").value;

	var list = document.getElementById("enqueue_list").getElementsByTagName("li");
	var list1 = document.getElementById("dequeue_list").getElementsByTagName("li");

	list[0].innerHTML = "var size "+size_of_array;
	list1[0].innerHTML = "var size "+size_of_array;

	if(F == -1) 
	{			
		document.getElementById("queue_state").innerHTML = "QUEUE IS EMPTY";
	}			
	else
	{
		document.getElementById("queue_state").innerHTML = "ALL GOOD";
		var x = arr[F];
		F++;	
		
		var context = c.getContext('2d');
		context.clearRect(151, 25 + 30*(F),248,30);
		context.stroke();
				
		var div_parent1 = document.getElementById("dequeue_element");
		var div_child1 = document.createElement("DIV");
		div_child1.style.float = "left";
		div_child1.style.padding = "4px";
		div_parent1.appendChild(div_child1);
		div_child1.innerHTML = x;

	}		

	if(F == R+1)
	{
		F = R = -1;
	}	

	document.getElementById("valueofR").innerHTML = R;
	document.getElementById("valueofF").innerHTML = F;
}
