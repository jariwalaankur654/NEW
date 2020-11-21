var arr = new Array();
var	F = -1;
var	R = -1;

function createCircle(){

	var size_of_array =  document.getElementById("size").value;

	var c = document.getElementById("StackCanvas");
	var ctx = c.getContext("2d");
	
	ctx.clearRect(0,0,549,600);

	ctx.beginPath();
	ctx.arc(275,300,240,0,2*Math.PI);
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(275,300,190,0,2*Math.PI);
	ctx.stroke();

	var angle1 = 2*Math.PI/size_of_array;

	for(var i=0;i<size_of_array; i++)
	{
		var angle = angle1*(i+1);
		ctx.beginPath();
		ctx.moveTo(275 + 190*Math.cos(angle), 300 + 190*Math.sin(angle));
		ctx.lineTo(275 + 240*Math.cos(angle), 300 + 240*Math.sin(angle));
		ctx.stroke();
	}
}

function ENQUEUE()
{
	var size_of_array =  document.getElementById("size").value;

	var list = document.getElementById("enqueue_list").getElementsByTagName("li");
	var list1 = document.getElementById("dequeue_list").getElementsByTagName("li");

	list[0].innerHTML = "var size "+size_of_array;
	list1[0].innerHTML = "var size "+size_of_array;
						
	if((R == size_of_array-1 && F == 0) || (R == (F-1)%(size_of_array-1)))
	{				
		document.getElementById("queue_state").innerHTML = "QUEUE IS FULL";
	}
	else
	{
		if(F == -1)
		{
			document.getElementById("queue_state").innerHTML = "ALL GOOD";
			F = R =  0;
			var x = document.getElementById("value").value;
			arr[R] = x;
		}
		else if(R == size_of_array-1 && F != 0)
		{
			document.getElementById("queue_state").innerHTML = "ALL GOOD";
			R = 0;
			var x = document.getElementById("value").value;
			arr[R] = x;
		}
		else
		{
			document.getElementById("queue_state").innerHTML = "ALL GOOD";
			R++;
			var x = document.getElementById("value").value;
			arr[R] = x;
		}

		var angle = 2*Math.PI/size_of_array;
		var c1 = document.getElementById("StackCanvas");
		var ctx = c1.getContext("2d");
		ctx.beginPath();
		ctx.font = 14+"px arial";				
		ctx.fillStyle = 'black';
		ctx.fillText(x, 275 + 210*Math.cos(angle*(R+1)-angle/2), 300 + 210*Math.sin(angle*(R+1)-angle/2));		
	}
	
	list[4].innerHTML = "var x ="+x;

	document.getElementById("valueofR").innerHTML = R;
	document.getElementById("valueofF").innerHTML = F;
}

function DEQUEUE()
{
	var size_of_array =  document.getElementById("size").value;

	var size_of_array =  document.getElementById("size").value;

	var list = document.getElementById("enqueue_list").getElementsByTagName("li");
	var list1 = document.getElementById("dequeue_list").getElementsByTagName("li");
			
	if(F == -1) 
	{			
		document.getElementById("queue_state").innerHTML = "QUEUE IS EMPTY";
	}			
	else
	{
		document.getElementById("queue_state").innerHTML = "ALL GOOD";
		var x = arr[F];
		
		var div_parent1 = document.getElementById("dequeue_element");
		var div_child1 = document.createElement("DIV");
		div_child1.style.float = "left";
		div_child1.style.padding = "4px";
		div_parent1.appendChild(div_child1);
		div_child1.innerHTML = x;			

		var angle = 2*Math.PI/size_of_array;
		angle = angle*(F+1)-angle/2;
		var c1 = document.getElementById("StackCanvas");
		var ctx = c1.getContext("2d");
		ctx.beginPath();
		ctx.clearRect(270 + 210*Math.cos(angle), 290 + 210*Math.sin(angle) , 20 ,20);


	}		

	if(F == R)
	{
		F = R = -1;
	}
	else if(F == size_of_array-1)
	{
		F = 0;
	}
	else
	{
		F++;
	}

	document.getElementById("valueofR").innerHTML = R;
	document.getElementById("valueofF").innerHTML = F;

}
