window.onload = function(){
	var time = document.querySelector('.time');
	var correct = document.querySelector('.correct');
	var wrong = document.querySelector('.wrong');
	var rate = document.querySelector('.rate');
	var speed = document.querySelector('.speed');
	var font = document.querySelector('.mid .font span');
	var cha = document.querySelectorAll('.bot>div>div');
	var t = 0;
	var r = 0;
	var w = 0;
	var fontNum;
	getFont();
	setInterval(function(){
		t++;
		speed.innerHTML = Math.floor((r+w)/t*10)/10;
		time.innerHTML = t;
	},1000);
	document.onkeydown = function(e){
		var e = e || window.event;
		cha.forEach(function(val,i){
			val.style.animation = 'none';
		})
		var classname = String.fromCharCode(e.keyCode);
		var str = `.${classname}`;
		document.querySelector(str).style.animation = 'change 0.5s linear 0s 1';
		if(e.keyCode == fontNum){
			r++;
			correct.innerHTML = r;
			var prvFontNum = fontNum;
			do{
				getFont();
			}while(fontNum == prvFontNum);
		}else{
			w++;
			wrong.innerHTML = w;
		}
		rate.innerHTML = Math.floor(r/(r+w)*100)+'%';
		speed.innerHTML = Math.floor((r+w)/t*10)/10;
	}
	function getFont(){
		fontNum = Math.floor(Math.random()*26+65);
		font.innerHTML = String.fromCharCode(fontNum);
	}
}