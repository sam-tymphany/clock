	var setTime,sign;
	var WINDOW_WIDTH = 600;
	var WINDOW_HEIGHT = 600;
	var currentDate = [];
	var totalNum;
	var u=0.65; //碰撞能量损耗系数
	var RADIUS = 7; //球半径
	var balls = []; //存储彩色的小球
	const colors = ["#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","#CC0000"]; //彩色小球的颜色
		var digit =
                [
                    [
                        [0,0,1,1,1,0,0],
                        [0,1,1,0,1,1,0],
                        [1,1,0,0,0,1,1],
                        [1,1,0,0,0,1,1],
                        [1,1,0,0,0,1,1],
                        [1,1,0,0,0,1,1],
                        [1,1,0,0,0,1,1],
                        [1,1,0,0,0,1,1],
                        [0,1,1,0,1,1,0],
                        [0,0,1,1,1,0,0]
                    ],//0
                    [
                        [0,0,0,1,1,0,0],
                        [0,1,1,1,1,0,0],
                        [0,0,0,1,1,0,0],
                        [0,0,0,1,1,0,0],
                        [0,0,0,1,1,0,0],
                        [0,0,0,1,1,0,0],
                        [0,0,0,1,1,0,0],
                        [0,0,0,1,1,0,0],
                        [0,0,0,1,1,0,0],
                        [1,1,1,1,1,1,1]
                    ],//1
                    [
                        [0,1,1,1,1,1,0],
                        [1,1,0,0,0,1,1],
                        [0,0,0,0,0,1,1],
                        [0,0,0,0,1,1,0],
                        [0,0,0,1,1,0,0],
                        [0,0,1,1,0,0,0],
                        [0,1,1,0,0,0,0],
                        [1,1,0,0,0,0,0],
                        [1,1,0,0,0,1,1],
                        [1,1,1,1,1,1,1]
                    ],//2
                    [
                        [1,1,1,1,1,1,1],
                        [0,0,0,0,0,1,1],
                        [0,0,0,0,1,1,0],
                        [0,0,0,1,1,0,0],
                        [0,0,1,1,1,0,0],
                        [0,0,0,0,1,1,0],
                        [0,0,0,0,0,1,1],
                        [0,0,0,0,0,1,1],
                        [1,1,0,0,0,1,1],
                        [0,1,1,1,1,1,0]
                    ],//3
                    [
                        [0,0,0,0,1,1,0],
                        [0,0,0,1,1,1,0],
                        [0,0,1,1,1,1,0],
                        [0,1,1,0,1,1,0],
                        [1,1,0,0,1,1,0],
                        [1,1,1,1,1,1,1],
                        [0,0,0,0,1,1,0],
                        [0,0,0,0,1,1,0],
                        [0,0,0,0,1,1,0],
                        [0,0,0,1,1,1,1]
                    ],//4
                    [
                        [1,1,1,1,1,1,1],
                        [1,1,0,0,0,0,0],
                        [1,1,0,0,0,0,0],
                        [1,1,1,1,1,1,0],
                        [0,0,0,0,0,1,1],
                        [0,0,0,0,0,1,1],
                        [0,0,0,0,0,1,1],
                        [0,0,0,0,0,1,1],
                        [1,1,0,0,0,1,1],
                        [0,1,1,1,1,1,0]
                    ],//5
                    [
                        [0,0,0,0,1,1,0],
                        [0,0,1,1,0,0,0],
                        [0,1,1,0,0,0,0],
                        [1,1,0,0,0,0,0],
                        [1,1,0,1,1,1,0],
                        [1,1,0,0,0,1,1],
                        [1,1,0,0,0,1,1],
                        [1,1,0,0,0,1,1],
                        [1,1,0,0,0,1,1],
                        [0,1,1,1,1,1,0]
                    ],//6
                    [
                        [1,1,1,1,1,1,1],
                        [1,1,0,0,0,1,1],
                        [0,0,0,0,1,1,0],
                        [0,0,0,0,1,1,0],
                        [0,0,0,1,1,0,0],
                        [0,0,0,1,1,0,0],
                        [0,0,1,1,0,0,0],
                        [0,0,1,1,0,0,0],
                        [0,0,1,1,0,0,0],
                        [0,0,1,1,0,0,0]
                    ],//7
                    [
                        [0,1,1,1,1,1,0],
                        [1,1,0,0,0,1,1],
                        [1,1,0,0,0,1,1],
                        [1,1,0,0,0,1,1],
                        [0,1,1,1,1,1,0],
                        [1,1,0,0,0,1,1],
                        [1,1,0,0,0,1,1],
                        [1,1,0,0,0,1,1],
                        [1,1,0,0,0,1,1],
                        [0,1,1,1,1,1,0]
                    ],//8
                    [
                        [0,1,1,1,1,1,0],
                        [1,1,0,0,0,1,1],
                        [1,1,0,0,0,1,1],
                        [1,1,0,0,0,1,1],
                        [0,1,1,1,0,1,1],
                        [0,0,0,0,0,1,1],
                        [0,0,0,0,0,1,1],
                        [0,0,0,0,1,1,0],
                        [0,0,0,1,1,0,0],
                        [0,1,1,0,0,0,0]
                    ],//9
                    [
                        [0,0,0,0],
                        [0,0,0,0],
                        [0,1,1,0],
                        [0,1,1,0],
                        [0,0,0,0],
                        [0,0,0,0],
                        [0,1,1,0],
                        [0,1,1,0],
                        [0,0,0,0],
                        [0,0,0,0]
                    ]//:
                ];

function drawTime(cfield){
	var setDate = [];
	var offsetX = 70,offsetY = 30;
	cfield.fillStyle="#005fac";
	var minute1 = Math.floor(setTime/20/600);    //分钟的十位，除以20是因为setDate每0.05s减1
	var minute2 = Math.floor(setTime/20/60%10);
	var second1 = Math.floor(setTime/20%60/10);
	var second2 = Math.floor(setTime/20%60%10);
	setDate.push({date: minute1});
	setDate.push({date: minute2});
	setDate.push({date: 10});
	setDate.push({date: second1});
	setDate.push({date: second2});
	for(var x = 0;x < setDate.length; x++){
		setDate[x].offsetX = offsetX;
		offsetX = drawSingleNumber(offsetX,offsetY, setDate[x].date,cfield);
	}

	if(currentDate.length == 0){
		currentDate = setDate;
	}else{
		for(var x = 0;x < setDate.length; x++){
			if(currentDate[x].date != setDate[x].date){
				addBalls(setDate[x]);
				currentDate[x].date = setDate[x].date;
			}
		}
	}

	renderBalls(cfield);
	updateBalls();
	drawBottle(cfield, setTime);
}

function drawSingleNumber(offsetX, offsetY, num, cfield){
	var numMatrix = digit[num];
	for(var y = 0;y<numMatrix.length;y++){
		for(var x = 0;x<numMatrix[y].length;x++){
			if(numMatrix[y][x]==1){
				cfield.beginPath();
				cfield.arc(offsetX+RADIUS+RADIUS*2*x,offsetY+RADIUS+RADIUS*2*y,RADIUS,0,2.0*Math.PI);
				cfield.fill();
			}
		}
	}
	cfield.beginPath();
	offsetX += numMatrix[0].length*RADIUS*2;
	return offsetX;
}

function addBalls(item) {
	var num = item.date;
	var numMatrix = digit[num];
	for(var y = 0;y<numMatrix.length;y++){
		for(var x = 0;x<numMatrix[y].length;x++){
			if(numMatrix[y][x]==1){
				var ball={
					offsetX:item.offsetX+RADIUS+RADIUS*2*x,
					offsetY:30+RADIUS+RADIUS*2*y,
					color:colors[Math.floor(Math.random()*colors.length)],
					g:1.5+Math.random(),
					vx:Math.pow(-1, Math.ceil(Math.random()*10))*4+Math.random(),
					vy:-5
				}
				balls.push(ball);
			}
		}
	}	
}

function renderBalls(cfield){
	for(var index = 0;index<balls.length;index++){
		cfield.beginPath();
		cfield.fillStyle=balls[index].color;
		cfield.arc(balls[index].offsetX, balls[index].offsetY, RADIUS, 0, 2*Math.PI);
		cfield.fill();
	}
}

function updateBalls () {
	var i =0;
	for(var index = 0;index<balls.length;index++){
		var ball = balls[index];
		ball.offsetX += ball.vx;
		ball.offsetY += ball.vy;
		ball.vy+=ball.g;
		if(ball.offsetY > (WINDOW_HEIGHT-RADIUS)){
			ball.offsetY = WINDOW_HEIGHT-RADIUS;
			//ball.vy=-ball.vy*u;
			ball.vy = 0;
			ball.vx = 0;
		}
		if(ball.offsetX>RADIUS&&ball.offsetX<(WINDOW_WIDTH-RADIUS)){
			balls[i]=balls[index];
			i++;
		}
	}
			//去除出边界的球
	for(;i<balls.length;i++){
		balls.pop();
	}
}

function drawBottle(cfield, currentNum){
	var percent = currentNum/totalNum;
	cfield.rect(0,percent*WINDOW_HEIGHT,WINDOW_WIDTH,WINDOW_HEIGHT*(1-percent));
	cfield.fill();
}

$(function(){
	$('<input id="timefield" type="text" value="请输入时间"></input>').appendTo($(showfield));
	$('<input id="startbutton" type="button" value="开始"></input>').insertAfter($(timefield));
	timefield.onfocus = function(){
		this.value = "";
	}
	timefield.onblur = function(){
		if(this.value == ""){
			this.value = "请输入时间";
		}
	}
	startbutton.onclick = function(){
		if(isNaN(timefield.value)){
			alert("请输入分钟（数字）");
			return;
		}
		$(timefield).css("display","none");
		$(startbutton).css("display","none");
		$('<canvas id="canvas" width="600" height="600"></canvas>').appendTo($(showfield));
		
		canvasfield = document.getElementById("canvas").getContext("2d");
		setTime = timefield.value * 60 *20; //设置50hz跳跃的时间
		totalNum = setTime;
		sign = setInterval(function(){
			canvasfield.clearRect(0, 0, canvasfield.canvas.width, canvasfield.canvas.height);
			drawTime(canvasfield);
			setTime -= 1;
		},50);
	}
})
